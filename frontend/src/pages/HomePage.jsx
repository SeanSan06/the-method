import NavBar from "../components/NavBar";
import HeroArea from "../components/HeroArea";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function HomePage() {
    return  (
        <div>
            <NavBar />
            <HeroArea />
            <Reviews />
            <Footer />
        </div>
    );
}

export default HomePage;