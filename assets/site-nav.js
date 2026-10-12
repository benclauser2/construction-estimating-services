/* Site navigation: "Services" dropdown in the header (shared by every page).
   Click/Enter toggles it, Escape or focus/click outside closes it.
   Mouse hover also opens it (CSS only). */
(() => {
  "use strict";

  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".nav-dropdown__toggle");
    const menu = dropdown.querySelector(".nav-dropdown__menu");
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      dropdown.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));

    dropdown.addEventListener("keydown", (e) => {
      if (e.key !== "Escape" || !dropdown.classList.contains("is-open")) return;
      setOpen(false);
      toggle.focus();
    });

    dropdown.addEventListener("focusout", (e) => {
      if (!dropdown.contains(e.relatedTarget)) setOpen(false);
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) setOpen(false);
    });
  });
})();
