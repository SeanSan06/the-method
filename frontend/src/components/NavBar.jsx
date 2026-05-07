import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import lightThemeIcon from '../assets/light.svg?raw'
import creamThemeIcon from '../assets/cream.svg?raw'
import midnightThemeIcon from '../assets/midnight.svg?raw'
import darkThemeIcon from '../assets/dark.svg?raw'

const themeIcons = {
    light: lightThemeIcon,
    cream: creamThemeIcon,
    midnight: midnightThemeIcon,
    dark: darkThemeIcon
}

const cleanSvgMarkup = (svgMarkup) => svgMarkup.replace(/<\?xml[\s\S]*?\?>/g, '').trim()

const renderThemeIcon = (themeName) => ({
    __html: cleanSvgMarkup(themeIcons[themeName])
})

function NavBar({ toggleTheme, theme }) {
    const navigate = useNavigate()
    const [showThemeMenu, setShowThemeMenu] = useState(false)

    const themes = ['light', 'cream', 'midnight', 'dark']
    const themeLabels = {
        light: 'Light',
        cream: 'Cream',
        midnight: 'Midnight',
        dark: 'Dark'
    }

    const handleThemeSelect = (selectedTheme) => {
        if (selectedTheme !== theme) {
            toggleTheme(selectedTheme)
        }
        setShowThemeMenu(false)
    }

    return  (
        <nav id="nav-bar">
            <h2 id="the-method">The <span className="method-word">Method</span></h2>
            <ul id="nav-bar-links">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/form"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Form
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Dashboard
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/pricing"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Pricing
                    </NavLink>
                </li>
            </ul>
            <div id="log-in-sign-up-lightdark-toggle">
                <div className="theme-selector-container">
                    <button onClick={() => setShowThemeMenu(!showThemeMenu)} className="theme-button">
                        <span className="theme-icon">
                            <span dangerouslySetInnerHTML={renderThemeIcon(theme)} />
                        </span>
                        <span>{themeLabels[theme]}</span>
                    </button>
                    {showThemeMenu && (
                        <div className="theme-menu">
                            {themes.map(t => (
                                <button
                                    key={t}
                                    className={`theme-option ${t === theme ? 'active' : ''}`}
                                    onClick={() => handleThemeSelect(t)}
                                >
                                    <span className="theme-icon">
                                        <span dangerouslySetInnerHTML={renderThemeIcon(t)} />
                                    </span>
                                    <span>{themeLabels[t]}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <button id="get-started-btn" onClick={() => navigate('/login')}>
                    Get Started
                </button>
            </div>
        </nav>
    );
}

export default NavBar;