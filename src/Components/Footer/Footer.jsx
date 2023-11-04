import "./Footer.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
    return (
        <footer>

            <div className="footerHead">
                <img src="https://i.ibb.co/mHztTCN/EduLogo.png" />
                <div className="socialLinks">
                    <a href="/"><BiLogoFacebook /> </a>
                    <a href="/"><GrTwitter /> </a>
                    <a href="/"><AiOutlineGoogle /> </a>
                </div>
            </div>

            <div className="footerBody">
                <div className="footerLinks">
                    <div className="ContactLinks">
                        <h1>Contact</h1>
                        <p className="text-[#612bed]">Email</p>
                        <p className="info">edteam@gmail.com</p>

                        <p className="text-[#612bed]">Phone</p>
                        <p className="info">+880 1723456789</p>
                    </div>

                    <div className="moreLinks">
                        <h1>Some More Useful links</h1>
                        <a href="/"><p>Faq</p></a>
                        <a href="/"><p>Credits</p></a>
                        <a href="/"><p>About Us</p></a>
                        <a href="/"><p>Terms & conditions</p></a>
                    </div>
                </div>
            </div>
            {/* 
            <div className="footerWave">
                <img src="https://i.ibb.co/5YWtv8s/wave-1.png" />
            </div> */}
        </footer>
    )
};

export default Footer;