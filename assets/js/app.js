/**
 * app.js — Main application initializer
 */
(function ($) {
  'use strict';

  $(document).ready(function () {
    // All modules initialize themselves via their own DOMContentLoaded / ready handlers.
    // This file serves as the global coordinator for any cross-module concerns.

    // ---- Prevent navbar flash on load ----
    $('#navbar').addClass('scrolled');
    setTimeout(function () {
      if ($(window).scrollTop() < 60) {
        $('#navbar').removeClass('scrolled');
      }
    }, 50);

    // ---- Log ready state (development only) ----
    // console.info('[Portfolio] Application initialized.');
  });
})(jQuery);
