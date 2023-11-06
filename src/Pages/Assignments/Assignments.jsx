import "./Assignment.css";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import Loader from "../../Components/Loader/Loader";
import useAxios from "../../useAxios";
import { useCallback, useEffect, useState } from "react";
import { BsClipboardPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Assignments = () => {
    const [isDataLoading, setsDataLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [difficulty, setDificulty] = useState("")
    const [displayLevel, setDisplayLevel] = useState("Defficulty")
    const [totalData, setTotalData] = useState(0)
    const [limit, setLimit] = useState(6) //item per page limit
    const [totalButton, setTotalButton] = useState(1)
    const [assignmentsData, setAssignmentsData] = useState([])
    const axios = useAxios()


    // const defineNumbersOfButton = useCallback(() => {
    //     if (totalData > limit) {
    //         const buttons = Math.ceil(totalData / limit);
    //         setNumberOfButtons(buttons);
    //     } else {
    //         setNumberOfButtons(1);
    //     }
    // }, [totalData, limit, setNumberOfButtons]);

    useEffect(() => {


        axios.get(`/assignments?limit=${limit}&page=${currentPage - 1}&level=${difficulty}`)
            .then(res => {
                setAssignmentsData(res.data.result)
                setTotalData(res.data.total)
                setsDataLoading(false)
                setTotalButton(Math.ceil(res.data.total / limit))


            })
        return



    }, [currentPage, difficulty, axios, limit])






    const handleChangeDefficulty = (e) => {

        const data = e.target.value
        if (data == difficulty) {
            return
        }

        setsDataLoading(true)
        if (data == "") {
            setDisplayLevel("Defficulty")
            setDificulty("")

            return
        }

        setDisplayLevel(data)
        setDificulty(data)
    }

    return (
        <div className="assignmentWrapper">
            {/* https://i.ibb.co/DW4cLb7/file-20210831-13-5gz37i.jpg */}
            <div className="assignmentsBanner">
                <h1>Assignments</h1>
                <p>Lets submit your assignment <span className="text-[#b2ea00]">faster</span> & <span className="text-[#ffb43f]">Easier</span> with EduTeam</p>
                <Link to={"/createAssignments"}><button>Create <BsClipboardPlus /></button></Link>
            </div>


            <div className="allAssignmentsContainer">

                <div className="dataHeading">
                    <h1>Available Assignments</h1>
                </div>
                <div className="filter">
                    <div>
                        <p>Filter :</p>
                        <select value={displayLevel} onChange={handleChangeDefficulty}>
                            <option value="">All</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                            <option value="Defficulty" className="hidden">Defficulty</option>
                        </select>
                    </div>


                </div>

                {
                    isDataLoading ?
                        <div className="loading">
                            <img src="https://i.ibb.co/61w665S/65ba488626025cff82f091336fbf94bb.gif" />
                        </div> :


                        <>

                            {
                                totalData ?
                                    <div className="assignments">
                                        {
                                            isDataLoading ? "" :
                                                <>
                                                    {
                                                        assignmentsData?.map(data => <AssignmentCard key={data._id} data={data}></AssignmentCard>)
                                                    }
                                                </>
                                        }

                                    </div>
                                    :

                                    <div className="notFound">
                                        <img src="https://i.ibb.co/PDhKy3Q/data-search-not-found-illustration-concept-vector-prev-ui.png" alt="" />
                                        <p>No Assignment Found</p>
                                    </div>
                            }

                        </>

                }


            </div>

            {
                totalData ?
                    <div className="pagenation">
                        {
                            Array(totalButton).fill(0).map((item, index) => <button
                                onClick={() => {
                                    setCurrentPage(index + 1)
                                    setsDataLoading(true)
                                }}
                                className={currentPage == index + 1 ? "currentPage" : "pageButton"}
                                key={index}>{index + 1}
                            </button>)
                        }
                    </div>
                    :
                    ""
            }




        </div>
    );
};

export default Assignments;