/**
 * app.js — Application entry point. Starts each module in dependency order:
 * content is rendered first so the behaviour modules can find it in the DOM.
 */
(function (P, $) {
  'use strict';

  const MODULES = ['render', 'projects', 'animations', 'navigation', 'modal', 'contact'];

  $(function () {
    MODULES.forEach(function (name) { P[name].init(); });
  });
})(window.Portfolio, jQuery);
