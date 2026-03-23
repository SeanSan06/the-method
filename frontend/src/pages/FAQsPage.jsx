function FAQs() {
    return  (
        <div id="faqs">
            <div>
                <Link to="/" className="back-home-link">
                    Back Home
                </Link>
            </div>
            <h1>Frequently Asked Questions</h1>
            <p>
                Find answers to common questions about The Method. Post your own questions if you don't see 
                an answer to your query. A team member will respond as soon as possible. You can choose to 
                be an anonymous user or public and an email will be sent to you when a response is given.
            </p>

            <input type="text" placeholder="Search FAQs..." className="faq-search-input" aria-label="Search FAQs" />
        </div>
    );
}

export default FAQs;