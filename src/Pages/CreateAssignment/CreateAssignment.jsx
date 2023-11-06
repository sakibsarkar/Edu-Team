import "react-datepicker/dist/react-datepicker.css";
import "./CreateAssignment.css";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import useAxios from "../../useAxios";
import validUrl from "valid-url";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [submitedDate, setSubmitedDate] = useState("")
    const [difficulty, setDificulty] = useState("Select")
    const { user } = useContext(Authcontext)
    const axios = useAxios()
    const navigate = useNavigate()
    useEffect(() => {
        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth()
        const year = today.getFullYear()
        const date = `${year}/${month}/${day}` //YYY-MM-DD
        setSubmitedDate(date)
    }, [])

    const handleDateChange = (data) => {
        setStartDate(data)
        const day = data.getDate()
        const month = data.getMonth()
        const year = data.getFullYear()
        const date = `${year}/${month}/${day}` //YYY-MM-DD
        setSubmitedDate(date)
    }



    const handleCreateAssignment = (e) => {
        e.preventDefault()

        const form = e.target
        const title = form.title.value
        const thumbURL = form.thumbURL.value
        const marks = form.marks.value
        const description = form.description.value
        const email = user?.email ? user.email : user.displayName


        // url regex
        const urlPattern = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9\.\-]+(\.[a-zA-Z]{2,}){1,2}(\/\S*)?$/;

        // words in title and description
        const titleWords = title.split(" ")
        const descriptionWords = description.split(" ")

        if (!validUrl.isUri(thumbURL)) {
            return toast.error("please give a valid url for Thubnail")
        }


        if (!urlPattern.test(thumbURL)) {
            return toast.error("please give a valid url for Thubnail")
        }


        if (parseInt(marks) > 60) {
            return toast.error("marks shouldn't be more than 60")
        }

        if (marks.includes(".")) {
            return toast.error("marks should be integer number")
        }

        if (titleWords.length < 2) {
            return toast.error("assignment title should have atleast 2 words")
        }

        if (descriptionWords.length < 10) {
            return toast.error("Assignment description should have atleast 10 words")
        }

        if (difficulty == "Select") {
            return toast.error("please select the defficulty level of the assignment")
        }


        const assignment = { title, thumbURL, marks: parseInt(marks), description, uploadedBy: email, dueDate: submitedDate, difficulty: difficulty }
        axios.post("/user/assignment/post", assignment)
            .then(res => {
                toast.success("success")
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="createAssignmentCon">
            <div className="createNew">
                <h1>Create new Assignment</h1>
            </div>

            <img src="https://i.ibb.co/D7TgNMD/assignment-removebg-preview.png" alt="" />

            <div>
                <form className="assignmentCreateform" onSubmit={handleCreateAssignment}>
                    <div className="assignmentSubmitRow">
                        <p>Title</p>
                        <input required name="title" type="text" placeholder="Title" />
                    </div>

                    <div className="assignmentSubmitRow">
                        <p>Thubnail</p>
                        <input required type="text" placeholder="Thubnail Url" name="thumbURL" />
                    </div>
                    <div className="bros">
                        <div className="defficulty">
                            <p>Difficulty</p>
                            <select value={difficulty} onChange={(e) => setDificulty(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div>
                            <p>Marks</p>
                            <input required type="number" name="marks" placeholder="Marks (max- 60)" />
                        </div>

                        <div>
                            <p>Due Date</p>
                            <DatePicker className="cursor-pointer" selected={startDate} onChange={(data) => handleDateChange(data)} />
                        </div>

                    </div>

                    <div className="assignmentSubmitRow">
                        <p>Description</p>
                        <textarea required name="description" placeholder="Description" />
                    </div>


                    <button type="submit">Submit</button>

                </form>
            </div>

            <div className="whiteWave">
                <img src="https://i.ibb.co/ZY7GQmt/wave.png" alt="" />
            </div>
        </div>
    );
};

export default CreateAssignment;
