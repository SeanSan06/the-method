import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'; 

import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import FormPage from  './pages/FormPage';
import DashboardPage from  './pages/DashboardPage';
import AboutPage from  './pages/AboutPage';
import ContactPage from  './pages/ContactPage';

import './styles/styles.css'
import './styles/home-page.css'
import './styles/form-page.css'
import './styles/dashboard-page.css'
import './styles/about-page.css'
import './styles/contact-page.css'
import './styles/specific-component/resume-template.css'

// Defines what Page Component appears for each of the 5 webpages 
// based on the current path
function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // Apply theme to <html>
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
    <div>
        <NavBar toggleTheme={toggleTheme} theme={theme} />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </div>
    )
}

export default App
