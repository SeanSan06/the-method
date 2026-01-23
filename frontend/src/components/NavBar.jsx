import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    return  (
        <nav href="/" id="nav-bar">
            <h2 id="the-method">The Method</h2>
            <ul id="nav-bar-links">
                <li onClick={() => navigate('/')}>Home</li>
                <li>Dashboard</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div id="log-in-sign-up">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </nav>
    );
}

export default NavBar;