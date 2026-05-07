import HeroArea from "../components/HeroArea";
import { useLocation } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import HomeStatistics from "../components/HomeStatistics";
import Reviews from "../components/Reviews";
import RecommendProvr from "../components/RecommendProvr";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function HomePage() {
    const location = useLocation();
    return  (
        <div>
            <HeroArea key={location.pathname} />
            <HowItWorks />
            <HomeStatistics />
            <Reviews />
            <RecommendProvr />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default HomePage;