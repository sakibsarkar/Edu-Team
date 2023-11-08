import "./AssignmentDetails.css";
import Loader from "../../Components/Loader/Loader";
import toast, { LoaderIcon } from "react-hot-toast";
import useAxios from "../../useAxios";
import validUrl from "valid-url";
import { useContext, useEffect, useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const AssignmentDetails = () => {
    const { id } = useParams()
    const [isDataLoading, setIsDataLoading] = useState(true)
    const { user } = useContext(Authcontext)
    const [data, setData] = useState({})
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()
    const axios = useAxios()
    useEffect(() => {
        axios.get(`/assignment/${id}`)
            .then(res => {
                setIsDataLoading(false)
                setData(res.data[0])
            })
            .catch(err => {
                setIsDataLoading(false)
                toast.error("something went wrong")
                navigate("/")
            })
    }, [axios, id, navigate])
    const { _id, title, thumbURL, marks, description, uploadedBy, dueDate, difficulty } = data ? data : {}

    if (showForm) {
        document.body.classList.add("noScroll")
    }
    if (!showForm) {
        document.body.classList.remove("noScroll")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const assignmentLink = form.assignmentLink.value
        const submissionNote = form.SubmissionNote.value
        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth()
        const year = today.getFullYear()
        const submitedBy = user?.email ? user.email : user?.displayName
        const submiterName = user?.displayName ? user.displayName : ""
        const date = `${year}/${month}/${day}`
        const urlPattern = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9\.\-]+(\.[a-zA-Z]{2,}){1,2}(\/\S*)?$/;
        if (!urlPattern.test(assignmentLink)) {
            return toast.error("please enter a valid link")
        }

        if (!validUrl.isUri(assignmentLink)) {
            return toast.error("please give a valid url")
        }


        const data = { assignmentLink, submissionNote, submitedBy, submiterName, submitedOn: date, status: "pending", assignmentName: title, totalMarks: marks, ObtainMarks: "pending", feedback: "" }

        axios.post("/assignment/submit", data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("successfully submitted")
                    navigate("/myassignments")
                    setShowForm(false)
                    document.body.classList.remove("noScroll")
                }
            })
    }
    return (
        <>
            {
                isDataLoading ?
                    <Loader></Loader>
                    :
                    <div className="detailCon">
                        <div className="assignmentImg">
                            <img src={`${thumbURL}`} alt="" />
                        </div>
                        <div className="infos">
                            <h1>{title}</h1>
                            <p className="describeInfo">{description}</p>
                            <p><FaHandPointRight className="text-[#5711ff]" />Marks: <span>{marks}</span></p>
                            <p><FaHandPointRight className="text-[#5711ff]" />Difficulty: <span>{difficulty}</span></p>
                            <p><FaHandPointRight className="text-[#5711ff]" />Due Date: <span>{dueDate}</span></p>

                        </div>
                        <div className="detailsBtn">
                            <button onClick={() => setShowForm(true)}>Take assignment</button>
                        </div>
                        {
                            showForm ?
                                <div className="submitModalCon">
                                    <form onSubmit={handleSubmit}>

                                        <h1>Submit Your Assignment Link</h1>
                                        <div>
                                            <input type="url" name="assignmentLink" placeholder="PDF url" />
                                            <textarea name="SubmissionNote" placeholder="Submition note" />
                                            <button type="submit">Submit</button>
                                        </div>
                                        <div className="cancelForm" onClick={() => setShowForm(false)}><RxCross2 /></div>
                                    </form>

                                </div>
                                :
                                ""
                        }
                    </div>
            }
        </>
    );
};

export default AssignmentDetails;

