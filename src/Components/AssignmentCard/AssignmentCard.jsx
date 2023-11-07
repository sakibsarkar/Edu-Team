import "./AssignmentCard.css";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { LuView } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const AssignmentCard = ({ data }) => {
    // console.log(Object.keys(data).join(","))
    const { user } = useContext(Authcontext)
    const navigate = useNavigate()
    const { _id, title, thumbURL, marks, description, uploadedBy, dueDate, difficulty } = data ? data : {}


    let assignmentName = title.split(" ")
    let name = title
    if (assignmentName.length > 3) {
        name = `${assignmentName[0]} ${assignmentName[1]} ${assignmentName[2]}...`
    }

    const currentUser = user?.email ? user.email : user?.displayName

    const handleUpdateAssignment = (email) => {

        if (!user) {
            return toast.error("please log in first")
        }
        if (email == currentUser) {
            return navigate(`/assignment/update/${_id}`)
        }

        toast.error("you are not eligble to edit this assignment")

    }
    return (
        <div className="assignmentCard">
            <div className="assignmentImgBox">
                <img src={`${thumbURL}`} />
            </div>
            <div className="assignmentInfo">
                <div>
                    <h1>{name}</h1>
                    <p className="mt-[10px]"><span className="font-[700]">Difficulty</span>: {difficulty}</p>
                    <p><span className="font-[700]">Marks</span>: {marks}</p>
                </div>

                <div className="assignmentBtns">
                    {/* <Link to={`/assignment/details/${_id}`}><button>View Assignment</button></Link>
                    <button onClick={() => handleUpdateAssignment(uploadedBy)}>Update Assignment</button> */}

                    <div className="delete">
                        <AiFillDelete className="assignmentIcon" />
                        <p className="whatBtn">Delete Assignment</p>
                    </div>

                    <div className="edit">
                        <MdEdit className="assignmentIcon" />
                        <p className="whatBtn">Update Assignment</p>
                    </div>

                    <Link to={`/assignment/details/${_id}`}>
                        <div className="view">
                            <LuView className="assignmentIcon" />
                            <p className="whatBtn">View Assignment</p>
                        </div></Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;

