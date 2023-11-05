import "./SocialAuthentication.css";
import useAxios from "../../useAxios";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const SocialAuthentication = ({ LOCATION }) => {
    const { googleAuthentication, user } = useContext(Authcontext)
    const axios = useAxios()
    const navigate = useNavigate()

    const mediaLogin = async (media) => {
        try {
            const signin = await media()

            console.log(signin?.user.email)
            axios.post("/user/token", { email: signin?.user?.email ? signin?.user?.email : signin?.user?.displayName })
            navigate(LOCATION?.state ? LOCATION.state : "/")

        }
        catch {
            console.log("something wrong")
        }
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

