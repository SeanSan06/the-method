function Reviews() {
    return  (
        <div>
            <div id="reviews-area">
                <h2 id="review-header">Reviews</h2>
                <p id="review-caption">Hear from succesful other users</p>
                <div id="review-cards-area">
                    <div id="review-card-1">
                        <p>5 Stars</p>
                        <p class="reivew-quote">"I love this website so much! The Method helped me land
                            a SWE intern position at my dream company!"</p>
                        <div>
                            <p class="reivew-name">-Coda K Litel</p>
                            <p class="reivew-job">SWE Intern at XYZ</p>
                        </div>
                    </div>

                    <div id="review-card-2">
                        <p>4.5 Stars</p>
                        <p class="reivew-quote">"I just got into FANNG, I am so glad that
                            The Method exists. It has truly been an amazing tool for my
                            job search."</p>
                        <div>
                            <p class="reivew-name">-Sunil</p>
                            <p class="reivew-job">20x Engineer at Google</p>
                        </div>
                    </div>

                    <div id="review-card-3">
                        <p>4.75 Stars</p>
                        <p class="reivew-quote">"One of the best job prep websites out there.
                            I cant believe this is free."</p>
                        <div>
                            <p class="reivew-name">-Turring</p>
                            <p class="reivew-job">Founder of tech startup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;