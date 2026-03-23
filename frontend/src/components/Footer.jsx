import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div id="footer-information-area">
                <div>
                    <h2>The <span className="method-word">Method's</span> Moto</h2>
                    <p>Make Every Task Happen, Own Destiny</p>
                </div>
                <div id="quick-links">
                    <h2>Quick Links</h2>
                    <NavLink id="home-quick-navlink"
                        to="/"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Home
                    </NavLink>

                    <NavLink id="home-quick-navlink"
                        to="/form"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Form
                    </NavLink>

                    <NavLink id="home-quick-navlink"
                        to="/dashboard"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink id="home-quick-navlink"
                        to="/about"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        About
                    </NavLink>

                    <NavLink id="home-quick-navlink"
                        to="/pricing"
                        className={({ isActive }) => isActive ? 'active-link' : undefined}
                    >
                        Pricing
                    </NavLink>
                </div>
                <div id="team-section">
                    <h2>The Team</h2>
                    <a href="https://www.linkedin.com/in/cole-saldanha/" target="_blank" rel="noopener noreferrer">Cole Saldanha</a>
                    <a href="https://www.linkedin.com/in/daniel-ricardo-hurtarte-29a911389/" target="_blank" rel="noopener noreferrer">Daniel Hurtarte</a>
                    <a href="https://www.linkedin.com/in/lien-jabujab-0498a22b7/" target="_blank" rel="noopener noreferrer">Lien Jabujab</a>
                    <a href="https://www.linkedin.com/in/seansan06/" target="_blank" rel="noopener noreferrer">Sean San</a>
                    <a href="https://www.linkedin.com/in/vedevpatel24/" target="_blank" rel="noopener noreferrer">Ved Patel</a>
                </div>
                <div id="socials-section">
                    <h2>Socials/Contacts</h2>
                    <p>LinkedIn</p>
                    <p>Email</p>
                    <p>GitHub</p>
                    <p>Reddit</p>
                    <p>Discord</p>
                </div>
                <div id="extras-section">
                    <h2>Extras</h2>
                    <NavLink to="/news" className={({ isActive }) => isActive ? 'active-link' : undefined}>News</NavLink>
                    <NavLink to="/data" className={({ isActive }) => isActive ? 'active-link' : undefined}>Data</NavLink>
                    <NavLink to="/terms-of-service" className={({ isActive }) => isActive ? 'active-link' : undefined}>Terms of Service</NavLink>
                    <NavLink to="/privacy-policy" className={({ isActive }) => isActive ? 'active-link' : undefined}>Privacy Policy</NavLink>
                    <NavLink to="/faqs" className={({ isActive }) => isActive ? 'active-link' : undefined}>FAQs</NavLink>
                </div>
            </div>
            <p id="copyright">
            @2026 The&nbsp;
            <span className="method-word">Method</span>. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;