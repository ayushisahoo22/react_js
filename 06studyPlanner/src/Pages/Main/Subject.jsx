import "./Subject.css";
import { subjects } from "../../Data/subjects";
import { useNavigate } from "react-router-dom";

function Subject() {

    const navigate = useNavigate();

    return (
        <div className="subjectOverview">

            <div className="subjectHeader">
                <h3>Subject Overview</h3>

                <button
                    className="viewBtn"
                    onClick={() => navigate("/Subject/Sub")}
                >
                    View All
                </button>
            </div>

            <div className="subjectCards">

                {subjects.slice(0, 4).map((subject) => (

                    <div className="subjectCard" key={subject.id}>

                        <h3>{subject.name}</h3>

                        <p>{subject.tasks} Tasks</p>

                        <div className="progressBar">
                            <div
                                className="progress"
                                style={{
                                    width: `${subject.progress}%`
                                }}
                            ></div>
                        </div>

                        <p className="progressText">
                            {subject.progress}%
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Subject;