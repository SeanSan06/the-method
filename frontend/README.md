# The Method Frontend

This is the frontend for **The Method**, a web application for resume building, AI-powered resume optimization, interview practice, and job search.

## Overview
- Built with **React** and **Vite** for fast development and hot module reloading.
- Modern, component-based architecture with dedicated pages for each major feature.
- Custom CSS and stylelint for consistent, accessible design.

## Folder Structure

```text
frontend/
├── Dockerfile
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── CallToAction.jsx
│   │   ├── ContactEmail.jsx
│   │   ├── FileUpload.jsx
│   │   ├── Footer.jsx
│   │   ├── Form.jsx
│   │   ├── HeroArea.jsx
│   │   ├── HomeStatistics.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── NavBar.jsx
│   │   ├── Privacy.jsx
│   │   ├── RecommendProvr.jsx
│   │   ├── ResumePreview.jsx
│   │   └── Reviews.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── DataPage.jsx
│   │   ├── FAQsPage.jsx
│   │   ├── FormPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── NewsPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   └── TermsOfServicePage.jsx
│   └── styles/
│       ├── about-page.css
│       ├── contact-page.css
│       ├── dashboard-page.css
│       ├── data-page.css
│       ├── faq-page.css
│       ├── form-page.css
│       ├── home-page.css
│       ├── login-page.css
│       ├── news-page.css
│       ├── pricing-page.css
│       ├── privacy-policy-page.css
│       ├── styles.css
│       ├── terms-of-service-page.css
│       └── specific-component/
│           └── resume-template.css
├── public/
└── ...
```

## Development

### Install dependencies
```bash
npm ci
```

### Run in development mode
```bash
npm run dev
```

### Linting
- **JSX:** `npm run lint`
- **CSS:** `npm run lint:css`
- **All:** `npm run lint:all`

## Build for production
```bash
npm run build
```

## Docker
This frontend can be built and run using Docker. See the project root README for details.

## Attributions
Upload icons created by Ilham Fitrotul Hayat - Flaticon