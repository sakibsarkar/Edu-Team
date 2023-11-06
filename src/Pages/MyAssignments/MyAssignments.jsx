import "./MyAssignments.css";
import { useContext } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const MyAssignments = () => {

    const { user } = useContext(Authcontext)
    return (
        <div>
            <div>
                <p>your created Assignments</p>
            </div>

        </div>
    );
};

export default MyAssignments;