function LoginPage() {
    return (
        <main id="login-page">
            <section id="login-card" aria-labelledby="login-title">
                <header id="login-header">
                    <h1 id="login-title">Sign in to your The Method account</h1>
                    <p id="login-subtitle">
                        New here? <a id="create-account-link" href="/signup">Create an account</a>
                    </p>
                </header>

                <form id="login-form">
                    <div className="login-field-group">
                        <label className="login-field-label" htmlFor="login-email">Email</label>
                        <input
                            id="login-email"
                            className="login-input"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="login-field-group">
                        <label className="login-field-label" htmlFor="login-password">Password</label>
                        <input
                            id="login-password"
                            className="login-input"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div id="login-form-options">
                        <label id="remember-me-option" htmlFor="login-remember-me">
                            <input id="login-remember-me" type="checkbox" name="rememberMe" />
                            <span>Remember me</span>
                        </label>

                        <a id="forgot-password-link" href="/forgot-password">Forgot password?</a>
                    </div>

                    <button id="login-submit-button" type="submit">
                        Sign in
                    </button>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;
