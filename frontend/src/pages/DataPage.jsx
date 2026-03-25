import { useState } from "react";
import { Link } from "react-router-dom";

function Data() {
    const [lastUpdated, setLastUpdated] = useState("March 22, 2026");
    const [hasData, setHasData] = useState(true);

    const handleDeleteData = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all your data? This action cannot be undone.");
        
        if (confirmDelete) {
            setHasData(false);
            setLastUpdated("N/A"); 
            alert("Your data has been successfully deleted.");
            
        }
    };

    return  (
        <div id="data-page">
            <div id="data-content">
                <Link to="/" className="back-home-link">
                    Back Home
                </Link>
                
                <h1>Your Data</h1>
                
                <p>
                    Last updated: <time>{lastUpdated}</time>
                </p>

                <div className="data-info-card">
                    <p>
                        We are committed to protecting your data and maintaining your privacy. 
                        You have full control over your information. Click the button below to 
                        permanently delete all your data from our servers.
                    </p>

                    {}
                    {hasData ? (
                        <button className="delete-data-btn" onClick={handleDeleteData}>
                            Delete All My Data
                        </button>
                    ) : (
                        <p className="data-deleted-msg">Your data has been cleared.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Data;