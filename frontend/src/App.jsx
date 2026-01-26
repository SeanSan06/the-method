import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import FormPage from  './pages/FormPage';
import './styles/styles.css'
import './styles/home-page.css'
import './styles/form-page.css'


function App() {
    return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
        </Routes>
    </div>
    )
}

export default App
