import "./Banner.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeWrapper">
            <div className="bannerText">
                <h1 className="title">Effortless Assignment Submissions for <span className="text-[#bbf100] font-[800]">Success</span></h1>
                <p><span className="text-[#bbf100]">Welcome</span> to Assignment Central, your ultimate destination for hassle-free assignment submissions. We understand the demands of academic life, which is why we've created a platform that simplifies the submission process</p>

                <div className="bannerButtons">
                    <Link className="bgBtn" to={"/create-assignments"}>Create</Link>
                    <Link className="borderBtn" to={"/assignments"}>Explore</Link>
                </div>

                <div className="bgGraphic"></div>
            </div>
            <img src="https://i.ibb.co/3d0kfxy/slide.png" className="sideImage" />

            <div className="wave">
                <img src="https://i.ibb.co/ZY7GQmt/wave.png" />
            </div>



        </div>
    );
};

export default Home;