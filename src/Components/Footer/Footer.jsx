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
                        <h1>Some Useful links</h1>
                        <a href="/"><p>Faq</p></a>
                        <a href="/"><p>Credits</p></a>
                        <a href="/"><p>About Us</p></a>
                        <a href="/"><p>Terms & conditions</p></a>
                    </div>




                    <div className="moreLinks">
                        <h1>Extra Links</h1>
                        <a href="/"><p>Join our Community</p></a>
                        <a href="/"><p>Wok with Us</p></a>
                        <a href="/"><p>Get More Content</p></a>

                    </div>


                    <div className="moreLinks">
                        <h1>Our Office</h1>
                        <a href="/"><p>Road # 9, East kazipara, mirpur - 1, 1218</p></a>
                        <a href="/"><p>SUN -THUS | 10:00 - 06:00 </p></a>


                    </div>

                </div>

                <div className="footerForm">
                    <h1>Say hello</h1>
                    <form action="">
                        <input type="text" name="name" placeholder="NAME" />
                        <input type="email" name="email" placeholder="EMAIL" />
                        <input type="tel" name="telNumber" placeholder="teliphone"></input>
                        <textarea name="messege" placeholder="YOUR MESSEGE"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <div className="footerWave">
                <img src="https://i.ibb.co/Pct0cwv/wave-1.png" />
            </div>

            <div className="footerBottom">
                <p>Copyrighted by <span className="text-[#ff912f] cursor-pointer">@eduteam.</span> All right reserved 2023</p>
            </div>
        </footer>
    )
};

export default Footer;