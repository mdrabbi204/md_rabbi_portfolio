/**
 * data/site.js — All portfolio content that is rendered as repeated UI
 * (cards, lists, timelines). Edit values here; the markup lives in templates.js.
 *
 * Bracketed values such as [COMPANY NAME] are placeholders to be replaced with
 * real information. Nothing here should be invented.
 *
 * tint: one of accent | blue | cyan | green | violet | rose | orange | amber
 *       (see the tint tokens in app.css).
 */
window.Portfolio = window.Portfolio || {};
window.Portfolio.data = window.Portfolio.data || {};

Object.assign(window.Portfolio.data, {
  profile: {
    name: 'Md. Rabbi',
    initials: 'MR',
    role: 'Full-Stack PHP Developer',
    focus: 'Enterprise & Banking',
    status: 'Available for Projects',
    // Optional photo, e.g. 'assets/images/profile/rabbi.webp'. Initials are shown when empty.
    avatar: '',
  },

  contact: {
    email: 'md.rabbi.web@gmail.com',
    // Set to a backend URL to POST the form via AJAX. When empty, the form
    // opens the visitor's email app with the message pre-filled.
    endpoint: '',
  },

  socials: [
    { id: 'email',    label: 'Email',    icon: 'fa-solid fa-envelope',  url: 'mailto:md.rabbi.web@gmail.com',        handle: 'md.rabbi.web@gmail.com',      ariaLabel: 'Send an email' },
    { id: 'github',   label: 'GitHub',   icon: 'fa-brands fa-github',   url: 'https://github.com/rabbi204',          handle: 'rabbi204',                    ariaLabel: 'GitHub profile' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://bd.linkedin.com/in/rabbi204',  handle: 'bd.linkedin.com/in/rabbi204', ariaLabel: 'LinkedIn profile' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'fa-brands fa-whatsapp', url: 'https://wa.me/8801910597276',          handle: '+8801910597276',              ariaLabel: 'WhatsApp contact' },
  ],

  heroStack: [
    { label: 'PHP',                icon: 'fa-brands fa-php',              tint: 'violet' },
    { label: 'Laravel',            icon: 'fa-solid fa-layer-group',       tint: 'rose'   },
    { label: 'CodeIgniter',        icon: 'fa-solid fa-fire',              tint: 'orange' },
    { label: 'SQL Server',         icon: 'fa-solid fa-database',          tint: 'blue'   },
    { label: 'JavaScript',         icon: 'fa-brands fa-js',               tint: 'amber'  },
    { label: 'jQuery',             icon: 'fa-solid fa-code',              tint: 'accent' },
    { label: 'Tailwind CSS',       icon: 'fa-solid fa-wind',              tint: 'cyan'   },
    { label: 'REST API',           icon: 'fa-solid fa-plug',              tint: 'violet' },
    { label: 'Enterprise Systems', icon: 'fa-solid fa-building-columns',  tint: 'green'  },
  ],

  stats: [
    { value: 5,  suffix: '+', label: 'Years Development Experience' },
    { value: 20, suffix: '+', label: 'Enterprise Modules Delivered' },
    { value: 10, suffix: '+', label: 'Business Systems Built' },
    { value: 50, suffix: '+', label: 'Reports & Data Processes' },
  ],

  strengths: [
    { icon: 'fa-solid fa-server',           tint: 'accent', title: 'Backend Development',    text: 'PHP, Laravel, CodeIgniter 3, REST APIs, MVC, Authentication & Authorization' },
    { icon: 'fa-solid fa-database',         tint: 'blue',   title: 'Database Engineering',   text: 'SQL Server, MySQL, Query Optimization, Stored Procedures, Database Design' },
    { icon: 'fa-solid fa-building-columns', tint: 'green',  title: 'Banking & Finance',      text: 'Financial reporting, regulatory submissions, transaction processing, audit trails' },
    { icon: 'fa-solid fa-file-excel',       tint: 'violet', title: 'Data Processing',        text: 'Excel/CSV import & export, PhpSpreadsheet, batch processing, validation' },
    { icon: 'fa-solid fa-arrows-spin',      tint: 'orange', title: 'Workflow Automation',    text: 'Maker/Checker, approval queues, RBAC, audit trail, queue management' },
    { icon: 'fa-solid fa-chart-bar',        tint: 'cyan',   title: 'Reporting & Dashboards', text: 'Business reports, PDF generation, dashboards, charts, data visualization' },
  ],

  // Skills listed in `core` are highlighted as the primary stack.
  skills: [
    {
      title: 'Backend', icon: 'fa-solid fa-server', tint: 'accent',
      items: ['PHP', 'Laravel', 'CodeIgniter 3', 'REST APIs', 'MVC Pattern', 'Authentication', 'Authorization', 'Business Logic', 'File Processing'],
      core: ['PHP', 'Laravel', 'CodeIgniter 3', 'REST APIs'],
    },
    {
      title: 'Database', icon: 'fa-solid fa-database', tint: 'blue',
      items: ['MS SQL Server', 'MySQL', 'SQL', 'Query Optimization', 'Database Design', 'Joins', 'Indexing', 'Stored Procedures'],
      core: ['MS SQL Server'],
    },
    {
      title: 'Frontend', icon: 'fa-solid fa-display', tint: 'cyan',
      items: ['HTML5', 'Tailwind CSS', 'JavaScript', 'jQuery', 'AJAX', 'Responsive Design'],
      core: ['Tailwind CSS', 'JavaScript', 'jQuery'],
    },
    {
      title: 'Data & Reporting', icon: 'fa-solid fa-chart-line', tint: 'green',
      items: ['PhpSpreadsheet', 'Excel Import', 'Excel Export', 'CSV Processing', 'PDF Reports', 'Dashboards', 'Charts', 'Data Validation'],
      core: [],
    },
    {
      title: 'Enterprise Development', icon: 'fa-solid fa-building', tint: 'violet',
      items: ['Maker/Checker Workflow', 'Approval Workflow', 'RBAC', 'Audit Trail', 'Queue Management', 'Batch Processing', 'File Upload Processing'],
      core: [],
    },
    {
      title: 'Development Practices', icon: 'fa-solid fa-code-branch', tint: 'orange',
      items: ['Legacy Modernization', 'Code Refactoring', 'Git', 'Security Best Practices', 'Performance Tuning', 'API Design'],
      core: [],
    },
  ],

  experience: [
    {
      title: 'Software Developer',
      org: '[COMPANY NAME]',
      meta: 'Full-time',
      period: '[DATE] – Present',
      points: [
        'Developed enterprise business applications for financial operations',
        'Built regulatory reporting and workflow systems used in daily banking operations',
        'Developed Excel/CSV processing solutions for bulk data ingestion and validation',
        'Implemented Maker/Checker approval workflows with full audit trail',
        'Designed and optimized SQL Server queries for large-volume financial data',
        'Maintained, enhanced, and modernized existing legacy PHP systems',
      ],
      tags: ['PHP', 'CodeIgniter', 'SQL Server', 'JavaScript', 'jQuery', 'PhpSpreadsheet'],
    },
    {
      title: 'PHP Developer',
      org: '[COMPANY NAME]',
      meta: 'Full-time',
      period: '[DATE] – [DATE]',
      points: [
        'Developed and maintained web applications using PHP and MySQL',
        'Built business dashboards and management reporting interfaces',
        'Created dynamic admin panels with role-based access control',
        'Integrated REST APIs and implemented AJAX-based frontend interactions',
      ],
      tags: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'AJAX', 'REST API'],
    },
  ],

  // Placeholders — replace with real qualifications (add or remove entries freely).
  education: [
    {
      title: '[DEGREE / PROGRAM]',
      org: '[INSTITUTION NAME]',
      meta: '[FIELD OF STUDY]',
      period: '[DATE] – [DATE]',
      points: [],
      tags: [],
    },
  ],

  certifications: [
    { title: '[CERTIFICATION NAME]', issuer: '[ISSUING ORGANIZATION]', date: '[DATE]', url: '' },
  ],

  expertise: [
    { icon: 'fa-solid fa-file-invoice-dollar', title: 'Banking Reporting Systems',   text: 'Built financial reporting modules for regulatory submissions including FDI, tax, cash flow, and adjustment reports with full validation and approval workflows.' },
    { icon: 'fa-solid fa-money-bill-transfer', title: 'Transaction Processing',      text: 'Developed systems to process and validate financial transaction data from multiple sources with strict business rule enforcement and audit logging.' },
    { icon: 'fa-solid fa-shield-halved',       title: 'Fraud Monitoring',            text: 'Contributed to cheque fraud monitoring workflows with detection logic, flagging mechanisms, and reviewer queues for compliance teams.' },
    { icon: 'fa-solid fa-sitemap',             title: 'Maker/Checker Workflows',     text: 'Designed and implemented multi-level Maker/Checker approval workflows with role-based routing, notification, and complete audit trail across all transactions.' },
    { icon: 'fa-solid fa-file-csv',            title: 'File-Based Data Processing',  text: 'Built robust Excel and CSV processing pipelines: upload, parse, validate, transform, insert, and report – handling thousands of records with error isolation and batch operations.' },
    { icon: 'fa-solid fa-users-gear',          title: 'Account & Customer Systems',  text: 'Developed customer and account management interfaces supporting search, filtering, data entry, validation, status management, and reporting.' },
  ],

  architecture: {
    layers: [
      { icon: 'fa-solid fa-users',    tint: 'blue',   title: 'User / Client',     text: 'Browser, Desktop, Mobile',                                                    link: 'HTTP / HTTPS' },
      { icon: 'fa-solid fa-desktop',  tint: 'green',  title: 'Frontend Layer',    text: 'HTML5 · Tailwind CSS · JavaScript · jQuery · AJAX',                           link: 'AJAX / REST' },
      { icon: 'fa-brands fa-php',     tint: 'amber',  title: 'Application Layer', text: 'PHP · Laravel / CodeIgniter · MVC · Business Logic · Auth · Validation',      link: 'PDO / Query Builder' },
      { icon: 'fa-solid fa-database', tint: 'violet', title: 'Database Layer',    text: 'SQL Server · MySQL · Stored Procedures · Indexing' },
    ],
    principles: [
      { icon: 'fa-solid fa-lock',              tint: 'accent', title: 'Authentication & Authorization',   text: 'Role-based access control, session management, protected routes, and per-action permission checks.' },
      { icon: 'fa-solid fa-check-double',      tint: 'green',  title: 'Data Validation',                  text: 'Multi-layer validation: client-side, server-side, and database constraints. Business rule enforcement before persistence.' },
      { icon: 'fa-solid fa-clock-rotate-left', tint: 'blue',   title: 'Audit Trail & Logging',            text: 'Complete activity logging, change tracking, Maker/Checker records, and error logging for compliance and debugging.' },
      { icon: 'fa-solid fa-arrows-spin',       tint: 'violet', title: 'Approval Workflow',                text: 'Multi-stage Maker/Checker workflows with status tracking, role-based routing, and notification on each transition.' },
      { icon: 'fa-solid fa-bolt',              tint: 'orange', title: 'Performance & Query Optimization', text: 'Indexed queries, stored procedures, paginated results, and lazy loading to handle large enterprise datasets efficiently.' },
      { icon: 'fa-solid fa-shield-halved',     tint: 'cyan',   title: 'Security & Error Handling',        text: 'CSRF protection, input sanitization, secure sessions, structured error handling, and output escaping throughout the stack.' },
    ],
  },

  problems: [
    { icon: 'fa-solid fa-wrench',      tint: 'blue', title: 'Legacy PHP Modernization',           text: 'Improve existing PHP applications – refactor messy code, add proper structure, improve security, and introduce modern patterns – while preserving business functionality and minimizing risk.' },
    { icon: 'fa-solid fa-database',    tint: 'blue', title: 'Complex SQL & Database Design',      text: 'Build and optimize SQL queries for complex business data: multi-table joins, aggregations, reporting queries, and database schemas that support real-world business rules.' },
    { icon: 'fa-solid fa-file-csv',    tint: 'blue', title: 'Data Processing Pipelines',          text: 'Process Excel, CSV, and structured business files at scale – validate, transform, detect duplicates, batch-insert, and produce error and summary reports automatically.' },
    { icon: 'fa-solid fa-arrows-spin', tint: 'blue', title: 'Workflow Automation',                text: 'Build Maker/Checker, approval, queue, and review workflows that replace manual email-based processes with traceable, auditable, and role-aware digital systems.' },
    { icon: 'fa-solid fa-chart-bar',   tint: 'blue', title: 'Business Reporting',                 text: 'Convert raw business data into meaningful reports: interactive dashboards, filterable data tables, PDF exports, and Excel-based outputs that management can use directly.' },
    { icon: 'fa-solid fa-building',    tint: 'blue', title: 'Enterprise Application Development', text: 'Build maintainable, structured enterprise applications that support real-world business processes: inventory, finance, HR, operations – organized around actual workflows, not generic CRUD.' },
  ],

  services: [
    { icon: 'fa-brands fa-php',          tint: 'accent', title: 'Custom PHP Development',      text: 'Business applications, management systems, and custom solutions built with PHP, Laravel, and CodeIgniter.' },
    { icon: 'fa-solid fa-layer-group',   tint: 'rose',   title: 'Laravel Development',         text: 'Laravel applications, REST APIs, admin dashboards, and management portals with clean architecture.' },
    { icon: 'fa-solid fa-fire',          tint: 'orange', title: 'CodeIgniter Development',     text: 'CodeIgniter application development, maintenance, feature extensions, and system modernization.' },
    { icon: 'fa-solid fa-database',      tint: 'blue',   title: 'Database Development',        text: 'SQL Server and MySQL database design, complex queries, stored procedures, optimization, and reporting.' },
    { icon: 'fa-solid fa-gauge-high',    tint: 'cyan',   title: 'Admin Dashboard Development', text: 'Responsive dashboards with search, filters, data tables, charts, and export functionality.' },
    { icon: 'fa-solid fa-file-excel',    tint: 'green',  title: 'Excel/CSV Automation',        text: 'File upload, parsing, validation, batch processing, error reporting, and Excel/CSV export systems.' },
    { icon: 'fa-solid fa-arrows-rotate', tint: 'violet', title: 'Legacy System Modernization', text: 'Refactor, upgrade, and improve existing PHP applications without disrupting production operations.' },
    { icon: 'fa-solid fa-chart-line',    tint: 'amber',  title: 'Business Reporting Systems',  text: 'Automated reporting, scheduled exports, regulatory submissions, and custom PDF report generation.' },
  ],

  process: [
    { title: 'Understand',        text: 'Thoroughly understand the business requirements, current pain points, user workflows, and success criteria before writing a single line of code.' },
    { title: 'Analyze',           text: 'Analyze existing systems, data flows, integrations, and constraints. Identify risks, dependencies, and edge cases that will affect the design.' },
    { title: 'Design',            text: 'Design the database schema, application architecture, workflow logic, and UI structure. Review with stakeholders before implementation begins.' },
    { title: 'Develop',           text: 'Build iteratively with clean, maintainable code. Implement business logic with proper validation, error handling, and security at every layer.' },
    { title: 'Test',              text: 'Test against real business scenarios, edge cases, and security requirements. Validate data integrity, workflow correctness, and user access controls.' },
    { title: 'Deploy & Maintain', text: 'Deploy with minimal disruption. Provide documentation, support, and proactive maintenance to keep the system reliable and up to date.' },
  ],
});
