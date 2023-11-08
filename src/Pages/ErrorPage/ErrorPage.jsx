import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="errorCon">
            <img src="https://i.ibb.co/gWxQkhZ/404-error-lost-space-concept-illustration-114360-7901.jpg" />
            <Link to={"/"}><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;