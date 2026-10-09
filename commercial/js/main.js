/**
 * Commercial Construction Estimating Costs — page interactions.
 * Vanilla JS, no dependencies. Loaded with `defer`.
 *
 * Modules:
 *  1. Mobile menu
 *  2. Read More (clamped text + optional hidden content)
 *  3. Tabs (WAI-ARIA tabs pattern, roving tabindex)
 *  4. Trade carousel arrows
 *  5. Tooltips (one floating element shared by every [data-tooltip])
 *  6. Calculator form (demo handler)
 */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /** Run `fn` at most once per animation frame. */
  const rafThrottle = (fn) => {
    let queued = false;
    return (...args) => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        fn(...args);
      });
    };
  };

  let uid = 0;
  const ensureId = (el, prefix) => {
    if (!el.id) el.id = `${prefix}-${++uid}`;
    return el.id;
  };

  /* ------------------------------------------------------------------
     1. Mobile menu
  ------------------------------------------------------------------ */
  function initMenu() {
    const openBtn = $("#mobileMenuOpen");
    const closeBtn = $("#mobileMenuClose");
    const drawer = $("#mobileNavDrawer");
    const overlay = $("#navOverlay");
    if (!openBtn || !drawer || !overlay) return;

    const desktop = window.matchMedia("(min-width: 1251px)");

    const setOpen = (open) => {
      drawer.classList.toggle("open", open);
      drawer.inert = !open;
      overlay.classList.toggle("visible", open);
      openBtn.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      if (open && closeBtn) closeBtn.focus();
    };

    openBtn.addEventListener("click", () => setOpen(true));
    closeBtn?.addEventListener("click", () => {
      setOpen(false);
      openBtn.focus();
    });
    overlay.addEventListener("click", () => setOpen(false));
    drawer.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        setOpen(false);
        openBtn.focus();
      }
    });
    desktop.addEventListener("change", (e) => e.matches && setOpen(false));
  }

  /* ------------------------------------------------------------------
     2. Read More
     A [data-read-more] button expands the clamped text right before it
     (or the .clamp inside the element right before it). An optional
     data-reveal="id" also shows a hidden element (hero paragraph 2).
     The button hides itself when there is nothing to reveal.
  ------------------------------------------------------------------ */
  function initReadMore() {
    const items = $$("[data-read-more]")
      .map((btn) => {
        const prev = btn.previousElementSibling;
        const target = prev && (prev.matches(".clamp") ? prev : $(".clamp", prev));
        if (!target) return null;
        const extra = btn.dataset.reveal ? document.getElementById(btn.dataset.reveal) : null;
        const label = btn.textContent.trim();

        btn.setAttribute("aria-controls", [ensureId(target, "rm"), extra && extra.id].filter(Boolean).join(" "));
        btn.setAttribute("aria-expanded", "false");

        btn.addEventListener("click", () => {
          const open = !target.classList.contains("is-expanded");
          target.classList.toggle("is-expanded", open);
          if (extra) extra.hidden = !open;
          btn.setAttribute("aria-expanded", String(open));
          btn.textContent = open ? "Read Less ↑" : label;
        });

        return { btn, target, extra };
      })
      .filter(Boolean);

    // Show the button only when the text is actually clamped (or there is hidden content).
    const update = () => {
      items.forEach(({ btn, target, extra }) => {
        if (target.classList.contains("is-expanded")) return;
        // Hidden tab panels report 0 height; leave their buttons alone until shown.
        if (!target.offsetParent && target.closest("[hidden]")) return;
        const clamped = target.scrollHeight - target.clientHeight > 1;
        btn.hidden = !(clamped || extra);
      });
    };

    update();
    window.addEventListener("resize", rafThrottle(update));
    document.addEventListener("tabchange", update);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(update);
  }

  /* ------------------------------------------------------------------
     3. Tabs — any [data-tabs] wrapper containing a [role=tablist].
  ------------------------------------------------------------------ */
  function initTabs() {
    $$("[data-tabs]").forEach((wrap) => {
      const list = $('[role="tablist"]', wrap);
      const tabs = $$('[role="tab"]', list);
      if (!tabs.length) return;

      const select = (tab, { focus = false } = {}) => {
        tabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
          const pill = t.closest(".pill");
          if (pill) pill.classList.toggle("is-active", on);
          const panel = document.getElementById(t.getAttribute("aria-controls"));
          if (panel) panel.hidden = !on;
        });
        if (focus) tab.focus({ preventScroll: true });
        tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion.matches ? "auto" : "smooth" });
        document.dispatchEvent(new CustomEvent("tabchange"));
      };

      tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => select(tab));
        tab.addEventListener("keydown", (e) => {
          const keys = {
            ArrowRight: tabs[(i + 1) % tabs.length],
            ArrowDown: tabs[(i + 1) % tabs.length],
            ArrowLeft: tabs[(i - 1 + tabs.length) % tabs.length],
            ArrowUp: tabs[(i - 1 + tabs.length) % tabs.length],
            Home: tabs[0],
            End: tabs[tabs.length - 1],
          };
          const next = keys[e.key];
          if (!next) return;
          e.preventDefault();
          select(next, { focus: true });
        });
      });
    });
  }

  /* ------------------------------------------------------------------
     4. Trade carousel arrows
  ------------------------------------------------------------------ */
  function initCarousels() {
    $$("[data-carousel]").forEach((root) => {
      const viewport = $("[data-carousel-viewport]", root);
      const prev = $("[data-carousel-prev]", root);
      const next = $("[data-carousel-next]", root);
      if (!viewport || !prev || !next) return;

      const update = () => {
        const max = viewport.scrollWidth - viewport.clientWidth - 2;
        prev.disabled = viewport.scrollLeft <= 2;
        next.disabled = viewport.scrollLeft >= max;
      };
      const scrollBy = (dir) =>
        viewport.scrollBy({
          left: dir * viewport.clientWidth * 0.8,
          behavior: reduceMotion.matches ? "auto" : "smooth",
        });

      prev.addEventListener("click", () => scrollBy(-1));
      next.addEventListener("click", () => scrollBy(1));
      viewport.addEventListener("scroll", rafThrottle(update), { passive: true });
      window.addEventListener("resize", rafThrottle(update));
      update();
    });
  }

  /* ------------------------------------------------------------------
     5. Tooltips
     Hover/focus shows, tap toggles, Escape / scroll / outside click hides.
     A single fixed-position element avoids clipping in scroll containers.
  ------------------------------------------------------------------ */
  function initTooltips() {
    const tip = $("#tooltip");
    const triggers = $$("[data-tooltip]");
    if (!tip || !triggers.length) return;

    let current = null;
    let hideTimer = 0;
    const GAP = 10;
    const EDGE = 12;

    const position = (btn) => {
      const r = btn.getBoundingClientRect();
      const w = tip.offsetWidth;
      const h = tip.offsetHeight;
      // Align the tooltip's arrow with the icon centre; keep it on-screen.
      let left = r.left + r.width / 2 - (w - 30);
      left = Math.max(EDGE, Math.min(left, window.innerWidth - w - EDGE));
      let top = r.bottom + GAP;
      const flip = top + h > window.innerHeight - EDGE && r.top - GAP - h > EDGE;
      if (flip) top = r.top - GAP - h;
      tip.style.left = `${Math.round(left)}px`;
      tip.style.top = `${Math.round(top)}px`;
      tip.style.setProperty("--arrow-x", `${Math.round(r.left + r.width / 2 - left - 6)}px`);
      tip.classList.toggle("is-flipped", flip);
    };

    const show = (btn) => {
      clearTimeout(hideTimer);
      if (current && current !== btn) current.setAttribute("aria-expanded", "false");
      current = btn;
      tip.textContent = btn.dataset.tooltip;
      btn.setAttribute("aria-describedby", "tooltip");
      btn.setAttribute("aria-expanded", "true");
      tip.classList.add("is-visible");
      position(btn);
    };

    const hide = (immediate = false) => {
      const run = () => {
        tip.classList.remove("is-visible");
        if (current) {
          current.removeAttribute("aria-describedby");
          current.setAttribute("aria-expanded", "false");
        }
        current = null;
      };
      clearTimeout(hideTimer);
      immediate ? run() : (hideTimer = setTimeout(run, 80));
    };

    triggers.forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("mouseenter", () => show(btn));
      btn.addEventListener("mouseleave", () => hide());
      btn.addEventListener("focus", () => show(btn));
      btn.addEventListener("blur", () => hide());
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        current === btn && tip.classList.contains("is-visible") ? hide(true) : show(btn);
      });
    });

    document.addEventListener("keydown", (e) => e.key === "Escape" && hide(true));
    document.addEventListener("click", () => current && hide(true));
    window.addEventListener("scroll", () => current && hide(true), { passive: true });
    window.addEventListener("resize", () => current && hide(true));
    $$("[data-carousel-viewport]").forEach((vp) =>
      vp.addEventListener("scroll", () => current && hide(true), { passive: true })
    );
  }

  /* ------------------------------------------------------------------
     6. Calculator form — placeholder handler until a backend exists.
  ------------------------------------------------------------------ */
  function initCalculator() {
    const form = $("[data-calc-form]");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form));
      // Hook point: send `data` to the estimating API / CRM.
      form.dispatchEvent(new CustomEvent("calculator:submit", { detail: data, bubbles: true }));
    });
  }

  /* ------------------------------------------------------------------ */
  initMenu();
  initTabs();
  initReadMore();
  initCarousels();
  initTooltips();
  initCalculator();
})();
