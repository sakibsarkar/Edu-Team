import "./Login.css";
import SocialAuthentication from "../../Components/SocialAuthentication/SocialAuthentication";
import toast from "react-hot-toast";
import useAxios from "../../useAxios";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const { setNaviGateLocation, loginWithEmail,
        setToast } = useContext(Authcontext)
    const axios = useAxios()
    const LOCATION = useLocation()

    setNaviGateLocation(LOCATION)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = e.target
        loginWithEmail(email.value, password.value)
            .then(res => {
                setToast(toast.success("Successfuly loged in"))
                axios.post("/user/token", { email: res?.user?.email })
                navigate(LOCATION.state ? LOCATION.state : "/")
            })
            .catch(err => setToast(toast.error("invalid email or password")))

    }
    return (
        <div className="authContainer">
            <div className="authWrapper">
                <div className="itemContainer">
                    <form className="authForm" onSubmit={handleLogin}>
                        <div className="inputCon">
                            <h1>Email</h1>
                            <input type="email" required name="email" placeholder="Email" />
                        </div>
                        <div className="inputCon">
                            <h1>Passowrd</h1>
                            <input type="password" required name="password" placeholder="Your Password" />
                        </div>
                        <h1 className="authPageToggle">New here? <Link to={"/signup"}>Register</Link></h1>
                        <button type="submit">Log In</button>
                    </form>

                    <SocialAuthentication LOCATION={LOCATION}></SocialAuthentication>
                </div>
                <img src="https://i.ibb.co/wzWXS9T/login.jpg" />
            </div>

        </div>
    );
};

export default Login;