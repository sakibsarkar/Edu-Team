import "./SubmittedAssignments.css";
import AllSubmissionCard from "../../Components/AllSubmissionCard/AllSubmissionCard";
import toast from "react-hot-toast";
import useAxios from "../../Hooks & functions/useAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import pdf from "./pdf.pdf";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import { Document, Page } from "react-pdf";

const SubmittedAssignments = () => {
    const axios = useAxios()
    const [data, setData] = useState([])
    const [refetch, setReFertch] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        axios.get("/users/submissions")
            .then(res => setData(res.data))
            .catch(err => {
                toast.error("something went Wrong")
                navigate("/")
            })
    }, [axios, refetch, navigate]
    )







    return (
        <div className="allWraper">
            <h1>Pending Assignments</h1>


            {


                data.length > 0 ?


                    < div className="pendingSubmissionCon">
                        {
                            data?.map(data => <AllSubmissionCard
                                key={data._id}
                                data={data}
                                refetch={refetch}
                                setReFertch={setReFertch}
                            ></AllSubmissionCard>)
                        }
                    </div>

                    :

                    <div className="noPending">
                        <img src="https://i.ibb.co/QrhB74h/trendy-flat-of-project-complete-vector-43524971-removebg-preview.png" />
                        <h1>There is no pending assignments</h1>
                    </div>



            }








            {/* 
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="https://drive.google.com/file/d/1DzOK6uMeskA3KG1rx3Mw4-GJDjcKfekd/view?usp=sharing" />;
            </Worker> */}
        </div >
    );

}
export default SubmittedAssignments