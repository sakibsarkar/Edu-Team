import "./SocialAuthentication.css";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const SocialAuthentication = () => {
    const { googleAuthentication, user } = useContext(Authcontext)
    console.log(user)
    const navigate = useNavigate()

    const mediaLogin = (media) => {
        media()
            .then(res => {
                navigate(location?.state ? location.state : "/")
            })
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

