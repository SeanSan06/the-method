import NavBar from "../components/NavBar";
import HeroArea from "../components/HeroArea";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

function HomePage() {
    return  (
        <div>
            <NavBar />
            <HeroArea />
            <HowItWorks />
            <Reviews />
            <Footer />
        </div>
    );
}

export default HomePage;