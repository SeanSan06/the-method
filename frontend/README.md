# Frontend Folder & File Structure

## Recommended Structure

The frontend is organized for scalability and maintainability. Follow these guidelines when adding new files or folders:

- **src/**: Main source code for the frontend React app.
	- **components/**: Reusable UI components (e.g., buttons, forms, navbars). Each component should be in its own file, named in PascalCase (e.g., `MyComponent.jsx`).
	- **pages/**: Top-level route components representing full pages (e.g., `HomePage.jsx`, `LoginPage.jsx`).
	- **assets/**: Static assets such as images, fonts, or icons.
	- **styles/**: CSS files for global styles and page/component-specific styles. Use a separate CSS file for each page or major component when possible.
		- **specific-component/**: Styles specific to certain components (e.g., `resume-template.css`).
- **public/**: Static files served directly (e.g., `favicon.ico`, `robots.txt`).
- **App.jsx**: Main app component, sets up routing and layout.
- **main.jsx**: Entry point for React, renders the app.

## Guidelines

- Use clear, descriptive names for files and folders.
- Keep components small and focused; split into smaller components if needed.
- Place shared logic or hooks in a `hooks/` folder (create if needed).
- Place utility functions in a `utils/` folder (create if needed).
- Keep unrelated code separated by folder.
- Add a README.md to any new major folder to describe its purpose if it grows large.

This structure helps keep the codebase organized and easy to navigate as the project grows.
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