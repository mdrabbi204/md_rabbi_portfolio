/**
 * tailwind.config.js — Tailwind (CDN build) configuration.
 * Tailwind supplies layout utilities only; colours, type and components come
 * from the design tokens in assets/css/app.css, which is also why Tailwind's
 * own reset (preflight) is switched off.
 */
window.tailwind = window.tailwind || {};

window.tailwind.config = {
  darkMode: 'class',
  corePlugins: { preflight: false },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        line: 'var(--line)',
        accent: 'var(--accent)',
      },
    },
  },
};
