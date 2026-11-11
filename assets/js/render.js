/**
 * render.js — Fills every [data-render="name"] placeholder in index.html
 * with content from data/site.js, using the components in templates.js.
 */
window.Portfolio = window.Portfolio || {};

(function (P) {
  'use strict';

  const T = P.templates;

  function each(items, template) {
    return items.map(template).join('');
  }

  function cards(options) {
    return function (item) { return T.featureCard(item, options); };
  }

  // Placeholder name -> function returning its HTML.
  const sections = {
    avatar:         function (d) { return T.avatar(d.profile); },
    codeCard:       function (d) { return T.codeCard(d.profile); },
    heroStack:      function (d) { return each(d.heroStack, T.stackTile); },
    socials:        function (d) { return each(d.socials, T.socialIcon); },
    contactList:    function (d) { return each(d.socials, T.contactItem); },
    stats:          function (d) { return each(d.stats, T.stat); },
    strengths:      function (d) { return each(d.strengths, cards({ heading: 'h4', compact: true })); },
    skills:         function (d) { return each(d.skills, T.skillCard); },
    experience:     function (d) { return each(d.experience, T.timelineItem); },
    education:      function (d) { return each(d.education, T.timelineItem); },
    certifications: function (d) { return each(d.certifications, T.certCard); },
    expertise:      function (d) { return each(d.expertise, cards()); },
    archLayers:     function (d) { return each(d.architecture.layers, T.archLayer); },
    archPrinciples: function (d) { return each(d.architecture.principles, cards({ compact: true, row: true })); },
    problems:       function (d) { return each(d.problems, cards()); },
    services:       function (d) { return each(d.services, cards()); },
    process:        function (d) { return each(d.process, T.processStep); },
  };

  function init() {
    document.querySelectorAll('[data-render]').forEach(function (mount) {
      const build = sections[mount.dataset.render];
      if (build) mount.innerHTML = build(P.data);
    });
  }

  P.render = { init: init };
})(window.Portfolio);
