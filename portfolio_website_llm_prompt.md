# LLM Prompt — Professional Developer Portfolio Website

## Role

You are a senior frontend engineer, UI/UX designer, and portfolio website specialist.

Build a production-quality personal portfolio website for an experienced **Full-Stack PHP Developer**.

The developer's strongest areas are:

- PHP
- Laravel
- CodeIgniter 3
- Microsoft SQL Server
- MySQL
- HTML5
- Tailwind CSS
- JavaScript
- jQuery
- AJAX
- REST APIs
- Excel/CSV processing
- PhpSpreadsheet
- Enterprise applications
- Banking and financial software
- Reporting systems
- Dashboard development
- Maker/Checker workflows
- Authentication and authorization
- Data validation
- Business process automation
- Legacy PHP application maintenance and modernization

The portfolio must present the developer as an experienced enterprise/business software developer, not as a beginner or generic web designer.

---

# 1. Primary Objective

Create a modern, professional, responsive, fast, accessible, and SEO-friendly portfolio website.

The website should communicate within the first 30–60 seconds:

1. Who the developer is.
2. What technologies the developer specializes in.
3. What types of systems the developer builds.
4. Experience with banking/financial and enterprise applications.
5. Examples of projects and technical capabilities.
6. What problems the developer can solve.
7. How to contact the developer.

The visual style should be:

- Professional
- Clean
- Modern
- Technical
- Enterprise-focused
- Minimal
- Trustworthy
- Responsive

Avoid a generic "developer portfolio template" appearance.

---

# 2. Technology Requirements

## Frontend

Use:

- HTML5
- Tailwind CSS
- JavaScript ES6+
- jQuery
- AJAX

Do not introduce React, Vue, Angular, Bootstrap, or another frontend framework unless explicitly requested.

Use jQuery where it provides practical value, especially for:

- Project filtering
- Modal handling
- AJAX
- Form interactions
- UI state management

Use modern vanilla JavaScript where it is simpler.

---

# 3. Project Structure

Use a clean structure similar to:

```text
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   ├── app.js
│   │   ├── navigation.js
│   │   ├── projects.js
│   │   ├── modal.js
│   │   ├── contact.js
│   │   └── animations.js
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── icons/
│   └── documents/
│       └── resume.pdf
└── README.md
```

Keep HTML, CSS, and JavaScript organized.

Do not place large amounts of JavaScript directly inside HTML.

---

# 4. Main Navigation

Create a sticky responsive navigation bar.

Navigation items:

- Home
- About
- Skills
- Experience
- Projects
- Services
- Architecture
- Contact

Include:

- Desktop navigation
- Mobile hamburger menu
- Smooth scrolling
- Active section state
- Scroll-aware navbar
- "Let's Talk" CTA

The mobile navigation must work correctly on small screens.

---

# 5. Hero Section

Create a strong professional hero section.

Recommended primary heading:

**Full-Stack PHP Developer Building Enterprise & Banking Solutions**

Alternative subtitle:

**PHP Developer | Laravel | CodeIgniter | SQL Server**

Supporting text should explain that the developer builds:

- Enterprise applications
- Banking software
- Financial reporting systems
- Business dashboards
- Workflow systems
- Data processing solutions
- Automation platforms

CTA buttons:

- View My Work
- Contact Me

Add a professional technical visual using technology cards or an abstract system architecture illustration.

Example technology labels:

```text
PHP
Laravel
CodeIgniter
SQL Server
JavaScript
jQuery
Tailwind CSS
REST API
Enterprise Systems
```

Do not use an overly decorative hero.

---

# 6. Developer Statistics

Add a compact statistics section.

Use configurable values only.

Example:

```text
5+     Years Development Experience
20+    Enterprise Modules
10+    Business Systems
50+    Reports & Data Processes
```

Important:

Do not invent actual numbers.

Use placeholders such as:

```text
[EXPERIENCE_YEARS]+
[PROJECT_COUNT]+
[MODULE_COUNT]+
```

if verified numbers are not provided.

---

# 7. About Section

Create a professional "About Me" section.

Position the developer as:

> A Full-Stack PHP Developer specializing in enterprise applications, banking software, reporting platforms, workflow systems, and business automation.

Mention experience with:

- PHP
- Laravel
- CodeIgniter
- SQL Server
- MySQL
- JavaScript
- jQuery
- AJAX
- Excel/CSV processing
- Reporting
- Dashboards
- Authentication
- Authorization
- Workflow systems
- Legacy application maintenance
- System modernization

Use a two-column desktop layout and stacked mobile layout.

---

# 8. Technical Skills

Create grouped skill cards.

## Backend

- PHP
- Laravel
- CodeIgniter 3
- REST APIs
- MVC
- Authentication
- Authorization
- Business Logic
- File Processing

## Database

- Microsoft SQL Server
- MySQL
- SQL
- Query Optimization
- Database Design
- Joins
- Indexing
- Stored Procedures

## Frontend

- HTML5
- Tailwind CSS
- JavaScript
- jQuery
- AJAX
- Responsive Design

## Data & Reporting

- PhpSpreadsheet
- Excel Import
- Excel Export
- CSV Processing
- PDF Reports
- Dashboards
- Charts
- Data Validation

## Enterprise Development

- Maker/Checker Workflow
- Approval Workflow
- RBAC
- Audit Trail
- Queue Management
- File Upload Processing
- Batch Processing

Do not use misleading skill percentage bars such as "PHP 95%".

Use technology cards, badges, or grouped capability cards instead.

---

# 9. Experience Section

Create a professional timeline.

Each experience item should support:

- Job title
- Company
- Duration
- Responsibilities
- Technologies
- Achievements

Use placeholders when real company information is unavailable.

Example:

```text
[DATE]

Software Developer
[COMPANY NAME]

- Developed enterprise business applications.
- Built reporting and workflow systems.
- Developed Excel/CSV processing solutions.
- Implemented approval workflows.
- Worked with SQL Server databases.
- Maintained and enhanced existing PHP systems.

Technologies:
PHP • CodeIgniter • SQL Server • JavaScript • jQuery
```

Do not fabricate company names, employment dates, achievements, or statistics.

---

# 10. Banking & Enterprise Experience

Make this a major section.

Title:

**Enterprise & Banking Software Experience**

Highlight experience in areas such as:

- Banking reporting systems
- Financial transaction processing
- Regulatory reporting
- FDI-related workflows
- Tax reporting
- Cash reporting
- Adjustment reporting
- Cheque fraud monitoring
- Account/customer-related systems
- Maker/Checker workflows
- Approval queues
- File-based processing
- Financial data validation

Important security rule:

Never expose:

- Customer information
- Account numbers
- Internal URLs
- Passwords
- API keys
- Database credentials
- Confidential screenshots
- Proprietary source code
- Sensitive banking data

Use anonymized descriptions and mock/demo data where necessary.

---

# 11. Featured Projects

Create a project showcase with category filtering.

Categories:

```text
All
Banking
Enterprise
PHP
Laravel
CodeIgniter
Dashboard
Reporting
Automation
```

Each project card should contain:

- Project name
- Short description
- Category
- Technology stack
- Key features
- View Details button

Recommended project concepts:

## Project 1 — Banking Reporting Management System

Show:

- File upload
- Data validation
- Maker/Checker workflow
- Approval queue
- Search/filter
- Reporting
- Excel/CSV processing
- Audit tracking

## Project 2 — E-Commerce Management System

Show:

- Laravel
- Authentication
- Authorization
- Product management
- Inventory
- Order management
- Customer management
- Dashboard

## Project 3 — Dynamic Template Management System

Show:

- Dynamic forms
- Dynamic database tables
- Excel processing
- PhpSpreadsheet
- File validation
- Data import
- Batch processing

## Project 4 — Financial Dashboard

Show:

- Dashboard
- Charts
- SQL aggregation
- AJAX
- Filtering
- Data visualization

## Project 5 — Maker/Checker Workflow System

Show:

- Role management
- Authorization
- Approval workflow
- Audit trail
- Queue management

## Project 6 — Excel/CSV Processing Platform

Show:

- Large file processing
- Validation
- Duplicate detection
- Batch inserts
- Error reporting
- Export

Use real projects only when they can legally and safely be presented. Otherwise create anonymized case studies.

---

# 12. Project Details Modal

Clicking "View Details" should open an accessible modal.

Modal structure:

```text
Project Title

Overview

Business Problem

Solution

Architecture

Key Features

Technology Stack

Technical Challenges

Results

GitHub
Live Demo
```

Use jQuery or vanilla JavaScript.

Required behavior:

- Open modal
- Close button
- Escape key closes modal
- Clicking backdrop closes modal
- Prevent background interaction
- Keyboard accessibility
- Mobile-friendly modal
- Restore focus when closed

Project data should preferably be stored in a JavaScript object/array rather than duplicated throughout the HTML.

---

# 13. Architecture Section

Create a visual architecture section.

Example:

```text
                USER
                  |
                  v
        +-------------------+
        |     Frontend      |
        | HTML / Tailwind   |
        | JS / jQuery       |
        +---------+---------+
                  |
                 AJAX
                  |
                  v
        +-------------------+
        |   Application     |
        | PHP / Laravel     |
        | CodeIgniter       |
        +---------+---------+
                  |
                  v
        +-------------------+
        |     Database      |
        | SQL Server/MySQL  |
        +-------------------+
```

Explain:

- MVC architecture
- Validation
- Authentication
- Authorization
- Logging
- Audit trail
- Error handling
- Database optimization
- Business logic
- File processing

Keep the architecture illustration visually clean.

---

# 14. Problems I Solve

Create six capability cards.

## Legacy PHP Modernization

Improve existing PHP applications while preserving business functionality.

## Complex SQL

Build and optimize SQL queries for complex business data.

## Data Processing

Process Excel, CSV, and structured business files.

## Workflow Automation

Build Maker/Checker, approval, queue, and review workflows.

## Business Reporting

Convert business data into reports and dashboards.

## Enterprise Applications

Build maintainable applications around real-world business processes.

---

# 15. Services

Add a services section for potential clients.

Services:

### Custom PHP Development

Business applications using PHP, Laravel, and CodeIgniter.

### Laravel Development

Laravel applications, APIs, dashboards, and management systems.

### CodeIgniter Development

CodeIgniter application development, maintenance, and modernization.

### Database Development

SQL Server/MySQL database design, queries, optimization, and reporting.

### Admin Dashboard Development

Responsive dashboards with search, filters, reports, and charts.

### Excel/CSV Automation

File import, validation, processing, and export.

### Legacy System Modernization

Upgrade and improve existing PHP applications.

---

# 16. Development Process

Create a six-step process:

```text
01  Understand
02  Analyze
03  Design
04  Develop
05  Test
06  Deploy & Maintain
```

Each step should have a short explanation.

---

# 17. Contact Section

Create a strong final CTA.

Heading:

**Have a Project or System in Mind?**

Supporting text:

> I'm interested in building reliable business applications, enterprise systems, reporting platforms, and modern web solutions.

Contact fields:

- Name
- Email
- Subject
- Message

Buttons:

- Send Message
- Email Me

Optional social links:

- GitHub
- LinkedIn
- WhatsApp

For V1, the contact form can be frontend-only or prepared for AJAX integration.

If a backend is added later, implement:

- CSRF protection
- Server-side validation
- Rate limiting
- Input sanitization
- Secure email handling

---

# 18. Resume Section

Create a professional resume CTA:

**Download My Resume**

Supporting text:

> Get a concise overview of my professional experience, technical skills, and projects.

Button:

**Download Resume**

Use:

```text
assets/documents/resume.pdf
```

Do not create a fake resume file.

---

# 19. Footer

Footer should contain:

```text
[YOUR NAME]
Full-Stack PHP Developer

PHP • Laravel • CodeIgniter • SQL Server

Quick Links
Home
About
Skills
Experience
Projects
Contact

Social
GitHub
LinkedIn

© 2026 [YOUR NAME]. All Rights Reserved.
```

---

# 20. Responsive Requirements

The website must work correctly at:

Desktop:

- 1440px
- 1280px
- 1024px

Tablet:

- 912px
- 834px
- 768px

Mobile:

- 414px
- 390px
- 375px
- 360px
- 320px

Requirements:

- No horizontal scrolling
- Mobile-first layout
- Touch-friendly controls
- Responsive typography
- Responsive cards
- Responsive timeline
- Responsive modal
- Responsive navigation
- Proper spacing
- Readable text

Test every section at mobile width.

---

# 21. Tailwind CSS Requirements

Use Tailwind CSS consistently.

Create reusable UI patterns for:

- Buttons
- Cards
- Badges
- Section headings
- Inputs
- Modals
- Navigation
- Technology tags
- Project cards

Avoid excessive custom CSS when Tailwind utilities can solve the problem.

Keep custom CSS limited to cases where Tailwind is insufficient.

---

# 22. JavaScript & jQuery Requirements

Implement:

## Navigation

- Mobile menu
- Sticky navigation
- Active section
- Smooth scrolling

## Projects

- Category filtering
- Project modal
- Dynamic project content

## UI

- Scroll reveal animations
- Back-to-top button
- Modal handling
- Toast notifications

## Contact

- Client-side validation
- AJAX-ready form handling

Use external JavaScript files.

Do not use inline handlers:

```html
onclick="..."
onchange="..."
onsubmit="..."
```

Prefer:

```javascript
$('#contactButton').on('click', function () {
    // ...
});
```

or:

```javascript
document
    .getElementById('contactButton')
    .addEventListener('click', function () {
        // ...
    });
```

---

# 23. Content Security Policy Compatibility

The website must be designed to support a strict Content Security Policy.

Avoid:

- Inline JavaScript
- Inline event handlers
- eval()
- Function constructor
- Unsafe dynamic code execution

Prefer external:

```text
assets/js/*.js
assets/css/*.css
```

If inline code is absolutely necessary, structure the project so nonce/hash-based CSP can be added later.

Do not assume Tailwind itself prevents CSP issues. CSP compatibility depends on how Tailwind and all other resources are deployed and used.

---

# 24. SEO

Implement:

- Semantic HTML5
- Proper title
- Meta description
- Canonical URL
- Open Graph metadata
- Social sharing metadata
- Correct heading hierarchy
- Descriptive alt attributes
- Structured data where appropriate

Recommended title:

```text
[YOUR NAME] | Full-Stack PHP Developer | Laravel & CodeIgniter
```

Recommended description:

```text
Full-Stack PHP Developer specializing in Laravel, CodeIgniter, SQL Server, enterprise applications, banking software, dashboards, reporting, and business automation.
```

Do not invent the developer's real name.

Use:

```text
[YOUR NAME]
```

until the actual name is supplied.

---

# 25. Accessibility

Follow accessibility best practices.

Implement:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Proper button elements
- ARIA labels where required
- Accessible modal
- Accessible mobile menu
- Sufficient contrast
- Form labels
- Error messages
- Reduced-motion support

Do not rely on color alone to communicate state.

---

# 26. Performance

Optimize for:

- Fast page load
- Optimized images
- Lazy-loaded images
- Minimal JavaScript
- Minimal third-party dependencies
- Efficient DOM operations
- Minified production assets

Target:

```text
Performance:     90+
Accessibility:   90+
Best Practices:  90+
SEO:             90+
```

Do not add libraries simply for visual effects.

---

# 27. Dark Mode

Implement light/dark mode.

Support:

- Light
- Dark
- System preference

Store manual preference in:

```text
localStorage
```

Avoid flash of incorrect theme during initial page load.

---

# 28. Animations

Use subtle professional animations only.

Examples:

- Fade-in sections
- Slide-up cards
- Hover transitions
- Button transitions
- Modal transitions
- Navbar transitions

Avoid:

- Excessive bouncing
- Continuous animations
- Large parallax effects
- Distracting particle effects

Respect:

```text
prefers-reduced-motion
```

---

# 29. Security

Never include:

- Passwords
- API keys
- Database credentials
- Customer data
- Account numbers
- Internal URLs
- Confidential documents
- Private source code
- Sensitive screenshots

If demo data is required, use fictional data.

If a backend is later introduced:

- CSRF
- Input validation
- Output escaping
- Rate limiting
- Secure sessions
- Security headers
- Authentication
- Authorization
- Audit logging

---

# 30. Visual Design

Use a professional enterprise/developer aesthetic.

Preferred:

- Strong typography
- Clean spacing
- Subtle borders
- Professional cards
- Consistent iconography
- Clear hierarchy
- Controlled use of accent colors
- High readability

Avoid:

- Excessive gradients
- Excessive glassmorphism
- Neon-heavy design
- Cartoon graphics
- Generic stock photos
- Overloaded dashboards
- Skill percentage meters

The website should look credible to:

- Software companies
- Banking technology companies
- Enterprise clients
- Recruiters
- Technical managers
- Freelance clients

---

# 31. Recommended Homepage Order

Use this order:

```text
1. Navbar

2. Hero

3. Statistics

4. About

5. Technical Skills

6. Enterprise & Banking Experience

7. Featured Projects

8. Architecture

9. Problems I Solve

10. Services

11. Development Process

12. Resume CTA

13. Contact

14. Footer
```

---

# 32. Important Positioning

The portfolio should NOT primarily communicate:

> "I can build websites."

It should communicate:

> "I build reliable enterprise business applications and understand backend systems, databases, business processes, reporting, workflows, data validation, and real-world software requirements."

Core positioning:

```text
PHP
+
Laravel / CodeIgniter
+
SQL Server / MySQL
+
Enterprise Applications
+
Banking Software
+
Reporting
+
Workflow Automation
+
Data Processing
```

---

# 33. Implementation Rules

1. Build the website as a real production-quality project.
2. Do not create placeholder lorem ipsum content.
3. Use realistic professional content based on the provided developer profile.
4. Never fabricate employment history, companies, certifications, statistics, clients, or achievements.
5. Use `[YOUR NAME]`, `[COMPANY NAME]`, `[DATE]`, etc. where information is missing.
6. Do not expose confidential banking information.
7. Keep components reusable.
8. Keep JavaScript modular.
9. Make the entire site responsive.
10. Test mobile layouts carefully.
11. Ensure keyboard accessibility.
12. Ensure modal and mobile navigation work correctly.
13. Ensure no horizontal overflow.
14. Ensure all buttons and links have clear states.
15. Use Tailwind CSS for the primary UI styling.
16. Use HTML, JavaScript, and jQuery only for the frontend.
17. Do not add React/Vue/Angular.
18. Do not add a backend unless explicitly requested.
19. Do not add unnecessary dependencies.
20. Keep the architecture easy to extend later.

---

# 34. Development Workflow

Before coding:

1. Analyze the requirements.
2. Define the page structure.
3. Define reusable components.
4. Define the design system.
5. Define project data structure.
6. Define JavaScript modules.
7. Define responsive breakpoints.

Then:

1. Build the base HTML.
2. Implement Tailwind styling.
3. Implement responsive navigation.
4. Implement sections.
5. Implement project filtering.
6. Implement project modal.
7. Implement dark mode.
8. Implement animations.
9. Implement contact form UI.
10. Add SEO metadata.
11. Perform accessibility review.
12. Perform responsive testing.
13. Perform performance review.
14. Fix visual inconsistencies.
15. Clean and organize the final code.

---

# 35. Final Quality Checklist

Before considering the project complete, verify:

- [ ] Desktop layout works.
- [ ] Mobile layout works.
- [ ] Tablet layout works.
- [ ] No horizontal scrolling.
- [ ] Navbar works.
- [ ] Mobile menu works.
- [ ] Smooth scrolling works.
- [ ] Active navigation state works.
- [ ] Project filters work.
- [ ] Project modal works.
- [ ] Escape closes modal.
- [ ] Modal is keyboard accessible.
- [ ] Dark mode works.
- [ ] Theme preference persists.
- [ ] Contact form validation works.
- [ ] Buttons have hover/focus states.
- [ ] Images have alt text.
- [ ] Headings are correctly structured.
- [ ] SEO metadata exists.
- [ ] No confidential information is exposed.
- [ ] No inline JavaScript is used.
- [ ] CSP-friendly architecture is maintained.
- [ ] JavaScript is modular.
- [ ] Tailwind is used consistently.
- [ ] jQuery is used only where useful.
- [ ] No unnecessary libraries are included.
- [ ] Animations respect reduced-motion preferences.
- [ ] Lighthouse targets are considered.
- [ ] Code is clean and maintainable.

---

# 36. Final Design Goal

The finished portfolio should make a recruiter, technical manager, or potential client think:

> "This developer has experience building real-world enterprise software and understands PHP, databases, business processes, workflows, reporting, data processing, and application architecture."

Prioritize:

**Technical credibility > decorative effects**

**Real-world experience > generic claims**

**Business problem solving > technology lists**

**Professional UI > flashy design**

**Maintainable code > unnecessary complexity**
