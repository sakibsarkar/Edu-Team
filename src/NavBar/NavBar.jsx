import "./NavBar.css";
import useAxios from "../useAxios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaNotesMedical } from "react-icons/fa";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(Authcontext)
    const [showUserDetails, setShowUserDetails] = useState(false)
    const [showDrawer, SetShowDrawer] = useState(false)

    const axios = useAxios()


    const handleLogout = async () => {
        try {
            const out = await logOut()
            axios.post("/logout")
        }
        catch {
            console.log("something error while logging out")
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (showUserDetails) {
                setShowUserDetails(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showUserDetails])
    return (
        <div className="navWrapper">
            <nav>
                <div>
                    <img className="logo" src="https://i.ibb.co/mHztTCN/EduLogo.png" />
                </div>
                <ul>
                    <li className=""><NavLink className={"navLinks"} to={"/"}><AiOutlineHome /> Home</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/assignments"}><CgNotes />Assignments</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/createAssignments"}><FaNotesMedical /> Create Assignment</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/myAssignments"}><BsFillFilePersonFill /> My Assignments</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/subAssignments"}><PiLinkSimpleHorizontalBold />Submitted Assignment</NavLink></li>
                </ul>

                {/* user dynamic section */}

                {
                    user ? <div className="userContainer">
                        <div className="userProfile" onMouseEnter={() => setShowUserDetails(true)}>
                            <img src={`${user?.photoURL}`} alt="" />
                        </div>

                        {
                            showUserDetails ? <div className="userActivity">

                                <div className="crossUser" onClick={() => setShowUserDetails(false)}><RxCross2 /></div>
                                <p>{user?.displayName}</p>
                                <div className="userLinks">
                                    <Link to={'/'}>Profile</Link>
                                    <Link to={'/myAssignments'}>My Assignments</Link>
                                    <Link to={'/createAssignments'}>Create Assignment</Link>
                                    <button onClick={handleLogout}>Log Out</button>
                                </div>
                            </div> : ""
                        }
                    </div> : <div className="login">
                        <Link to={"/login"}>Login</Link>
                        <p>|</p>
                        <Link to={"/signup"}>Register</Link>
                    </div>
                }


                <div className="menuIcon" onClick={() => SetShowDrawer(true)}>
                    <AiOutlineMenu />
                </div>

                {
                    showDrawer ? <div className="drawer">
                        <div className="drawerTop" onClick={() => SetShowDrawer(false)}><RxCross2 /></div>

                        {
                            user ?
                                <div className="drawerUser">
                                    <img src={`${user?.photoURL}`} alt="" />

                                </div> :
                                ""
                        }

                        <div className="links">
                            {user ? <h1>{user?.displayName}</h1> : ""}
                            {user ? <button onClick={handleLogout} className="drawerLogoutBtn">Log Out</button> : ""}

                            <div className="drawerLinks">
                                <NavLink className={"navLinks"} to={"/"}><AiOutlineHome />Home</NavLink>
                                <NavLink className={"navLinks"} to={"/assignments"}><CgNotes />Assignments</NavLink>
                                <NavLink className={"navLinks"} to={"/createAssignments"}><FaNotesMedical /> Create Assignment</NavLink>
                                <NavLink className={"navLinks"} to={"/myAssignments"}><BsFillFilePersonFill /> My Assignments</NavLink>
                                <NavLink className={"navLinks"} to={"/subAssignments"}><PiLinkSimpleHorizontalBold />Submitted Assignment Links</NavLink>
                                {user ? "" : <NavLink className={"navLinks"} to={"/login"}>Log in</NavLink>}
                                {user ? "" : <NavLink className={"navLinks"} to={"/register"}>register</NavLink>}
                            </div>
                        </div>

                    </div>
                        : ""
                }
            </nav>
        </div >
    );
};

export default NavBar;