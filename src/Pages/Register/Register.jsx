import "./Register.css";
import SocialAuthentication from "../../Components/SocialAuthentication/SocialAuthentication";
import toast from "react-hot-toast";
import useAxios from "../../useAxios";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const { createAccountWithEmail, setWaitForUser, setToast, naviGateLocation } = useContext(Authcontext)
    const axios = useAxios()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.fName.value
        const lastName = form.lName.value

        // regex
        const capital = /[A-Z]/;
        const special = /[\W_]/

        // main data
        const userFullName = `${firstName} ${lastName}`
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value
        const confirmPass = form.confirmPass.value

        if (password !== confirmPass) {
            toast.error("password didn't matched")
            return
        }

        if (password.length < 6) {
            toast.error("password should be atleast 6 character")
            return
        }

        if (!capital.test(password)) {
            toast.error("pssword should contain at least on capital letter")
            return
        }

        if (!special.test(password)) {
            toast.error("pssword should contain at least on special character")
            return
        }

        const loadingToast = toast.loading("trying to create account")
        createAccountWithEmail(email, password)
            .then(res => {


                updateProfile(res.user, {
                    displayName: userFullName,
                    photoURL: photoUrl
                })
                    .then(result => {
                        setWaitForUser(false)
                        axios.post("/user/token", { email: res?.user?.email })
                            .then(res => {
                                toast.dismiss(loadingToast)
                                setToast(toast.success("successfuly account created"))
                                navigate(naviGateLocation?.state ? naviGateLocation?.state : "/")
                            })

                    })


            })
            .catch(err => {
                toast.dismiss(loadingToast)
                toast.error("email already in use")
            })





    }
    return (
        <div className="registerCon">
            <form className="registerForm" onSubmit={handleRegister}>
                <h1>Register</h1>
                <div className="row">
                    <p>Name</p>
                    <div className="brothers">
                        <input required type="text" name="fName" placeholder="First Name" />
                        <input required type="text" name="lName" placeholder="Last Name" />
                    </div>
                </div>


                <div className="row">
                    <p>Image URL</p>
                    <input required type="url" name="photoUrl" placeholder="Image url" />
                </div>
                <div className="row">
                    <p>Email</p>
                    <input required type="email" name="email" placeholder="example@gmail.com" />
                </div>


                <div className="row relative">
                    <p>Password</p>
                    <input required type={showPass ? "text" : "password"} name="password" placeholder="Your password" />
                    <div className="eye" onClick={() => setShowPass(!showPass)}>{showPass ? <AiFillEyeInvisible /> : <AiFillEye />}</div>
                </div>

                <div className="row">
                    <p>Confirm Password</p>
                    <input required type="password" name="confirmPass" placeholder="Confrim Your password" />

                </div>
                <button type="submit">Register</button>
                <h2>Already have an account? <Link className="text-[#743afd] underline cursor-pointer" to={"/login"}>Login</Link></h2>
                <SocialAuthentication LOCATION={naviGateLocation}></SocialAuthentication>
            </form>
        </div>
    );
};

export default Register;