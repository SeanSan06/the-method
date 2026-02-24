import FreeIcon from "../assets/pricingFree.svg?react";
import StudentIcon from "../assets/pricingStudent.svg?react";
import PremiumIcon from "../assets/pricingPremium.svg?react";

function PricingPage() {
    return  (
        <div id="pricing-page">
            <h1 id="pricing-page-h1">Pricing Page</h1>
            <div id="pricing-tiers-subarea">
                <div id="pricing-free-tier">
                    <FreeIcon className="pricing-icon" />
                    <h2 className="pricing-h2">Free</h2>
                    <p className="pricing-p">Essential features for all users</p>
                    <p className="pricing-price-p">$0/month</p>
                    <div>
                        <ul>
                            <li>Basic access to all features</li>
                            <li>Community support</li>
                            <li>Interview Prep</li>
                            <li>Job Apply</li>
                            <li>WIP</li>
                        </ul>
                    </div>
                </div>
                <div id="pricing-student-tier">
                    <StudentIcon className="pricing-icon" />
                    <h2 className="pricing-h2">Student</h2>
                    <p className="pricing-p">Discounts for students</p>
                    <p className="pricing-price-p">$2.49/month</p>
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
                <div id="pricing-premium-tier">
                    <PremiumIcon className="pricing-icon" />
                    <h2 className="pricing-h2">Premium</h2>
                    <p className="pricing-p">All features for professionals</p>
                    <p className="pricing-price-p">$5.49/month</p>
                    <div>
                        <ul>
                            <li>Everything in free plan +</li>
                            <li>Store 15 more resumes</li>
                            <li>Use more optimization options</li>
                            <li>5 more resume templates</li>
                            <li>WIP</li>
                        </ul>
                    </div>
                </div>
                        </div>
            </div>
    );
}

export default PricingPage;