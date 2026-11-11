/**
 * animations.js — Full Portfolio Animation System
 * Covers: scroll-reveal, hero typing, floating particles, counters,
 * timeline draw, tech-card float, skill-badge wave, arch sequential
 * reveal, scroll-progress bar, cursor glow, reduced-motion awareness.
 */
(function () {
  'use strict';

  /* ─────────────────────────────────────────
     0. REDUCED MOTION GUARD
  ───────────────────────────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─────────────────────────────────────────
     1. SCROLL PROGRESS BAR
  ───────────────────────────────────────── */
  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.id = 'scrollProgressBar';
    bar.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'height:3px', 'width:0%',
      'z-index:9999', 'pointer-events:none',
      'background:linear-gradient(90deg,#2563eb,#7c3aed,#ec4899)',
      'transition:width 0.1s linear',
      'border-radius:0 2px 2px 0',
    ].join(';');
    document.body.prepend(bar);

    if (prefersReduced) { bar.style.display = 'none'; return; }

    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ─────────────────────────────────────────
     2. SCROLL REVEAL  (directional variants)
     Classes: .reveal  .reveal-left  .reveal-right  .reveal-scale
  ───────────────────────────────────────── */
  function initReveal() {
    const variants = {
      'reveal':       'translateY(32px)',
      'reveal-left':  'translateX(-40px)',
      'reveal-right': 'translateX(40px)',
      'reveal-scale': 'scale(0.88) translateY(20px)',
    };

    const allVariantSelectors = Object.keys(variants).map(function (c) { return '.' + c; }).join(',');

    document.querySelectorAll(allVariantSelectors).forEach(function (el) {
      let transform = 'translateY(32px)';
      for (const cls in variants) {
        if (el.classList.contains(cls)) { transform = variants[cls]; break; }
      }

      if (prefersReduced) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        return;
      }

      el.style.opacity = '0';
      el.style.transform = transform;
      el.style.transition = 'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)';

      const siblings = Array.from(el.parentElement.querySelectorAll(allVariantSelectors));
      const siblingIdx = siblings.indexOf(el);
      if (siblings.length > 1) {
        el.style.transitionDelay = (siblingIdx * 0.09) + 's';
      }
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

    document.querySelectorAll(allVariantSelectors).forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ─────────────────────────────────────────
     3. HERO TYPING EFFECT
  ───────────────────────────────────────── */
  function initTyping() {
    const target = document.querySelector('#home h1 .text-gradient');
    if (!target || prefersReduced) return;

    const fullText = target.textContent.trim();
    if (!fullText) return;

    target.textContent = '';
    target.style.borderRight = '2px solid currentColor';
    // No nowrap — allow natural wrapping so hero doesn't overflow on mobile
    target.style.display = 'inline';

    let i = 0;
    function type() {
      if (i <= fullText.length) {
        target.textContent = fullText.slice(0, i);
        i++;
        setTimeout(type, 55);
      } else {
        let blinks = 0;
        const blink = setInterval(function () {
          target.style.borderRightColor = blinks % 2 === 0 ? 'transparent' : 'currentColor';
          blinks++;
          if (blinks > 5) { clearInterval(blink); target.style.borderRight = 'none'; }
        }, 400);
      }
    }
    setTimeout(type, 700);
  }

  /* ─────────────────────────────────────────
     4. HERO FLOATING PARTICLES
  ───────────────────────────────────────── */
  function initParticles() {
    if (prefersReduced) return;
    const hero = document.querySelector('#home');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'heroParticles';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0.4';
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let W, H, particles;

    function resize() {
      W = canvas.width  = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    }

    function Particle() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 2.2 + 0.6;
      this.dx = (Math.random() - 0.5) * 0.45;
      this.dy = (Math.random() - 0.5) * 0.45;
      const hue = Math.random() > 0.5 ? '217' : '262';
      this.color = 'hsla(' + hue + ',80%,65%,' + (Math.random() * 0.5 + 0.2) + ')';
    }

    function initP() {
      resize();
      const count = Math.min(80, Math.floor((W * H) / 14000));
      particles = Array.from({ length: count }, function () { return new Particle(); });
    }

    let animId;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    }

    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { animId = requestAnimationFrame(draw); }
      else { cancelAnimationFrame(animId); }
    }, { threshold: 0 }).observe(hero);

    initP();
    window.addEventListener('resize', initP, { passive: true });
  }

  /* ─────────────────────────────────────────
     5. COUNTER ANIMATION  (easeOutQuint)
  ───────────────────────────────────────── */
  function easeOutQuint(t) { return 1 - Math.pow(1 - t, 5); }

  let countersStarted = false;
  function animateCounters() {
    if (countersStarted) return;
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;
    const rect = counters[0].getBoundingClientRect();
    if (rect.top > window.innerHeight) return;
    countersStarted = true;

    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      if (isNaN(target)) return;
      if (prefersReduced) { counter.textContent = target; return; }

      const duration = 2000;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        counter.textContent = Math.floor(easeOutQuint(t) * target);
        if (t < 1) requestAnimationFrame(tick);
        else counter.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }

  /* ─────────────────────────────────────────
     6. TIMELINE LINE DRAW + DOT PING
  ───────────────────────────────────────── */
  function initTimelineDraw() {
    if (prefersReduced) return;

    document.querySelectorAll('.timeline-item').forEach(function (item, idx) {
      item.style.borderLeftColor = 'transparent';

      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          setTimeout(function () {
            item.style.transition = 'border-left-color 0.6s ease';
            // Re-read dark mode at reveal time (handles toggles)
            const dark = document.documentElement.classList.contains('dark');
            item.style.borderLeftColor = dark ? '#1e293b' : '#e2e8f0';
            if (item === item.parentElement.lastElementChild) {
              item.style.borderLeftColor = 'transparent';
            }
          }, idx * 150);
        }
      }, { threshold: 0.1 }).observe(item);
    });
  }

  /* ─────────────────────────────────────────
     7. TECH CARDS — FLOATING ANIMATION
  ───────────────────────────────────────── */
  function initTechCardFloat() {
    if (prefersReduced) return;
    document.querySelectorAll('.tech-card-hero').forEach(function (card, i) {
      card.style.animation = 'techFloat ' + (2.8 + (i % 3) * 0.4).toFixed(1) + 's ease-in-out ' + (i * 0.22).toFixed(2) + 's infinite';
    });
  }

  /* ─────────────────────────────────────────
     8. SKILL BADGES — WAVE STAGGER
  ───────────────────────────────────────── */
  function initSkillBadgeWave() {
    if (prefersReduced) return;
    document.querySelectorAll('.skill-group').forEach(function (group) {
      const badges = group.querySelectorAll('.skill-badge');
      badges.forEach(function (badge, i) {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(10px) scale(0.9)';
        badge.style.transition = 'opacity 0.4s ease ' + (i * 0.05) + 's, transform 0.4s ease ' + (i * 0.05) + 's';
      });

      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          badges.forEach(function (badge) {
            badge.style.opacity = '1';
            badge.style.transform = 'none';
          });
        }
      }, { threshold: 0.15 }).observe(group);
    });
  }

  /* ─────────────────────────────────────────
     9. ARCHITECTURE DIAGRAM — SEQUENTIAL REVEAL
  ───────────────────────────────────────── */
  function initArchReveal() {
    if (prefersReduced) return;
    const diagram = document.querySelector('.arch-diagram');
    if (!diagram) return;

    const layers = diagram.querySelectorAll('.arch-layer');
    const arrows = diagram.querySelectorAll('.arch-arrow');
    const allEls = [];
    layers.forEach(function (l, i) { allEls.push(l); if (arrows[i]) allEls.push(arrows[i]); });

    allEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        allEls.forEach(function (el, i) {
          setTimeout(function () { el.style.opacity = '1'; el.style.transform = 'none'; }, i * 140);
        });
        setTimeout(function () {
          arrows.forEach(function (arrow, i) {
            arrow.style.animation = 'archArrowPulse 1.8s ease-in-out ' + (i * 0.3) + 's infinite';
          });
        }, allEls.length * 140 + 500);
      }
    }, { threshold: 0.2 }).observe(diagram);
  }

  /* ─────────────────────────────────────────
     10. CURSOR GLOW (desktop only)
  ───────────────────────────────────────── */
  function initCursorGlow() {
    if (prefersReduced || window.innerWidth < 1024) return;
    const glow = document.createElement('div');
    glow.id = 'cursorGlow';
    glow.style.cssText = [
      'position:fixed', 'pointer-events:none', 'z-index:9990',
      'width:320px', 'height:320px', 'border-radius:50%',
      'background:radial-gradient(circle,rgba(37,99,235,0.10) 0%,transparent 70%)',
      'transform:translate(-50%,-50%)',
      'transition:left 0.12s ease,top 0.12s ease',
      'left:-200px', 'top:-200px',
    ].join(';');
    document.body.appendChild(glow);

    window.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }, { passive: true });
  }

  /* ─────────────────────────────────────────
     11. NAVBAR LOGO SPIN ENTRANCE
  ───────────────────────────────────────── */
  function initNavbarEntrance() {
    if (prefersReduced) return;
    const logo = document.querySelector('#navbar a[href="#home"] > div');
    if (!logo) return;
    // Use opacity+rotate instead of scale(0) to avoid the logo vanishing during page load
    logo.style.opacity = '0';
    logo.style.transform = 'rotate(-180deg)';
    logo.style.transition = 'opacity 0.5s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        logo.style.opacity = '1';
        logo.style.transform = 'rotate(0deg)';
      });
    });
  }

  /* ─────────────────────────────────────────
     12. CARD 3-D TILT ON HOVER (desktop)
  ───────────────────────────────────────── */
  function initCardTilt() {
    if (prefersReduced || window.innerWidth < 768) return;
    document.querySelectorAll('.project-card, .banking-card, .skill-group, .about-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = 'translateY(-4px) rotateX(' + (-y * 5) + 'deg) rotateY(' + (x * 5) + 'deg)';
        card.style.transition = 'transform 0.1s ease';
      }, { passive: true });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s ease, box-shadow 0.25s ease';
      });
    });
  }

  /* ─────────────────────────────────────────
     13. PAGE LOAD FADE-IN SPLASH
  ───────────────────────────────────────── */
  function initPageLoad() {
    if (prefersReduced) return;
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { document.body.style.opacity = '1'; });
    });
  }

  /* ─────────────────────────────────────────
     14. INJECT CSS KEYFRAMES + DOT PING
  ───────────────────────────────────────── */
  function injectKeyframes() {
    const style = document.createElement('style');
    style.id = 'anim-keyframes';
    style.textContent = `
      @keyframes techFloat {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-7px); }
      }
      @keyframes archArrowPulse {
        0%, 100% { opacity: 0.5; transform: translateY(0); }
        50%       { opacity: 1;   transform: translateY(3px); }
      }
      @keyframes dotPing {
        0%, 100% { box-shadow: 0 0 0 0   rgba(37,99,235,0.6); }
        50%       { box-shadow: 0 0 0 8px rgba(37,99,235,0);   }
      }
      @keyframes shimmer {
        0%   { background-position: -400px 0; }
        100% { background-position:  400px 0; }
      }
    `;
    document.head.appendChild(style);

    if (!prefersReduced) {
      document.querySelectorAll('.timeline-dot').forEach(function (dot, i) {
        dot.style.animation = 'dotPing 2s ease-in-out ' + (i * 0.4) + 's infinite';
      });
    }
  }

  /* ─────────────────────────────────────────
     15. SECTION LABEL SHIMMER
  ───────────────────────────────────────── */
  function initLabelShimmer() {
    if (prefersReduced) return;
    document.querySelectorAll('.section-label').forEach(function (label) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          label.style.backgroundImage = 'linear-gradient(90deg,#eff6ff 0%,#bfdbfe 40%,#eff6ff 60%,#eff6ff 100%)';
          label.style.backgroundSize = '400px 100%';
          label.style.animation = 'shimmer 1.5s ease 0.2s 1 forwards';
          setTimeout(function () { label.style.backgroundImage = ''; label.style.animation = ''; }, 2000);
        }
      }, { threshold: 1 }).observe(label);
    });
  }

  /* ─────────────────────────────────────────
     16. BUTTON HOVER GLOW
  ───────────────────────────────────────── */
  function initButtonGlow() {
    if (prefersReduced) return;
    document.querySelectorAll('.btn-primary').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        btn.style.boxShadow = '0 0 24px rgba(37,99,235,0.55), 0 4px 20px rgba(37,99,235,0.4)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.boxShadow = '0 2px 12px rgba(37,99,235,0.3)';
      });
    });
  }

  /* ─────────────────────────────────────────
     INIT
  ───────────────────────────────────────── */
  function init() {
    injectKeyframes();
    initPageLoad();
    initScrollProgress();
    initReveal();
    initTyping();
    initParticles();
    initTechCardFloat();
    initSkillBadgeWave();
    initArchReveal();
    initTimelineDraw();
    initCursorGlow();
    initNavbarEntrance();
    initCardTilt();
    initLabelShimmer();
    initButtonGlow();

    window.addEventListener('scroll', animateCounters, { passive: true });
    animateCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
