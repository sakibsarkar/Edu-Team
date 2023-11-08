import "./UpdateAssignment.css";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import useAxios from "../../useAxios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const UpdateAssignment = () => {
    const loaderData = useLoaderData()
    const { _id, title, thumbURL, marks, description, uploadedBy, dueDate, difficulty } = loaderData[0]
    const [level, setLevel] = useState(difficulty)
    console.log(loaderData)
    const [date, setDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()
    const axios = useAxios()


    const { user } = useContext(Authcontext)
    const userIdentity = user?.email ? user.email : user.displayName

    useEffect(() => {
        if (userIdentity !== uploadedBy) {
            toast.error("You are not eligible to update this assignment")
            return navigate("/")
        }
    }, [navigate, userIdentity, uploadedBy])


    const handleDateChange = (data) => {
        setStartDate(data)
        const day = data.getDate()
        const month = data.getMonth()
        const year = data.getFullYear()
        const date = `${year}/${month}/${day}` //YYY-MM-DD
        setDate(date)
    }


    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const thumbURL = form.thumbURL.value
        const marks = parseInt(form.marks.value)
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
                    <DatePicker selected={startDate} onChange={(data) => handleDateChange(data)}></DatePicker>
                    <select defaultValue={difficulty} onChange={(e) => setLevel(e.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <textarea name="description" defaultValue={description}></textarea>


                <button type="submit" className="submit">submit</button>
            </form>
        </div>
    );
};

export default UpdateAssignment;

