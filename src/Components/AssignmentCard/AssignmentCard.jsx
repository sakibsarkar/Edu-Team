import "./AssignmentCard.css";
import toast from "react-hot-toast";
import useAxios from "../../Hooks & functions/useAxios";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { LuView } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const AssignmentCard = ({ data, reFetch, setReFetch }) => {
    // console.log(Object.keys(data).join(","))
    const { user } = useContext(Authcontext)
    const navigate = useNavigate()
    const { _id, title, thumbURL, marks, description, uploadedBy, dueDate, difficulty } = data ? data : {}
    const axios = useAxios()

    let assignmentName = title.split(" ")
    let name = title
    if (assignmentName.length > 3) {
        name = `${assignmentName[0]} ${assignmentName[1]} ${assignmentName[2]}...`
    }

    const currentUser = user?.email ? user.email : user?.displayName

    const handleUpdateAssignment = (email) => {

        if (!user) {
            toast.error("please log in first")
            return navigate(`/assignment/update/${_id}`)
        }


        if (email == currentUser) {
            return navigate(`/assignment/update/${_id}`)
        }

        toast.error("you are not eligible to edit this assignment")

    }

    const handleDeleAssignment = (email) => {
        console.log(email, currentUser)

        if (!user) {
            return toast.error("Log in to continue")
        }

        if (email !== currentUser) {
            return toast.error("you are not eligible to delete this assignment")
        }


        axios.delete(`delete/assignment/${_id}`)
            .then(res => {
                toast.success("successfully deleted")
                setReFetch(!reFetch)
            })
            .catch(err => {
                toast.error("something wrong! please re-Login")
            })


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

                    <div className="delete" onClick={() => handleDeleAssignment(uploadedBy)}>
                        <AiFillDelete className="assignmentIcon" />
                        <p className="whatBtn">Delete Assignment</p>
                    </div>

                    <div className="edit" onClick={() => handleUpdateAssignment(uploadedBy)}>
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

