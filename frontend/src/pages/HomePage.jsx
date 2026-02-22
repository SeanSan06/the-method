import HeroArea from "../components/HeroArea";
import HowItWorks from "../components/HowItWorks";
import HomeStatistics from "../components/HomeStatistics";
import Reviews from "../components/Reviews";
import RecommendProvr from "../components/RecommendProvr";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function HomePage() {
    return  (
        <div>
            <HeroArea />
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