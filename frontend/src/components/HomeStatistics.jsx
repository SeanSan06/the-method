function HomeStatistics() {
    return  (
        <div id="home-statistics-area">
            <h2>Home Statistics</h2>
            <div id="home-users-count">
                <h3>Users</h3>
                <p>0</p>
            </div>
            <div id="home-statistics">
                <h3 id="home-impact-statistics-subarea">Impact Statistics</h3>
                <div id="impact-statistics-data">
                    <div id="home-resumes-sent">
                        <h4>Resumes Sent</h4>
                    </div>
                    <div ud="home-interviews-held">
                        <h4>Interviews Held</h4>
                    </div>
                    <div id="home-jobs-offered">
                        <h4>Jobs Offered</h4>
                    </div>
                </div>

                <h3 id="home-the-method-statistics-subarea">The Method Statistics</h3>
                <div id="home-the-method-statistics-data">
                    <div id="home-resumes-optimized">
                        <h4>Resumes Optimized</h4>
                    </div>
                    <div id="home-hours-practicing-interviews">
                        <h4>Hours Practicing Interviews</h4>
                    </div>
                    <div id="home-jobs-found">
                        <h4>Jobs Found</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeStatistics;