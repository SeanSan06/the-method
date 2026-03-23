import { Link } from "react-router-dom";

function TermsOfService() {
    return  (
        <div id="terms-of-service-page">
            <div id="terms-of-service-content">
                <Link to="/" className="back-home-link">
                    Back Home
                </Link>
                <h1>Our Terms of Service</h1>
                <p>
                    Last updated: <time dateTime="2026-03-22">March 22, 2026</time>
                </p>

                <ol>
                    <li>Acceptance of terms: By using The Method you agree to the following our Terms of Service.</li>
                    <li>Who can use this: Anyone who is at least 18 years old and has a valid email address.</li>
                    <li>Privacy: You are responsible for maintaining the confidentiality of your account information.</li>
                    <li>Scrapping: For now websrapping is not allowed. In the future, we may revise this policy.</li>
                    <li>Laws: You agree not to use The Method for any unlawful or prohibited activities.</li>
                    <li>Changes to TOS: We reserve the right to modify or terminate our services at any time, but we will always give an adequate notice.</li>
                </ol>

                <p><strong>Disclaimer:</strong> Subject to update as we build our website. We will always strive to provide a safe and reliable platform for job seekers and employers.</p>
            
            </div>

        </div>
    );
}

export default TermsOfService;