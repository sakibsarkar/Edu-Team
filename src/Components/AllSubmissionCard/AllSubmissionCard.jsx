import "./AllSubmissionCard.css";
import toast from "react-hot-toast";
import useAxios from "../../useAxios";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AllSubmissionCard = ({ data }) => {
    const { _id, assignmentLink, submissionNote, submitedBy, submiterName, submitedOn, status, assignmentName, totalMarks, ObtainMarks } = data

    const [showPreview, SetShowPreview] = useState(false)
    const [showGiveMark, setShowGiveMark] = useState(false)
    const axios = useAxios()


    const handleGiveMark = (e) => {
        e.preventDefault()
        const form = e.target
        const givenMarks = parseInt(form.Obtainmark.value)
        const feedback = form.feedback.value

        if (givenMarks > parseInt(totalMarks)) {
            return toast.error(`give a mark between number ${totalMarks}`)
        }

        const data = { feedback, givenMarks }
        axios.put(`/giveMark/${_id}`, data)

    }


    return (
        <>

            <div className="pendingSubmissionCardCon">
                <div className="submissionInfo">
                    <p><span>Title</span>: {assignmentName}</p>
                    <p><span>Assignment Marks :</span>{assignmentName}</p>
                    <p><span>Examinee :</span> {submiterName}</p>
                </div>

                <div className="btnDiv">
                    <button onClick={() => SetShowPreview(true)}>Preview</button>
                    <button className="giveMarkBtn" onClick={() => setShowGiveMark(true)}>Give Mark</button>
                </div>

            </div>

            {
                showPreview ?
                    <div className="preViewCon">
                        <div className="previewHolder">
                            <iframe src={assignmentLink} width="100%" height="500px" />
                            <div className="cancelPreView" onClick={() => SetShowPreview(false)}>
                                <RxCross2 />
                            </div>
                        </div>
                    </div>
                    : ""
            }


            {
                showGiveMark ?
                    <div className="giveMarkCon">
                        <form onSubmit={handleGiveMark}>
                            <div className="cancleGivingMark" onClick={() => setShowGiveMark(false)}>
                                <RxCross2 />
                            </div>
                            <p><span>Submited link:</span> <a href={assignmentLink}>{assignmentLink}</a></p>
                            <p><span>Examinee Note:</span> {submissionNote}</p>

                            <div className="markActivity">
                                <div className="markBox">
                                    <input type="number" name="Obtainmark" placeholder="Giv Marks" required /> <p>/ {totalMarks}</p>
                                </div>
                                <textarea name="feedback" placeholder="Give feedback"></textarea>
                            </div>

                        </form>
                    </div>
                    :
                    ""
            }

        </>
    );
};

export default AllSubmissionCard;