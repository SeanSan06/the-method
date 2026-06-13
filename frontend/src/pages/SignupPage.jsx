function SignupPage() {
    return (
        <main id="signup-page">
            <section id="signup-card" aria-labelledby="signup-title">
                <header id="signup-header">
                    <h1 id="signup-title">Create your The Method account</h1>
                    <p id="signup-subtitle">
                        Already have an account? <a id="login-link" href="/login">Sign in</a>
                    </p>
                </header>

                <form id="signup-form">
                    <div className="signup-field-group">
                        <label className="signup-field-label" htmlFor="signup-name">Full name</label>
                        <input
                            id="signup-name"
                            className="signup-input"
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="signup-field-group">
                        <label className="signup-field-label" htmlFor="signup-email">Email</label>
                        <input
                            id="signup-email"
                            className="signup-input"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="signup-field-group">
                        <label className="signup-field-label" htmlFor="signup-password">Password</label>
                        <input
                            id="signup-password"
                            className="signup-input"
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            placeholder="Create a password"
                        />
                    </div>

                    <div className="signup-field-group">
                        <label className="signup-field-label" htmlFor="signup-password-confirm">Confirm password</label>
                        <input
                            id="signup-password-confirm"
                            className="signup-input"
                            type="password"
                            name="passwordConfirm"
                            autoComplete="new-password"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button id="signup-submit-button" type="submit">
                        Create account
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignupPage;
