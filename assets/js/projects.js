/**
 * projects.js — Project data, rendering, and category filtering
 */
(function ($) {
  'use strict';

  // ---- Project Data ----
  var projects = [
    {
      id: 'proj-1',
      title: 'Banking Reporting Management System',
      category: 'banking',
      categoryLabel: 'Banking',
      description: 'A comprehensive regulatory reporting platform for financial institutions. Handles file ingestion, multi-step validation, Maker/Checker approval, and submission tracking.',
      tags: ['PHP', 'CodeIgniter', 'SQL Server', 'jQuery', 'PhpSpreadsheet'],
      overview: 'A multi-module reporting management system used by banking operations teams to process, validate, approve, and submit regulatory financial reports to internal and external stakeholders.',
      problem: 'The bank\'s reporting process was entirely manual — Excel files emailed between departments, no audit trail, high error rates, and no structured approval mechanism. Report submissions were frequently delayed due to missing validations and miscommunication between Makers and Checkers.',
      solution: 'Built a centralized web application where all report file submissions flow through a structured upload → validate → maker approve → checker review → submit pipeline. All actions are timestamped and audit-logged. Dashboard views show submission status at a glance.',
      features: [
        'Excel/CSV file upload with row-level data validation and error reporting',
        'Maker/Checker workflow with role-based access control',
        'Approval queue management with email notification hooks',
        'Filterable and paginated submission history',
        'Audit trail log for every action taken on each submission',
        'Export of validated data back to Excel with formatting',
        'Regulatory submission status tracking dashboard',
        'Admin panel for managing report types, periods, and users',
      ],
      techStack: ['PHP', 'CodeIgniter 3', 'Microsoft SQL Server', 'jQuery', 'AJAX', 'PhpSpreadsheet', 'Bootstrap', 'HTML5'],
      challenges: 'Processing large Excel files without timeout — solved by chunking uploads and processing rows in configurable batch sizes. Ensuring the Maker/Checker logic correctly prevents self-approval required precise role state management across sessions.',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-2',
      title: 'E-Commerce Management System',
      category: 'laravel',
      categoryLabel: 'Laravel',
      description: 'A full-featured e-commerce backend built with Laravel. Covers product catalog, inventory tracking, order management, customer accounts, and a comprehensive admin dashboard.',
      tags: ['Laravel', 'MySQL', 'JavaScript', 'AJAX', 'Tailwind CSS'],
      overview: 'A complete business management system for a retail operation built on Laravel. Provides full control over products, inventory, orders, customers, and business reporting in a single integrated platform.',
      problem: 'A growing retail business was managing inventory in spreadsheets, orders through email, and had no consolidated view of business performance. As scale increased, manual processes became error-prone and time-consuming.',
      solution: 'Designed and built a full Laravel-based management system with a clean dashboard, real-time inventory tracking, order lifecycle management, and automated customer communications.',
      features: [
        'Product catalog management with category hierarchy and image upload',
        'Inventory tracking with low-stock alerts',
        'Complete order lifecycle: placement → processing → fulfillment → delivery',
        'Customer management with order history and account status',
        'Role-based admin access with granular permissions',
        'Sales and inventory dashboard with chart visualization',
        'Excel export for orders, inventory, and customer data',
        'REST API endpoints for future mobile app integration',
      ],
      techStack: ['Laravel', 'MySQL', 'JavaScript', 'jQuery', 'AJAX', 'Tailwind CSS', 'Chart.js', 'PhpSpreadsheet'],
      challenges: 'Designing a flexible product-category hierarchy that supports multiple nesting levels while keeping SQL queries efficient. Implementing real-time inventory deduction during concurrent order submissions required database-level locking strategies.',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-3',
      title: 'Dynamic Template Management System',
      category: 'automation',
      categoryLabel: 'Automation',
      description: 'A system that allows administrators to define dynamic data entry templates with configurable fields. Data collected through templates is stored, validated, and exported without schema changes.',
      tags: ['PHP', 'CodeIgniter', 'SQL Server', 'PhpSpreadsheet', 'jQuery'],
      overview: 'A meta-driven system that allows business users to configure their own data collection templates — defining field types, validation rules, and Excel column mappings — without developer involvement.',
      problem: 'Different departments required custom data collection forms with unique fields and Excel upload formats. Each new requirement meant developer involvement to modify schemas and add new form fields, causing long delivery cycles.',
      solution: 'Built a template engine where admins configure form fields, data types, validation rules, and Excel column mappings through a UI. Templates drive both the web form and the Excel import/export logic dynamically.',
      features: [
        'Admin UI for creating and managing data templates',
        'Dynamic form rendering based on template configuration',
        'Excel file upload parsed dynamically according to template column mapping',
        'Server-side validation based on configured field rules',
        'Duplicate detection across template submissions',
        'Batch insert with row-level error isolation and reporting',
        'Export to Excel preserving original template column format',
        'Version history for template changes',
      ],
      techStack: ['PHP', 'CodeIgniter 3', 'Microsoft SQL Server', 'PhpSpreadsheet', 'jQuery', 'AJAX', 'HTML5'],
      challenges: 'Building a system that dynamically constructs SQL queries for heterogeneous schemas without SQL injection risk. Managing Excel column mapping when uploaded files have inconsistent header formats required a fuzzy matching layer.',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-4',
      title: 'Financial Operations Dashboard',
      category: 'dashboard',
      categoryLabel: 'Dashboard',
      description: 'An executive-level dashboard providing real-time visibility into financial operations, transaction volumes, submission statuses, and key business metrics through charts and filterable data views.',
      tags: ['PHP', 'SQL Server', 'JavaScript', 'AJAX', 'Chart.js'],
      overview: 'A real-time operational dashboard for financial management teams. Aggregates data from multiple operational modules to provide a unified view of business metrics, submission statuses, and trends.',
      problem: 'Management had no consolidated real-time view of operations. Data was scattered across modules and manually compiled into PowerPoint presentations for weekly meetings — a slow and unreliable process.',
      solution: 'Built an AJAX-powered dashboard that pulls live aggregated data from the operational database. Configurable date ranges, department filters, and report type filters allow management to drill down into specific metrics.',
      features: [
        'Real-time KPI cards with trend indicators',
        'Interactive charts: line, bar, donut, and area charts',
        'Submission status tracking across all active report types',
        'Drill-down from summary to detail view via AJAX',
        'Date range and department filter combinations',
        'Exportable summary reports to Excel and PDF',
        'User activity summary and login audit view',
        'Responsive layout optimized for large monitor displays',
      ],
      techStack: ['PHP', 'Microsoft SQL Server', 'JavaScript', 'jQuery', 'AJAX', 'Chart.js', 'HTML5', 'Tailwind CSS'],
      challenges: 'Aggregation queries across millions of rows caused slow dashboard loads. Solved by introducing pre-aggregated summary tables updated via scheduled jobs, reducing dashboard load time significantly.',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-5',
      title: 'Maker/Checker Workflow Engine',
      category: 'enterprise',
      categoryLabel: 'Enterprise',
      description: 'A reusable multi-level approval workflow engine powering multiple business modules. Handles role routing, status transitions, rejection with comments, and full audit trail.',
      tags: ['PHP', 'CodeIgniter', 'SQL Server', 'RBAC', 'jQuery'],
      overview: 'A standalone workflow module integrated across multiple business applications. Any operation requiring a two-eyes or four-eyes control principle is routed through this engine with configurable roles and approval levels.',
      problem: 'Multiple business modules required similar Maker/Checker controls but each had been built independently with different logic, leading to inconsistent behavior, bugs, and high maintenance cost when requirements changed.',
      solution: 'Abstracted the approval workflow into a reusable engine. Any module registers workflow types and status transitions. The engine handles routing, permission enforcement, comment collection, and audit logging uniformly.',
      features: [
        'Configurable approval levels: single, dual, and multi-level',
        'Role-based routing with dynamic approver assignment',
        'Status machine: Draft → Pending → Approved / Rejected → Cancelled',
        'Rejection with mandatory comments and return to maker',
        'Approval queue interface per role with filterable pending items',
        'Full audit trail per transaction: who did what and when',
        'Delegation support for temporary approver substitution',
        'Integration API for embedding into other modules',
      ],
      techStack: ['PHP', 'CodeIgniter 3', 'Microsoft SQL Server', 'jQuery', 'AJAX', 'HTML5'],
      challenges: 'Preventing race conditions when two checkers attempt to approve the same item simultaneously. Implemented database-level pessimistic locking combined with application-layer status checks to ensure only one approval is processed.',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-6',
      title: 'Excel/CSV Processing Platform',
      category: 'reporting',
      categoryLabel: 'Reporting',
      description: 'A high-throughput file processing platform for business data ingestion. Handles large Excel and CSV files with row-level validation, duplicate detection, batch inserts, and structured error reports.',
      tags: ['PHP', 'PhpSpreadsheet', 'SQL Server', 'Batch Processing', 'jQuery'],
      overview: 'A standalone data ingestion service designed to reliably process business-critical Excel and CSV files. Built to handle files with thousands of rows while providing clear, actionable feedback on validation failures.',
      problem: 'Business teams needed to import large volumes of structured data regularly. Manual entry was error-prone and slow. Previous import attempts failed silently, causing data integrity issues discovered only after downstream processing.',
      solution: 'Built a robust multi-phase processing pipeline: upload → parse → validate (header + row level) → detect duplicates → batch insert → generate result report. Each phase produces structured output before proceeding.',
      features: [
        'Support for .xlsx, .xls, and .csv file formats',
        'Header validation: required columns, data types, format checks',
        'Row-level validation with line-specific error messages',
        'Duplicate detection within file and against existing database records',
        'Configurable batch size for insert operations',
        'Partial success: valid rows are inserted even when invalid rows are rejected',
        'Downloadable error report in Excel format for correction',
        'Processing history log with file metadata and result summary',
      ],
      techStack: ['PHP', 'PhpSpreadsheet', 'Microsoft SQL Server', 'jQuery', 'AJAX', 'HTML5'],
      challenges: 'Handling Excel files with 10,000+ rows without hitting PHP memory or execution time limits. Solved using chunked reading via PhpSpreadsheet\'s read filter and breaking processing into configurable batch sizes with progress tracking.',
      githubUrl: '#',
      demoUrl: '#',
    },
  ];

  // ---- Category color map ----
  var categoryColors = {
    banking:     'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    enterprise:  'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    laravel:     'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    codeigniter: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    dashboard:   'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    reporting:   'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    automation:  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  };

  // ---- Render a single project card ----
  function renderProjectCard(project) {
    var colorClass = categoryColors[project.category] || 'bg-slate-100 text-slate-700';
    var tagsHTML = project.tags.map(function (tag) {
      return '<span class="tech-tag">' + escapeHTML(tag) + '</span>';
    }).join('');

    return (
      '<div class="project-card reveal" data-category="' + escapeHTML(project.category) + '" data-id="' + escapeHTML(project.id) + '">' +
      '  <div class="project-card-header"></div>' +
      '  <div class="project-card-body">' +
      '    <div class="project-card-category">' + escapeHTML(project.categoryLabel) + '</div>' +
      '    <h3 class="project-card-title">' + escapeHTML(project.title) + '</h3>' +
      '    <p class="project-card-desc">' + escapeHTML(project.description) + '</p>' +
      '    <div class="project-card-tags">' + tagsHTML + '</div>' +
      '    <div class="project-card-footer">' +
      '      <span class="text-xs px-2 py-1 rounded-full font-medium ' + colorClass + '">' + escapeHTML(project.categoryLabel) + '</span>' +
      '      <button class="view-details-btn btn-primary text-xs py-2 px-4" data-id="' + escapeHTML(project.id) + '" aria-label="View details for ' + escapeHTML(project.title) + '">' +
      '        View Details <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  // ---- Render all / filtered projects ----
  function renderProjects(filter) {
    var $grid = $('#projectsGrid');
    var filtered = filter === 'all'
      ? projects
      : projects.filter(function (p) { return p.category === filter; });

    if (filtered.length === 0) {
      $grid.html(
        '<div class="col-span-3 text-center py-16 text-slate-400">' +
        '<i class="fa-solid fa-folder-open text-4xl mb-3 block"></i>' +
        '<p>No projects found in this category.</p>' +
        '</div>'
      );
      return;
    }

    var html = filtered.map(renderProjectCard).join('');
    $grid.html(html);

    // Re-observe new cards for animation
    setTimeout(function () {
      $grid.find('.reveal').each(function (i) {
        var el = this;
        el.style.transitionDelay = (i * 0.08) + 's';
        setTimeout(function () {
          el.classList.add('visible');
        }, 50);
      });
    }, 10);
  }

  // ---- Category filtering ----
  function initFilters() {
    $(document).on('click', '.filter-btn', function () {
      var filter = $(this).data('filter');
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
      renderProjects(filter);
    });
  }

  // ---- Escape HTML helper ----
  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ---- Expose project lookup for modal ----
  window.portfolioProjects = projects;
  window.portfolioEscapeHTML = escapeHTML;

  // ---- Init ----
  $(document).ready(function () {
    renderProjects('all');
    initFilters();
  });
})(jQuery);
