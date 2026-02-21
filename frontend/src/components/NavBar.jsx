import { NavLink } from 'react-router-dom'


function NavBar({ toggleTheme, theme }) {
    return  (
        <nav href="/" id="nav-bar">
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
                        to="/contact"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div id="log-in-sign-up-lightdark-toggle">
                <div id="log-in-sign-up">
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>  
                <div id="light-dark-toggle">
                    <button onClick={toggleTheme}>
                        {theme === "light" && "Switch to Dark"}
                        {theme === "dark" && "Switch to Cream"}
                        {theme === "cream" && "Switch to Light"}
                    </button>
                </div>
            </div>
            
        </nav>
    );
}

export default NavBar;