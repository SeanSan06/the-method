import HeroArea from "../components/HeroArea";
import HowItWorks from "../components/HowItWorks";
import HomeStatistics from "../components/HomeStatistics";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function HomePage() {
    return  (
        <div>
            <HeroArea />
            <HowItWorks />
            <HomeStatistics />
            <Reviews />
            <Footer />
        </div>
    );
}

export default HomePage;