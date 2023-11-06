import "./MyAssignmentCards.css";

const MyAssignmentCards = ({ assignments }) => {
    const { _id, assignmentLink, submissionNote, submitedBy, submiterName, submitedOn, status, assignmentName } = assignments ? assignments : {}


    return (
        <div className="myAssignmentCard">
            <p><span>Submitted Link</span> : <a href={`${assignmentLink}`}>{assignmentLink}</a></p>
            <p><span>Note</span> : {submissionNote}</p>
            <p><span>Submitted On</span> : {submitedOn}</p>
            <p><span>Status</span> : {status}</p>
        </div>
    );
};

export default MyAssignmentCards;