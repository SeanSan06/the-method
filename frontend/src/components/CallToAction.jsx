import { useNavigate } from 'react-router-dom'

function CallToAction() {
    const navigate = useNavigate()

    return  (
        <div id="call-to-action-area">
            <h2 id="ready-to-get-started-h2">Ready to get started?</h2>
            <p id="call-to-action-p-top">Make Resumes. Prep for Interviews. Get Hired.</p>
            <p id="call-to-action-p-bottom">Its the 3 step Method</p>
            <button 
                id="call-to-action-sign-up-button" 
                onClick={() => {
                    navigate('/form');
                    window.scrollTo(0, 0);
                }}
            >
                Sign Up Now
            </button>
        </div>
    );
}

export default CallToAction;