function HomeStatistics() {
    return  (
        <section id="home-statistics-area">
            <div id="home-statistics-header">
                <h2 id="home-statistics-title-h2">Real Progress</h2>
                <p id="home-statistics-caption">Track the steps that matter most from preparation to results.</p>
            </div>

            <div id="home-statistics-panels">
                <section className="home-statistics-panel">
                    <h3 className="home-statistics-panel-title">User Progress</h3>
                    <div className="home-statistics-grid">
                        <article className="home-stat-card">
                            <h4>Resumes Optimized</h4>
                            <p>0</p>
                        </article>
                        <article className="home-stat-card">
                            <h4>Applications Sent</h4>
                            <p>0</p>
                        </article>
                        <article className="home-stat-card">
                            <h4>Interviews Booked</h4>
                            <p>0</p>
                        </article>
                    </div>
                </section>

                <section className="home-statistics-panel">
                    <h3 className="home-statistics-panel-title">Outcome Impact</h3>
                    <div className="home-statistics-grid">
                        <article className="home-stat-card home-stat-card-highlight">
                            <h4>Offers Received</h4>
                            <p>0</p>
                        </article>
                        <article className="home-stat-card">
                            <h4>Success Rate</h4>
                            <p>0%</p>
                        </article>
                        <article className="home-stat-card">
                            <h4>Time Saved</h4>
                            <p>0h</p>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default HomeStatistics;