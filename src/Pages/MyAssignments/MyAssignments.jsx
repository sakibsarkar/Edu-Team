import "./MyAssignments.css";
import MyAssignmentCards from "../MyAssignmentCards/MyAssignmentCards";
import toast from "react-hot-toast";
import useAxios from "../../../src/useAxios";
import { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const MyAssignments = () => {

    const { user } = useContext(Authcontext)
    const userEmail = user?.email ? user.email : user.displayName
    const axios = useAxios()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/mySubmission/${userEmail}`)
            .then(res => {
                setIsLoading(false)
                setData(res.data)
            })
            .catch(err => {
                toast.error("something wrong")
                navigate("/")

            })

    }, [axios, userEmail, navigate])
    return (
        <div className="myAssignmentContainer">
            <div className="head">
                <p>your Submitted Assignments</p>
            </div>

            {
                isLoading ?
                    <div className="h-[70vh] flex justify-center items-center">
                        <Oval></Oval>
                    </div>
                    :
                    <div className="creationWrapper">
                        <div className="myCreations">
                            {
                                data?.map((assignments) => <MyAssignmentCards key={assignments._id} assignments={assignments}></MyAssignmentCards>)
                            }

                        </div>
                    </div>
            }

        </div>
    );
};

export default MyAssignments;