import "./FaqBox.css";
import { useContext } from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FaqBox = ({ faqData, shouldOpen, setShouldOpen, index }) => {



    return (
        <div className="box">
            <div className="question" onClick={() => setShouldOpen(index)}>
                <p>{faqData?.question}</p>
                {shouldOpen === index ? <MdKeyboardArrowDown className="arrow" /> : <MdKeyboardArrowUp className="arrow" />}
            </div>


            <div className="answer" style={shouldOpen === index ? { height: "fit-content" } : { height: "0px", padding: "0" }}>
                <p>{faqData?.answer}</p>
            </div>


        </div>
    );
};

export default FaqBox;