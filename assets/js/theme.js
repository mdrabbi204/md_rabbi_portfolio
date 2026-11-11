/**
 * theme.js — Light/dark theme. Loaded in <head> so the stored or system
 * preference is applied before first paint (no flash of the wrong theme).
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Lets CSS apply JS-dependent styles (e.g. scroll reveal) only when JS runs.
  root.classList.add('js');

  function storedTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function storeTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* storage unavailable */ }
  }

  function isDark() {
    return root.classList.contains('dark');
  }

  function syncToggle() {
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    toggle.setAttribute('aria-pressed', String(isDark()));
    toggle.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    syncToggle();
  }

  function switchTheme() {
    var next = isDark() ? 'light' : 'dark';
    root.classList.add('theme-transition');
    applyTheme(next);
    storeTheme(next);
    window.setTimeout(function () { root.classList.remove('theme-transition'); }, 350);
  }

  applyTheme(storedTheme() || (systemDark.matches ? 'dark' : 'light'));

  // Follow the system setting until the visitor makes an explicit choice.
  systemDark.addEventListener('change', function (event) {
    if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('themeToggle');
    syncToggle();
    if (toggle) toggle.addEventListener('click', switchTheme);
  });
})();
