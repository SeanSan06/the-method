import { Link } from "react-router-dom";

function Data() {
    return  (
        <div id="data-page">
            <div id="data-content">
                <Link to="/" className="back-home-link">
                    Back Home
                </Link>
                <h1>Our Privacy Policy</h1>
                <p>
                    Last updated: <time dateTime="2026-03-22">March 22, 2026</time>
                </p>
                <ol>
                        <li>Here at The Method we respect your data and privacy when applying to jobs.</li>
                        <li>We collect your name email address for account purposes.</li>
                        <li>We do not sell your data ever.</li>
                        <li>Resumes will be stored in our databases, but you can always remove them.</li>
                </ol>
                
                <p><strong>Disclaimer:</strong> Subject to update as we build our website. Not to worry, we will always prioritize your privacy.</p>
            </div>
        </div>
    );
}

export default Data;