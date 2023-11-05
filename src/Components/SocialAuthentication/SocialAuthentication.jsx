import "./SocialAuthentication.css";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const SocialAuthentication = () => {
    const { googleAuthentication } = useContext(Authcontext)

    const mediaLogin = (media) => {
        media()
            .then(res => console.log(res))
    }
    return (
        <div className="socialAuthCon">
            <div className="socialBox" onClick={() => mediaLogin(googleAuthentication)}>
                <FcGoogle></FcGoogle>
                <p>Google</p>
            </div>

            <div className="socialBox">
                <FaGithub></FaGithub>
                <p>GitHub</p>
            </div>
        </div>
    );
};

export default SocialAuthentication;

