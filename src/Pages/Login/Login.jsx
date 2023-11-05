import "./Login.css";
import SocialAuthentication from "../../Components/SocialAuthentication/SocialAuthentication";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const { user } = useContext(Authcontext)
    if (user) {
        Navigate("/")
    }
    return (
        <div className="authContainer">
            <div className="authWrapper">
                <div className="itemContainer">
                    <form className="authForm">
                        <div className="inputCon">
                            <h1>Email</h1>
                            <input type="email" />
                        </div>
                        <div className="inputCon">
                            <h1>Passowrd</h1>
                            <input type="password" />
                        </div>

                        <button type="submit">Log In</button>
                    </form>

                    <SocialAuthentication></SocialAuthentication>
                </div>
                <img src="https://i.ibb.co/wzWXS9T/login.jpg" />
            </div>

        </div>
    );
};

export default Login;