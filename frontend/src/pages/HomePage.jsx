import HeroArea from "../components/HeroArea";
import HowItWorks from "../components/HowItWorks";
import HomeStatistics from "../components/HomeStatistics";
import Reviews from "../components/Reviews";
import RecommendProvr from "../components/RecommendProvr";
import Footer from "../components/Footer";

function HomePage() {
    return  (
        <div>
            <HeroArea />
            <HowItWorks />
            <HomeStatistics />
            <Reviews />
            <RecommendProvr />
            <Footer />
        </div>
    );
}

export default HomePage;