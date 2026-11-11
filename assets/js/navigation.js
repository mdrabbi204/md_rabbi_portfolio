/**
 * navigation.js — Sticky navbar, mobile menu, active section, back-to-top
 */
(function ($) {
  'use strict';

  // ---- Navbar scroll behavior ----
  function handleNavbarScroll() {
    const $navbar = $('#navbar');
    if ($(window).scrollTop() > 60) {
      $navbar.addClass('scrolled');
    } else {
      $navbar.removeClass('scrolled');
    }
  }

  // ---- Active section highlight ----
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'architecture', 'contact'];

  function updateActiveNav() {
    const scrollY = $(window).scrollTop() + 120;
    let current = '';

    sections.forEach(function (id) {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollY) {
        current = id;
      }
    });

    $('.nav-link').each(function () {
      const href = $(this).attr('href');
      if (href === '#' + current) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  // ---- Mobile menu ----
  function initMobileMenu() {
    const $btn = $('#mobileMenuBtn');
    const $menu = $('#mobileMenu');
    const $icon = $('#menuIcon');

    $btn.on('click', function () {
      const isOpen = !$menu.hasClass('hidden');
      if (isOpen) {
        $menu.addClass('hidden');
        $icon.removeClass('fa-xmark').addClass('fa-bars');
        $btn.attr('aria-expanded', 'false');
      } else {
        $menu.removeClass('hidden');
        $icon.removeClass('fa-bars').addClass('fa-xmark');
        $btn.attr('aria-expanded', 'true');
      }
    });

    // Close on link click
    $menu.find('a').on('click', function () {
      $menu.addClass('hidden');
      $icon.removeClass('fa-xmark').addClass('fa-bars');
      $btn.attr('aria-expanded', 'false');
    });

    // Close on outside click
    $(document).on('click', function (e) {
      if (!$(e.target).closest('#navbar').length) {
        $menu.addClass('hidden');
        $icon.removeClass('fa-xmark').addClass('fa-bars');
        $btn.attr('aria-expanded', 'false');
      }
    });
  }

  // ---- Smooth scrolling ----
  function initSmoothScroll() {
    $(document).on('click', 'a[href^="#"]', function (e) {
      const target = $(this).attr('href');
      if (target === '#') return;
      const $target = $(target);
      if ($target.length) {
        e.preventDefault();
        const offset = $target.offset().top - 72;
        $('html, body').animate({ scrollTop: offset }, 500, 'swing');
      }
    });
  }

  // ---- Back to Top ----
  function initBackToTop() {
    const $btn = $('#backToTopBtn');

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 400) {
        $btn.addClass('visible');
      } else {
        $btn.removeClass('visible');
      }
    });

    $btn.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 400);
    });
  }

  // ---- Dark Mode Toggle ----
  function initThemeToggle() {
    $('#themeToggle').on('click', function () {
      const $html = $('html');
      if ($html.hasClass('dark')) {
        $html.removeClass('dark');
        localStorage.setItem('theme', 'light');
      } else {
        $html.addClass('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // ---- Init ----
  $(document).ready(function () {
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initThemeToggle();

    handleNavbarScroll();
    updateActiveNav();

    $(window).on('scroll', function () {
      handleNavbarScroll();
      updateActiveNav();
    });
  });
})(jQuery);
