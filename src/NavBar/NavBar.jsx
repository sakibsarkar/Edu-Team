import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaNotesMedical } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { TbNotesOff } from "react-icons/tb";
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
                    <li className=""><NavLink className={"navLinks"} to={"/assignments"}><GrNotes />Assignments</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/create-assignments"}><FaNotesMedical /> Create Assignment</NavLink></li>
                    <li className=""><NavLink className={"navLinks"} to={"/my-assignments"}><TbNotesOff /> My Assignments</NavLink></li>
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