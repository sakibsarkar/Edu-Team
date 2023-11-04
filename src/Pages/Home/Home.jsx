import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Feature from "../../Components/Feature/Feature";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Feature></Feature>
            <FAQ></FAQ>
            <Footer></Footer>
        </>
    );
};

export default Home;