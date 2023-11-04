import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaNotesMedical } from "react-icons/fa";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navWrapper">
            <nav>
                <div>
                    <img src="https://i.ibb.co/mHztTCN/EduLogo.png" />
                </div>
                <ul>
                    <li className=""><NavLink className={"navLinks"} to={"/"}><AiOutlineHome /> Home</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/assignments"}><CgNotes />Assignments</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/create-assignments"}><FaNotesMedical /> Create Assignment</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/my-assignments"}><BsFillFilePersonFill /> My Assignments</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/my-assignments"}><PiLinkSimpleHorizontalBold />Submitted Assignment Links</NavLink></li>
                </ul>

                {/* user dynamic section */}

                <div className="login">
                    <Link to={"/login"}>Login</Link>
                    <p>|</p>
                    <Link to={"/signup"}>Register</Link>
                </div>
            </nav>
        </div >
    );
};

export default NavBar;