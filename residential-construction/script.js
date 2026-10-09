/* Residential Construction Estimating Costs — page interactions
   No dependencies. Works with the markup in index.html. */
(function () {
  "use strict";

  const mqMobile = window.matchMedia("(max-width: 600px)");

  /* -------------------------------------------------------------
     1. Generic tabs: selectable cards + detail panels, FAQ tabs,
        trade pill tabs. Any [role=tablist] whose tabs have
        aria-controls pointing at a [role=tabpanel].
  ------------------------------------------------------------- */
  function initTablist(list, opts = {}) {
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;

    function select(tab, { focus = false, reveal = false } = {}) {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
        if (opts.onToggle) opts.onToggle(t, on);
      });
      if (focus) tab.focus();
      if (reveal) {
        const panel = document.getElementById(tab.getAttribute("aria-controls"));
        // On small screens the panel sits below a carousel; bring it into view.
        if (panel && mqMobile.matches) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab, { reveal: true }));
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) {
          e.preventDefault();
          select(next, { focus: true });
          next.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        }
      });
    });

    const initial = tabs.find((t) => t.getAttribute("aria-selected") === "true") || tabs[0];
    select(initial);
  }

  /* -------------------------------------------------------------
     2. Trade pill tabs — built from the panel data so the copy
        lives in one place, plus arrow scrolling and tooltips.
  ------------------------------------------------------------- */
  function initTrades() {
    const track = document.querySelector("[data-trades]");
    const panelsWrap = document.querySelector("[data-trade-panels]");
    if (!track || !panelsWrap) return;
    const tooltip = document.getElementById("trade-tooltip");
    const panels = Array.from(panelsWrap.querySelectorAll('[role="tabpanel"]'));

    panels.forEach((panel, i) => {
      const n = i + 1;
      const tabId = "tr-t" + n;
      const tipId = "tr-tip" + n;
      panel.setAttribute("aria-labelledby", tabId);

      const pill = document.createElement("div");
      pill.className = "pill";
      pill.innerHTML =
        '<button class="pill__tab" role="tab" id="' + tabId + '" aria-controls="' + panel.id + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : "") + ">" +
        panel.dataset.title + "</button>" +
        '<button class="pill__info" type="button" aria-label="About ' + panel.dataset.title + '" aria-describedby="trade-tooltip" data-tip="' + panel.dataset.desc.replace(/"/g, "&quot;") + '">' +
        '<svg aria-hidden="true"><use href="#i-info"/></svg></button>';
      track.appendChild(pill);
    });

    initTablist(track, {
      onToggle(tab, on) { tab.closest(".pill").classList.toggle("is-active", on); },
    });

    // Tooltip (fixed-position so the scrolling track can't clip it)
    let hideTimer;
    function showTip(btn) {
      clearTimeout(hideTimer);
      tooltip.textContent = btn.dataset.tip;
      tooltip.classList.add("is-visible");
      const r = btn.getBoundingClientRect();
      const tw = tooltip.offsetWidth;
      let left = r.left + r.width / 2 - 40;
      left = Math.max(12, Math.min(left, window.innerWidth - tw - 12));
      tooltip.style.left = left + "px";
      tooltip.style.top = r.bottom + 10 + "px";
    }
    function hideTip() {
      hideTimer = setTimeout(() => tooltip.classList.remove("is-visible"), 80);
    }
    track.querySelectorAll(".pill__info").forEach((btn) => {
      btn.addEventListener("mouseenter", () => showTip(btn));
      btn.addEventListener("focus", () => showTip(btn));
      btn.addEventListener("mouseleave", hideTip);
      btn.addEventListener("blur", hideTip);
      // Touch: tap toggles the tooltip
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        tooltip.classList.contains("is-visible") && tooltip.textContent === btn.dataset.tip ? hideTip() : showTip(btn);
      });
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") tooltip.classList.remove("is-visible"); });
    window.addEventListener("scroll", () => tooltip.classList.remove("is-visible"), { passive: true });
    track.addEventListener("scroll", () => tooltip.classList.remove("is-visible"), { passive: true });

    // Arrow buttons
    const carousel = track.closest(".tabs-carousel");
    const prev = carousel.querySelector('[data-scroll="-1"]');
    const next = carousel.querySelector('[data-scroll="1"]');
    function updateArrows() {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    }
    [prev, next].forEach((b) =>
      b.addEventListener("click", () => {
        track.scrollBy({ left: Number(b.dataset.scroll) * track.clientWidth * 0.8, behavior: "smooth" });
      })
    );
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    updateArrows();
  }

  /* -------------------------------------------------------------
     3. Read More / Learn More expanders for clamped text
  ------------------------------------------------------------- */
  function initExpanders() {
    document.querySelectorAll("[data-expand]").forEach((btn) => {
      const target = document.getElementById(btn.dataset.expand);
      if (!target) return;
      const openLabel = btn.dataset.label || btn.textContent.trim();
      btn.setAttribute("aria-controls", target.id);

      // Hide the button if the text isn't actually clamped
      function check() {
        if (target.classList.contains("is-open")) return;
        const clamped = target.scrollHeight - target.clientHeight > 2;
        btn.hidden = !clamped;
      }
      btn.addEventListener("click", () => {
        const open = target.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
        btn.textContent = open ? "Show Less ↑" : openLabel;
      });
      check();
      window.addEventListener("resize", check);
    });
  }

  /* -------------------------------------------------------------
     4. Accordion
  ------------------------------------------------------------- */
  function initAccordions() {
    document.querySelectorAll(".acc-btn").forEach((btn) => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", String(open));
        panel.hidden = !open;
      });
    });
  }

  /* -------------------------------------------------------------
     5. Mobile nav drawer (same markup as the home page header)
  ------------------------------------------------------------- */
  function initMenu() {
    const openBtn = document.getElementById("mobileMenuOpen");
    const closeBtn = document.getElementById("mobileMenuClose");
    const drawer = document.getElementById("mobileNavDrawer");
    const overlay = document.getElementById("navOverlay");
    if (!openBtn || !drawer || !overlay) return;

    function setOpen(open) {
      drawer.classList.toggle("open", open);
      drawer.inert = !open;
      overlay.classList.toggle("visible", open);
      openBtn.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      if (open && closeBtn) closeBtn.focus();
    }

    openBtn.addEventListener("click", () => setOpen(true));
    if (closeBtn) closeBtn.addEventListener("click", () => { setOpen(false); openBtn.focus(); });
    overlay.addEventListener("click", () => setOpen(false));
    drawer.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape" || !drawer.classList.contains("open")) return;
      setOpen(false);
      openBtn.focus();
    });
    window.matchMedia("(min-width: 1251px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
  }

  /* -------------------------------------------------------------
     6. Mobile carousel dots
  ------------------------------------------------------------- */
  function initDots() {
    document.querySelectorAll(".m-carousel").forEach((row) => {
      const dots = row.nextElementSibling;
      if (!dots || !dots.classList.contains("dots")) return;
      const items = Array.from(row.children);
      dots.innerHTML = items.map(() => "<span></span>").join("");
      const spans = Array.from(dots.children);
      function update() {
        const step = items[1] ? items[1].offsetLeft - items[0].offsetLeft : row.clientWidth;
        const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;
        const idx = atEnd ? items.length - 1 : Math.round(row.scrollLeft / step);
        spans.forEach((s, i) => s.classList.toggle("is-active", i === idx));
      }
      row.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
    });
  }

  /* -------------------------------------------------------------
     7. "On this page" chips — highlight the section in view
  ------------------------------------------------------------- */
  function initToc() {
    const chips = Array.from(document.querySelectorAll(".chip[href^='#']"));
    const map = new Map(chips.map((c) => [c.getAttribute("href").slice(1), c]));
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          const chip = map.get(en.target.id);
          if (chip && en.isIntersecting) {
            chips.forEach((c) => c.classList.remove("is-active"));
            chip.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  /* ------------------------------------------------------------- */
  document.querySelectorAll("[data-select]").forEach((list) => initTablist(list));
  initTablist(document.querySelector("[data-faq-tabs]"));
  initTrades();
  initExpanders();
  initAccordions();
  initMenu();
  initDots();
  initToc();
})();
