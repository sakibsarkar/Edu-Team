import "./UpdateAssignment.css";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import useAxios from "../../useAxios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateAssignment = () => {
    const loaderData = useLoaderData()
    const { _id, title, thumbURL, marks, description, uploadedBy, dueDate, difficulty } = loaderData[0]
    const [level, setLevel] = useState(difficulty)
    console.log(loaderData)
    const [date, setDate] = useState(new Date())
    const navigate = useNavigate()
    const axios = useAxios()
    if (loaderData.messege) {
        toast.error("somethingawent wrong")
        navigate("/")
        return
    }


    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const thumbURL = form.thumbURL.value
        const marks = form.marks.value
        const description = form.description.value
        const updatedData = { title, thumbURL, marks, description, dueDate: date, difficulty: level }
        axios.put(`/assignment/update/${_id}`, updatedData)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success("successfuly updated")
                    navigate("/assignments")
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="updateContainer">
            <h1>Update Your Assignment</h1>
            <form onSubmit={handleUpdate}>

                <input name="title" type="text" defaultValue={title} />
                <input name="thumbURL" type="url" defaultValue={thumbURL} />
                <input name="marks" type="number" defaultValue={marks} />
                <div className="siblings">
                    <DatePicker selected={date} onChange={(data) => setDate(data)}></DatePicker>
                    <select defaultValue={difficulty} onChange={(e) => setLevel(e.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <textarea name="description" defaultValue={description}></textarea>


                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default UpdateAssignment;

