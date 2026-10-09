/* ==========================================================================
   CONSTRUCTION ESTIMATING SERVICES - INTERACTIVE JAVASCRIPT (script.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------------------
  // 1. COUNTDOWN TIMER WIDGET LOGIC
  // ----------------------------------------------------
  const initCountdown = () => {
    const timerDisplay = document.getElementById('countdownTimer');
    if (!timerDisplay) return;

    // Set countdown target time (9 Days, 8 Hours, 1 Minute, 28 Seconds from now)
    let targetTime = Date.now() + (9 * 86400 + 8 * 3600 + 1 * 60 + 28) * 1000;

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      timerDisplay.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  };

  // ----------------------------------------------------
  // 2. HERO "READ MORE" EXPANSION TOGGLE
  // ----------------------------------------------------
  const initHeroToggle = () => {
    const toggleBtn = document.getElementById('heroReadMoreBtn');
    const extraText = document.getElementById('heroExtraText');

    if (!toggleBtn || !extraText) return;

    let isExpanded = false;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isExpanded = !isExpanded;

      if (isExpanded) {
        extraText.classList.remove('hidden');
        toggleBtn.innerHTML = 'Show Less &uarr;';
      } else {
        extraText.classList.add('hidden');
        toggleBtn.innerHTML = 'Read More &rarr;';
      }
    });
  };

  // ----------------------------------------------------
  // 2C. WHY CHOOSE SECTION "READ MORE" EXPANSION TOGGLE
  // ----------------------------------------------------
  const initWhyChooseToggle = () => {
    const toggleBtn = document.getElementById('whyChooseReadMoreBtn');
    const extraText = document.getElementById('whyChooseExtraText');

    if (!toggleBtn || !extraText) return;

    let isExpanded = false;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isExpanded = !isExpanded;

      if (isExpanded) {
        extraText.classList.remove('hidden');
        toggleBtn.innerHTML = 'Show Less &uarr;';
      } else {
        extraText.classList.add('hidden');
        toggleBtn.innerHTML = 'Read More &rarr;';
      }
    });
  };

  // ----------------------------------------------------
  // 2D. CARD "LEARN MORE" EXPANSION TOGGLE
  // ----------------------------------------------------
  const initCardExpandToggle = () => {
    const cardBtns = document.querySelectorAll('.card-expand-btn');

    cardBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.service-card, .why-card, .serve-card, .type-card, .process-card, .project-card, .included-card');
        if (!card) return;

        const extraText = card.querySelector('.card-extra-text');
        if (!extraText) return;

        const isHidden = extraText.classList.contains('hidden');
        if (isHidden) {
          extraText.classList.remove('hidden');
          btn.innerHTML = 'Read Less &uarr;';
        } else {
          extraText.classList.add('hidden');
          btn.innerHTML = 'Read More &rarr;';
        }
      });
    });
  };


  // ----------------------------------------------------
  // 3. MOBILE NAVIGATION DRAWER
  // ----------------------------------------------------
  const initMobileNav = () => {
    const openBtn = document.getElementById('mobileMenuOpen');
    const closeBtn = document.getElementById('mobileMenuClose');
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('navOverlay');

    if (!openBtn || !drawer || !overlay) return;

    const openDrawer = () => {
      drawer.classList.add('open');
      overlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
    };

    openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Close on clicking links
    const mobileLinks = drawer.querySelectorAll('a');
    mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
  };

  // ----------------------------------------------------
  // 4. FAQ ACCORDION EXPAND/COLLAPSE
  // ----------------------------------------------------
  const initFAQAccordion = () => {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Close all other open accordion items
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  };

  // ----------------------------------------------------
  // 5. FILE UPLOAD SELECTOR DISPLAY FEEDBACK
  // ----------------------------------------------------
  const initFileUpload = () => {
    const fileInput = document.getElementById('planFileInput');
    const fileStatus = document.getElementById('fileUploadStatus');

    if (!fileInput || !fileStatus) return;

    fileInput.addEventListener('change', (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        fileStatus.textContent = `- ${files[0].name} (${(files[0].size / 1024 / 1024).toFixed(2)} MB)`;
        fileStatus.style.color = '#25396D';
        fileStatus.style.fontWeight = 'bold';
      } else {
        fileStatus.textContent = '- No File Chosen';
        fileStatus.style.color = '#8992A3';
        fileStatus.style.fontWeight = 'normal';
      }
    });
  };

  // ----------------------------------------------------
  // 6. ZIP CODE SEARCH ESTIMATOR FINDER
  // ----------------------------------------------------
  const initZipSearch = () => {
    const zipForm = document.getElementById('zipSearchForm');
    const zipInput = document.getElementById('zipCodeInput');

    if (!zipForm || !zipInput) return;

    zipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const zip = zipInput.value.trim();
      if (!zip) {
        alert('Please enter a valid US Zip Code.');
        return;
      }
      alert(`Local Estimator Found! A senior construction cost estimator is available for ZIP Code ${zip}. Submit your plans above to get an instant scope review.`);
    });
  };

  // ----------------------------------------------------
  // 7. SAMPLE ESTIMATE REPORT CSI TABLE TAB FILTER
  // ----------------------------------------------------
  const initTableTabs = () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tableRows = document.querySelectorAll('.estimate-table tbody tr');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        tableRows.forEach(row => {
          if (category === 'all' || row.getAttribute('data-category') === category) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  };

  // ----------------------------------------------------
  // 8. ESTIMATE FORM SUBMISSION HANDLER
  // ----------------------------------------------------
  const initEstimateForm = () => {
    const form = document.getElementById('constructionEstimateForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');

      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        alert('Please complete all required fields (*)');
        return;
      }

      alert('Thank you! Your construction estimate request has been received. Our senior estimator will review your plans and contact you within 24 hours.');
      form.reset();
      const fileStatus = document.getElementById('fileUploadStatus');
      if (fileStatus) {
        fileStatus.textContent = '- No File Chosen';
        fileStatus.style.color = '#8992A3';
        fileStatus.style.fontWeight = 'normal';
      }
    });
  };

  // ----------------------------------------------------
  // 9. REVIEWS CAROUSEL NAVIGATION LOGIC
  // ----------------------------------------------------
  const initReviewCarousel = () => {
    const track = document.getElementById('reviewsCarouselTrack');
    const prevBtn = document.getElementById('reviewPrevBtn');
    const nextBtn = document.getElementById('reviewNextBtn');

    if (!track || !prevBtn || !nextBtn) return;

    const scrollAmount = 310; // Scroll distance per click (card width + gap)

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  };

  // ----------------------------------------------------
  // 2B. SERVICES SECTION "READ MORE" EXPANSION TOGGLE
  // ----------------------------------------------------
  const initServicesToggle = () => {
    const toggleBtn = document.getElementById('servicesReadMoreBtn');
    const extraText = document.getElementById('servicesExtraText');

    if (!toggleBtn || !extraText) return;

    let isExpanded = false;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isExpanded = !isExpanded;

      if (isExpanded) {
        extraText.classList.remove('hidden');
        toggleBtn.innerHTML = 'Show Less &uarr;';
      } else {
        extraText.classList.add('hidden');
        toggleBtn.innerHTML = 'Read More &rarr;';
      }
    });
  };

  // ----------------------------------------------------
  // 2E. MAP SECTION "READ MORE" EXPANSION TOGGLE
  // ----------------------------------------------------
  const initMapToggle = () => {
    const toggleBtn = document.getElementById('mapReadMoreBtn');
    const extraText = document.getElementById('mapExtraText');

    if (!toggleBtn || !extraText) return;

    let isExpanded = false;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isExpanded = !isExpanded;

      if (isExpanded) {
        extraText.classList.remove('hidden');
        toggleBtn.innerHTML = 'Show Less &uarr;';
      } else {
        extraText.classList.add('hidden');
        toggleBtn.innerHTML = 'Read More &rarr;';
      }
    });
  };

  // ----------------------------------------------------
  // 10. FAQ CATEGORY TABS SWITCHER
  // ----------------------------------------------------
  const initFaqTabs = () => {
    const tabBtns = document.querySelectorAll('.faq-tab-btn');
    const tabPanes = document.querySelectorAll('.faq-tab-pane');
    const tabsNav = document.getElementById('faqTabsNav');
    const scrollLeftBtn = document.getElementById('faqTabScrollLeft');
    const scrollRightBtn = document.getElementById('faqTabScrollRight');

    if (!tabBtns.length || !tabPanes.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');

        // Deactivate all tab buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        // Activate selected tab button and pane
        btn.classList.add('active');
        const activePane = document.getElementById(targetId);
        if (activePane) {
          activePane.classList.add('active');
        }

        // Scroll active tab into view smoothly
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });

    // Horizontal Scroll Buttons Handler
    if (tabsNav && scrollLeftBtn && scrollRightBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        tabsNav.scrollBy({ left: -260, behavior: 'smooth' });
      });

      scrollRightBtn.addEventListener('click', () => {
        tabsNav.scrollBy({ left: 260, behavior: 'smooth' });
      });
    }

    // Global Floating Tooltip Handler
    const globalTooltip = document.getElementById('globalTabTooltip');
    const tooltipTextEl = globalTooltip ? globalTooltip.querySelector('.tooltip-text') : null;
    const arrowEl = globalTooltip ? globalTooltip.querySelector('.tooltip-arrow') : null;

    if (globalTooltip && tooltipTextEl) {
      // Ensure element is a direct child of <body> to escape any parent CSS overflow/transform contexts
      if (globalTooltip.parentNode !== document.body) {
        document.body.appendChild(globalTooltip);
      }

      const showTooltip = (targetEl) => {
        const text = targetEl.getAttribute('data-tooltip') || targetEl.closest('.faq-tab-btn')?.getAttribute('data-tooltip');
        if (!text) return;

        tooltipTextEl.textContent = text;
        const rect = targetEl.getBoundingClientRect();
        const targetCenter = rect.left + (rect.width / 2);

        // Make visible temporarily to calculate true width & height
        globalTooltip.style.left = `-9999px`;
        globalTooltip.style.top = `-9999px`;
        globalTooltip.classList.add('show');

        const tooltipWidth = globalTooltip.offsetWidth || 230;
        const tooltipHeight = globalTooltip.offsetHeight || 50;

        // Clamp tooltip left coordinate so it never goes off-screen (minimum 16px from screen edge)
        const minLeft = (tooltipWidth / 2) + 16;
        const maxLeft = window.innerWidth - (tooltipWidth / 2) - 16;
        const clampedLeft = Math.max(minLeft, Math.min(maxLeft, targetCenter));

        // Adjust arrow position so it stays aligned with target center
        if (arrowEl) {
          const arrowOffset = targetCenter - clampedLeft;
          arrowEl.style.left = `calc(50% + ${arrowOffset}px)`;
        }

        let top = rect.top - tooltipHeight - 12;
        // Position below if tooltip goes above the top of the screen
        if (top < 10) {
          top = rect.bottom + 12;
          if (arrowEl) {
            arrowEl.style.top = `-6px`;
            arrowEl.style.borderWidth = `0 6px 6px 6px`;
            arrowEl.style.borderColor = `transparent transparent #0f172a transparent`;
          }
        } else {
          if (arrowEl) {
            arrowEl.style.top = `100%`;
            arrowEl.style.borderWidth = `6px 6px 0 6px`;
            arrowEl.style.borderColor = `#0f172a transparent transparent transparent`;
          }
        }

        globalTooltip.style.left = `${clampedLeft}px`;
        globalTooltip.style.top = `${top}px`;
      };

      const hideTooltip = () => {
        globalTooltip.classList.remove('show');
      };

      tabBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => showTooltip(btn));
        btn.addEventListener('mouseleave', hideTooltip);
        btn.addEventListener('focus', () => showTooltip(btn));
        btn.addEventListener('blur', hideTooltip);
      });

      if (tabsNav) {
        tabsNav.addEventListener('scroll', hideTooltip, { passive: true });
      }
      window.addEventListener('scroll', hideTooltip, { passive: true });
      window.addEventListener('resize', hideTooltip, { passive: true });
    }
  };

  // ----------------------------------------------------
  // 11. GENERAL "READ MORE" TOGGLES FOR KB & FAQ PANES
  // ----------------------------------------------------
  // 11. GENERAL "READ MORE" TOGGLES FOR KB & SECTION HEADERS
  // ----------------------------------------------------
  const initReadMoreToggles = () => {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const container = btn.closest('.kb-text-container') || btn.closest('.section-title-wrap') || btn.parentElement;
        if (!container) return;

        const extraText = container.querySelector('.kb-full-text') || container.querySelector('.section-extra-text') || container.querySelector('.card-extra-text');
        if (!extraText) return;

        const isHidden = extraText.classList.contains('hidden');
        if (isHidden) {
          extraText.classList.remove('hidden');
          btn.innerHTML = 'Read Less &uarr;';
        } else {
          extraText.classList.add('hidden');
          btn.innerHTML = 'Read More &rarr;';
        }
      });
    });
  };

  // ----------------------------------------------------
  // DYNAMIC MAP STATE SELECTOR & DOT HIGHLIGHTER
  // ----------------------------------------------------
  const initMapStateSelector = () => {
    const select = document.getElementById('stateSelectInput');
    const nodesGroup = document.getElementById('stateNodesGroup');
    const mapGridTag = document.getElementById('mapGridTag');
    const mapGridFooterNote = document.getElementById('mapGridFooterNote');
    const form = document.getElementById('stateSelectorForm');

    if (!select || !nodesGroup) return;

    const stateCoordinates = {
      "Alabama": { x: 310, y: 175 },
      "Alaska": { x: 75, y: 220 },
      "Arizona": { x: 120, y: 145 },
      "Arkansas": { x: 250, y: 165 },
      "California": { x: 60, y: 120 },
      "Colorado": { x: 170, y: 125 },
      "Connecticut": { x: 405, y: 88 },
      "Delaware": { x: 395, y: 115 },
      "Florida": { x: 360, y: 215 },
      "Georgia": { x: 340, y: 175 },
      "Hawaii": { x: 140, y: 235 },
      "Idaho": { x: 105, y: 75 },
      "Illinois": { x: 270, y: 115 },
      "Indiana": { x: 290, y: 115 },
      "Iowa": { x: 245, y: 105 },
      "Kansas": { x: 210, y: 135 },
      "Kentucky": { x: 310, y: 135 },
      "Louisiana": { x: 260, y: 195 },
      "Maine": { x: 425, y: 55 },
      "Maryland": { x: 388, y: 112 },
      "Massachusetts": { x: 415, y: 80 },
      "Michigan": { x: 300, y: 85 },
      "Minnesota": { x: 240, y: 70 },
      "Mississippi": { x: 285, y: 180 },
      "Missouri": { x: 245, y: 135 },
      "Montana": { x: 145, y: 65 },
      "Nebraska": { x: 200, y: 105 },
      "Nevada": { x: 80, y: 105 },
      "New Hampshire": { x: 415, y: 68 },
      "New Jersey": { x: 402, y: 102 },
      "New Mexico": { x: 145, y: 160 },
      "New York": { x: 385, y: 80 },
      "North Carolina": { x: 375, y: 145 },
      "North Dakota": { x: 195, y: 65 },
      "Ohio": { x: 320, y: 110 },
      "Oklahoma": { x: 215, y: 160 },
      "Oregon": { x: 60, y: 70 },
      "Pennsylvania": { x: 370, y: 100 },
      "Rhode Island": { x: 420, y: 84 },
      "South Carolina": { x: 360, y: 160 },
      "South Dakota": { x: 195, y: 85 },
      "Tennessee": { x: 310, y: 150 },
      "Texas": { x: 200, y: 195 },
      "Utah": { x: 115, y: 115 },
      "Vermont": { x: 405, y: 65 },
      "Virginia": { x: 375, y: 125 },
      "Washington": { x: 70, y: 45 },
      "West Virginia": { x: 350, y: 125 },
      "Wisconsin": { x: 265, y: 80 },
      "Wyoming": { x: 140, y: 95 }
    };

    nodesGroup.innerHTML = '';
    Object.keys(stateCoordinates).forEach(state => {
      const pos = stateCoordinates[state];
      
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'state-node-group');
      g.setAttribute('data-state', state);
      g.style.cursor = 'pointer';

      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ring.setAttribute('cx', pos.x);
      ring.setAttribute('cy', pos.y);
      ring.setAttribute('r', '12');
      ring.setAttribute('fill', 'url(#dotGlow)');
      ring.setAttribute('class', 'state-pulse-ring');
      ring.style.opacity = '0';
      ring.style.transition = 'all 0.3s ease';

      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', pos.x);
      dot.setAttribute('cy', pos.y);
      dot.setAttribute('r', '3.5');
      dot.setAttribute('fill', '#E2E8F0');
      dot.setAttribute('class', 'state-dot');
      dot.style.transition = 'all 0.3s ease';

      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = state;

      g.appendChild(ring);
      g.appendChild(dot);
      g.appendChild(title);

      g.addEventListener('click', () => {
        select.value = state;
        updateActiveState(state);
      });

      nodesGroup.appendChild(g);
    });

    const updateActiveState = (selectedState) => {
      const allGroups = nodesGroup.querySelectorAll('.state-node-group');
      allGroups.forEach(group => {
        const stateName = group.getAttribute('data-state');
        const dot = group.querySelector('.state-dot');
        const ring = group.querySelector('.state-pulse-ring');

        if (stateName === selectedState) {
          dot.setAttribute('fill', '#F08028');
          dot.setAttribute('r', '6.5');
          ring.style.opacity = '0.85';
          ring.setAttribute('r', '15');
        } else {
          dot.setAttribute('fill', '#A0AEC0');
          dot.setAttribute('r', '3.5');
          ring.style.opacity = '0';
          ring.setAttribute('r', '12');
        }
      });

      if (selectedState) {
        if (mapGridTag) mapGridTag.textContent = `${selectedState.toUpperCase()} COVERAGE ACTIVE`;
        if (mapGridFooterNote) mapGridFooterNote.textContent = `Selected Location: ${selectedState} — Local labor rates, material pricing & trade estimates active.`;
      } else {
        if (mapGridTag) mapGridTag.textContent = '50 STATES COVERAGE';
        if (mapGridFooterNote) mapGridFooterNote.textContent = 'Select a state from the dropdown menu to find specialized regional estimating information.';
      }
    };

    select.addEventListener('change', (e) => {
      updateActiveState(e.target.value);
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedState = select.value;
        if (!selectedState) {
          alert('Please select a state from the dropdown list.');
          return;
        }
        alert(`Redirecting to ${selectedState} Construction Estimating Services... Regional pricing and trade coverage ready.`);
      });
    }

    if (select.value) {
      updateActiveState(select.value);
    }
  };

  // Initialize all interactive modules
  initCountdown();
  initHeroToggle();
  initServicesToggle();
  initWhyChooseToggle();
  initMapToggle();
  initMapStateSelector();
  initCardExpandToggle();
  initMobileNav();
  initFAQAccordion();
  initFaqTabs();
  initReadMoreToggles();
  initFileUpload();
  initZipSearch();
  initTableTabs();
  initEstimateForm();
  initReviewCarousel();
});


