import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'; 

import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import FormPage from  './pages/FormPage';
import DashboardPage from  './pages/DashboardPage';
import AboutPage from  './pages/AboutPage';
import PricingPage from  './pages/PricingPage';
import NewsPage from  './pages/NewsPage';
import DataPage from  './pages/DataPage';
import TermsOfServicePage from  './pages/TermsOfServicePage';
import PrivacyPolicyPage from  './pages/PrivacyPolicyPage';
import FAQsPage from  './pages/FAQsPage';


import './styles/styles.css'
import './styles/home-page.css'
import './styles/form-page.css'
import './styles/dashboard-page.css'
import './styles/about-page.css'
import './styles/pricing-page.css'
import './styles/news-page.css'

import './styles/contact-page.css'

import './styles/specific-component/resume-template.css'

// Defines what Page Component appears for each of the 5 webpages 
// based on the current path
function App() {
    // Initialize theme based on what user set. If new user, default to light
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // Apply theme to <html>
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Cycles through: light -> dark -> cream -> light
    const toggleTheme = () => {
        setTheme(prev => {
            if (prev === "light") return "cream";
            if (prev === "cream") return "midnight"; // New step!
            if (prev === "midnight") return "dark";
            return "light";
        });
    };

    return (
    <div>
        <NavBar toggleTheme={toggleTheme} theme={theme} />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
        </Routes>
    </div>
    )
}

export default App
