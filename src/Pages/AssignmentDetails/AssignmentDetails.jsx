import "./AssignmentDetails.css";
import useAxios from "../../useAxios";
import { useEffect, useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";

const AssignmentDetails = () => {
    const { id } = useParams()
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [data, setData] = useState({})
    const [showForm, setShowForm] = useState(false)
    const axios = useAxios()
    useEffect(() => {
        axios.get(`/assignment/${id}`)
            .then(res => {
                setIsDataLoading(false)
                setData(res.data[0])
            })
    }, [axios, id])
    const { _id, title, thumbURL, marks, description, uploadedBy, dueDate, difficulty } = data ? data : {}

    if (showForm) {
        document.body.style.overflow = "hidden"
    }
    if (!showForm) {
        document.body.style.overflow = "visible"
    }
    return (
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
                        <form>

                            <h1>Submit Your Assignment Link</h1>
                            <div>
                                <input type="url" name="assignmentLink" placeholder="PDF url" />
                                <textarea name="SubmitionNote" placeholder="Submition note" />
                                <button type="submit">Submit</button>
                            </div>
                            <div className="cancelForm" onClick={() => setShowForm(false)}><RxCross2 /></div>
                        </form>

                    </div>
                    :
                    ""
            }
        </div>
    );
};

export default AssignmentDetails;

