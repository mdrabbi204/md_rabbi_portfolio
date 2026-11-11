/**
 * animations.js — Scroll reveal, stat counters, hero typing effect and the
 * scroll progress bar. The visuals live in app.css; this module only toggles
 * state classes, and does nothing decorative when reduced motion is requested.
 */
window.Portfolio = window.Portfolio || {};

(function (P) {
  'use strict';

  const reducedMotion = P.utils.reducedMotion;
  const REVEAL_SELECTOR = '.reveal:not(.is-visible), .reveal-seq:not(.is-visible)';
  const STAGGER_STEP = 0.07; // seconds between siblings
  const STAGGER_MAX = 5;

  let revealObserver = null;

  /* ---- Scroll reveal ---- */

  function staggerDelay(el) {
    const index = Array.prototype.indexOf.call(el.parentElement.children, el);
    return Math.min(index, STAGGER_MAX) * STAGGER_STEP;
  }

  /** Reveal elements inside `root` as they scroll into view. Safe to call again for new content. */
  function observe(root) {
    const elements = (root || document).querySelectorAll(REVEAL_SELECTOR);

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    }

    elements.forEach(function (el) {
      el.style.setProperty('--reveal-delay', staggerDelay(el) + 's');
      revealObserver.observe(el);
    });
  }

  /* ---- Stat counters ---- */

  function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
  }

  function runCounter(counter) {
    const target = parseInt(counter.dataset.target, 10);
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = Math.round(easeOutQuint(progress) * target);
      if (progress < 1) window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length || reducedMotion.matches || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (counter) { observer.observe(counter); });
  }

  /* ---- Hero typing effect ----
     The text is split into a typed part and a hidden remainder, so the full
     phrase always keeps its space and the heading never reflows. */

  function initTyping() {
    const target = document.querySelector('[data-typed]');
    if (!target || reducedMotion.matches) return;

    const text = target.textContent.trim();
    const done = document.createElement('span');
    const rest = document.createElement('span');
    done.className = 'typed__done';
    rest.className = 'typed__rest';
    rest.textContent = text;
    target.replaceChildren(done, rest);
    target.classList.add('is-typing');

    let typed = 0;
    function type() {
      typed += 1;
      done.textContent = text.slice(0, typed);
      rest.textContent = text.slice(typed);
      if (typed < text.length) {
        window.setTimeout(type, 55);
      } else {
        window.setTimeout(function () { target.classList.remove('is-typing'); }, 1200);
      }
    }
    window.setTimeout(type, 700);
  }

  /* ---- Scroll progress bar ---- */

  function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    P.utils.onScroll(function (scrollY) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty('--progress', scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0);
    });
  }

  function init() {
    observe(document);
    initCounters();
    initTyping();
    initScrollProgress();
  }

  P.animations = { init: init, observe: observe };
})(window.Portfolio);
