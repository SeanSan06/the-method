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

                <p>
                    We are commited to protecting your data and maintaining your privacy. That is why 
                    we allow you to control your information at all times. Users who create an account 
                    with us can always view, edit, and delete their data. We will never sell your data 
                    to third parties, and we will always be transparent about how we use your data to 
                    improve our services.
                </p>
            </div>
        </div>
    );
}

export default Data;