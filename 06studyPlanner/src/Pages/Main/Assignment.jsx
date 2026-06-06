import { useNavigate } from "react-router-dom";
import { assignments } from "../../Data/assignments";
import "./Assignment.css";

function Assignment() {
    const navigate = useNavigate();
    const assignments = [
        {
            subject: "Mathematics",
            task: "Complete Chapter 5",
            date: "20 May, 2024",
            progress: 60
        },
        {
            subject: "Physics",
            task: "Numericals Practice",
            date: "22 May, 2024",
            progress: 40
        },
        {
            subject: "React",
            task: "Build Dashboard",
            date: "25 May, 2024",
            progress: 75
        },
        {
            subject: "DBMS",
            task: "ER Diagram",
            date: "28 May, 2024",
            progress: 30
        }
    ];
    return (
        <div className="assignment">
            <div className="assignmentHead">
                <h3>Upcoming Assignments</h3>
                <button className="viewBtn"
                onClick={()=> navigate("/Progress/Progress")}>
                    View All
                </button>
            </div>
            <div className="cards">
                {assignments.slice(0,3).map((item, index) => (
                    <div className="assignmentCard" key={index}>
                        <h3>{item.subject}</h3>
                        <p>{item.task}</p>
                        <p>📅 {item.date}</p>
                        <div className="progressBar">
                            <div
                                className="progress"
                                style={{
                                    width: `${item.progress}%`
                                }}
                            ></div>
                        </div>
                        <p className="progressText">
                            {item.progress}%
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignment;