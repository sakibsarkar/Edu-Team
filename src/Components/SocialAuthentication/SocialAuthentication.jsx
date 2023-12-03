import "./SocialAuthentication.css";
import useAxios from "../../Hooks & functions/useAxios";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const SocialAuthentication = ({ LOCATION }) => {

    const { googleAuthentication, gitHubAuthentication, user } = useContext(Authcontext)
    const axios = useAxios()

    const navigate = useNavigate()

    const mediaLogin = async (media) => {
        try {
            const { user } = await media()
            await axios.post("/user/token", { email: user?.email ? user?.email : user?.displayName })
            const userObj = { name: user?.displayName, email: user?.email ? user.email : "no email", role: "user" }
            await axios.put("/new/user", userObj)
            navigate(LOCATION?.state ? LOCATION.state : "/")

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="socialAuthCon">
            <div className="socialBox" onClick={() => mediaLogin(googleAuthentication)}>
                <FcGoogle></FcGoogle>
                <p>Google</p>
            </div>

            <div className="socialBox" onClick={() => mediaLogin(gitHubAuthentication)}>
                <FaGithub></FaGithub>
                <p>GitHub</p>
            </div>
        </div>
    );
};

export default SocialAuthentication;

