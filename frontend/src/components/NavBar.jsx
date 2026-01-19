function NavBar() {
    return  (
        <nav href="/" id="nav-bar">
            <h1 id="the-method">The Method</h1>
            <ul id="nav-bar-links">
                <li>Home</li>
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