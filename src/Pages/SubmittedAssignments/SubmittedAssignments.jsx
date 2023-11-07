import "@react-pdf-viewer/core/lib/styles/index.css";
import useAxios from "../../useAxios";
import { useEffect, useState } from "react";

// import { Document, Page } from "react-pdf";
// import pdf from "./pdf.pdf";
// import { Viewer, Worker } from "@react-pdf-viewer/core";

const SubmittedAssignments = () => {
    const axios = useAxios()



    useEffect(() => {
        axios.get("/users/submissions")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [axios]

    


    )
    return (
        <div>




            <iframe src="" width="500px" height="500px" />






















            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="https://publuu.com/flip-book/292962/681630" />;
            </Worker> */}
        </div>
    );

}
export default SubmittedAssignments