import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import FormPage from  './pages/FormPage';
import DashboardPage from  './pages/DashboardPage';

import './styles/styles.css'
import './styles/home-page.css'
import './styles/form-page.css'

// Defines what Page Component appears for each of the 5 webpages
function App() {
    return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<DashboardPage />} />
            <Route path="/contact" element={<DashboardPage />} />
        </Routes>
    </div>
    )
}

export default App
