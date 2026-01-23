import { useNavigate } from 'react-router-dom'

function HeroArea() {
    const navigate = useNavigate()
    
    return  (
        <div id="hero-area">
            <h1>The <span id="method-word">Method</span></h1>
            <p>Make Every Task Happen, Own Destiny</p>
            <button id="make-resume" onClick={() => navigate('/form')}>
                Create Resume
            </button>
        </div>
    );
}

export default HeroArea;