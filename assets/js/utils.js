/**
 * utils.js — Small shared helpers used by every module.
 */
window.Portfolio = window.Portfolio || {};

(function (P) {
  'use strict';

  const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const scrollHandlers = [];
  let scrollTicking = false;

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) { return ESCAPES[char]; });
  }

  /** True for links that actually lead somewhere (not empty or '#'). */
  function isRealUrl(url) {
    return Boolean(url) && url !== '#';
  }

  function slugify(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function runScrollHandlers() {
    scrollTicking = false;
    scrollHandlers.forEach(function (handler) { handler(window.scrollY); });
  }

  /** Register a handler on one shared, frame-throttled scroll/resize listener. */
  function onScroll(handler) {
    if (!scrollHandlers.length) {
      const schedule = function () {
        if (scrollTicking) return;
        scrollTicking = true;
        window.requestAnimationFrame(runScrollHandlers);
      };
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule, { passive: true });
    }
    scrollHandlers.push(handler);
    handler(window.scrollY);
  }

  P.utils = {
    escapeHTML: escapeHTML,
    isRealUrl: isRealUrl,
    slugify: slugify,
    onScroll: onScroll,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
  };
})(window.Portfolio);
