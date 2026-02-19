// Draws out the Stars
function Star({ fillPercent = 100, size = 40 }) {
    return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
            {/* Empty star */}
            <path
                d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.6L12 16.9 5.8 20l1.6-6.6L2.2 8.9l6.9-.6L12 2z"
                fill="#ddd"
            />

            {/* Clip for partial fill */}
            <defs>
                <clipPath id={`clip-${fillPercent}`}>
                <rect x="0" y="0" width={`${fillPercent}%`} height="24" />
                </clipPath>
            </defs>

            {/* Filled star */}
            <path
                d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.6L12 16.9 5.8 20l1.6-6.6L2.2 8.9l6.9-.6L12 2z"
                fill="skyblue"
                clipPath={`url(#clip-${fillPercent})`}
            />
            </svg>
    );
}

// Adjusts how Stars are displayed based on rating
function Rating({ value, max = 5 }) {
  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(
          Math.max((value - i) * 100, 0),
          100
        );

        return <Star key={i} fillPercent={fill} />;
      })}
    </div>
  );
}


function Reviews() {
    return  (
        <div>
            <div id="reviews-area">
                <h2 id="review-header">Reviews</h2>
                <p id="review-caption">Hear from people who landed their dream job</p>
                <div id="review-cards-area">
                    <div id="review-card-1">
                        <Rating value={5} />
                        <p className="reivew-quote"><i>
                            "I love this website so much! The Method helped me land
                                a SWE intern position at my dream company!"
                        </i></p>
                        <div>
                            <p className="reivew-name"><b>-Sean S.</b></p>
                            <p className="reivew-job">SWE Intern at XYZ</p>
                        </div>
                    </div>

                    <div id="review-card-2">
                        <Rating value={4.5} />
                        <p className="reivew-quote"><i>
                            "I just got into FANNG, I am so glad that
                                The Method exists. It has truly been an amazing tool for my
                                job search."
                        </i></p>
                        <div>
                            <p className="reivew-name"><b>-Lien J.</b></p>
                            <p className="reivew-job">20x Engineer at Google</p>
                        </div>
                    </div>

                    <div id="review-card-3">
                        <Rating value={4.75} />
                        <p className="reivew-quote"><i>
                            "One of the best job prep websites out there.
                                I cant believe this is free."
                        </i></p>
                        <div>
                            <p className="reivew-name"><b>-Ved P.</b></p>
                            <p className="reivew-job">Founder of tech startup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;