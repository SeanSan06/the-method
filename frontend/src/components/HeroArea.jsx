import { useNavigate } from 'react-router-dom'

function HeroArea() {
    const navigate = useNavigate()

    const renderAnimatedText = (text, direction) => {
        const characters = Array.from(text)
        const letterCount = characters.filter((character) => character !== ' ').length

        // Calculate animation step based on letter count, with a minimum of 12ms(currently 650ms)
        const animationStep = `${Math.max(12, Math.round(650 / Math.max(letterCount, 1)))}ms`
        let letterIndex = 0

        return characters.map((character, index) => {
            if (character === ' ') {
                return (
                    <span key={`${direction}-space-${index}`} className="hero-letter hero-space">
                        &nbsp;
                    </span>
                )
            }

            const animationOrder =
                direction === 'rtl' ? letterCount - 1 - letterIndex : letterIndex

            letterIndex += 1

            return (
                <span
                    key={`${direction}-letter-${index}`}
                    className="hero-letter hero-fade-letter"
                    style={{ '--animation-order': animationOrder, '--animation-step': animationStep }}
                >
                    {character}
                </span>
            )
        })
    }
    
    return  (
        <div id="hero-area">
            <h1 aria-label="The Method">{renderAnimatedText('The Method', 'ltr')}</h1>
            <p aria-label="Make Every Task Happen, Own Destiny">
                {renderAnimatedText('Make Every Task Happen, Own Destiny', 'rtl')}
            </p>
            <button id="make-resume" onClick={() => navigate('/form')}>
                Create Resume
            </button>
        </div>
    );
}

export default HeroArea;