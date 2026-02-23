function PricingPage() {
    return  (
        <div id="pricing-page">
            <h1 id="pricing-page-h1">Pricing Page</h1>
            <div>
                <h2>Free</h2>
                <p>Basic features for everyone</p>
                <p>$0/month</p>
                <div>
                    <ul>
                        <li>Basic access to all features</li>
                        <li>Community support</li>
                    </ul>
                </div>
            </div>

            <div>
                <h2>Student</h2>
                <p>Discounted pricing for students</p>
                <p>$2.49/month</p>
                <div>
                    <ul>
                        <li>Everything in free plan +</li>
                        <li>Store 10 more resumes</li>
                        <li>Priority support</li>
                        <li>Feature requests</li>
                        <li>WIP</li>
                    </ul>
                </div>

            </div>

            <div>
                <h2>Premium</h2>
                <p>All features for professionals</p>
                <p>$6.99/month</p>
                <div>
                    <ul>
                        <li>Everything in free plan +</li>
                        <li>WIP</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default PricingPage;