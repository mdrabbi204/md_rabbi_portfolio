/**
 * navigation.js — Sticky navbar state, mobile menu, active section highlight
 * and the back-to-top button. Smooth scrolling itself is native CSS
 * (scroll-behavior on <html>), so anchor links keep working without JS.
 */
window.Portfolio = window.Portfolio || {};

(function (P, $) {
  'use strict';

  const SCROLLED_AFTER = 24;      // px scrolled before the navbar gets its background
  const BACK_TO_TOP_AFTER = 500;  // px scrolled before the back-to-top button appears
  const ACTIVE_OFFSET = 120;      // px below the top edge where a section counts as current

  let $navbar, $nav, $menuBtn, $menuIcon, $links, $backToTop;
  let sections = [];

  /* ---- Mobile menu ---- */

  function setMenuOpen(open) {
    $nav.toggleClass('is-open', open);
    $navbar.toggleClass('is-open', open);
    $menuIcon.toggleClass('fa-bars', !open).toggleClass('fa-xmark', open);
    $menuBtn.attr({
      'aria-expanded': String(open),
      'aria-label': open ? 'Close navigation menu' : 'Open navigation menu',
    });
  }

  function isMenuOpen() {
    return $nav.hasClass('is-open');
  }

  function initMobileMenu() {
    $menuBtn.on('click', function () { setMenuOpen(!isMenuOpen()); });

    $nav.on('click', 'a', function () { setMenuOpen(false); });

    $(document).on('click', function (event) {
      if (isMenuOpen() && !$(event.target).closest('#navbar').length) setMenuOpen(false);
    });

    $(document).on('keydown', function (event) {
      if (event.key === 'Escape' && isMenuOpen()) {
        setMenuOpen(false);
        $menuBtn.trigger('focus');
      }
    });

    // The desktop layout shows the links inline, so drop the open state there.
    window.matchMedia('(min-width: 75rem)').addEventListener('change', function (event) {
      if (event.matches) setMenuOpen(false);
    });
  }

  /* ---- Scroll-driven state ---- */

  function currentSectionId(scrollY) {
    const atBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) return sections[sections.length - 1].id;

    let current = sections[0].id;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= ACTIVE_OFFSET) current = section.id;
    });
    return current;
  }

  function updateOnScroll(scrollY) {
    $navbar.toggleClass('is-scrolled', scrollY > SCROLLED_AFTER);
    $backToTop.toggleClass('is-visible', scrollY > BACK_TO_TOP_AFTER);

    if (!sections.length) return;
    const activeHref = '#' + currentSectionId(scrollY);
    $links.each(function () {
      const active = this.getAttribute('href') === activeHref;
      this.classList.toggle('is-active', active);
      if (active) this.setAttribute('aria-current', 'location');
      else this.removeAttribute('aria-current');
    });
  }

  function init() {
    $navbar = $('#navbar');
    $nav = $('#primaryNav');
    $menuBtn = $('#mobileMenuBtn');
    $menuIcon = $('#menuIcon');
    $links = $nav.find('.nav__link');
    $backToTop = $('#backToTopBtn');

    sections = $links.map(function () {
      return document.querySelector(this.getAttribute('href'));
    }).get();

    initMobileMenu();
    $backToTop.on('click', function () { window.scrollTo({ top: 0 }); });
    P.utils.onScroll(updateOnScroll);
  }

  P.navigation = { init: init };
})(window.Portfolio, jQuery);
