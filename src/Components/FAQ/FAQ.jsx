import "./FAQ.css";
import FaqBox from "../FaqBox/FaqBox";
import { useEffect, useState } from "react";

const FAQ = () => {
    const [faq, setFaq] = useState([])

    useEffect(() => {
        fetch("faq.json")
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])
    return (
        <div className="FAQ">

            <div className="faqHeading">
                <h1>FAQ</h1>
                <p>Frequently Asked <span className="text-[#fd5daa]">Questions</span></p>
            </div>


            <div className="holder">
                <div className="faqs">
                    {
                        faq?.map((item, index) => <FaqBox key={index} faqData={item}></FaqBox>)
                    }
                </div>

                <img src="https://i.ibb.co/WBYVfFs/frequently-asked-questions-4550311-3779215.png" className="faqImg" />
            </div>


        </div>
    );
};

export default FAQ;