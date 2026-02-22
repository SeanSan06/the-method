import HeroArea from "../components/HeroArea";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function HomePage() {
    return  (
        <div>
            <HeroArea />
            <HowItWorks />
            <Reviews />
            <Footer />
        </div>
    );
}

export default HomePage;