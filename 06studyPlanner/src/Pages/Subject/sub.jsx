import "./Sub.css";
import { subjects } from "../../Data/subjects";

function Sub() {
    return (
        <div className="subjectsPage">
            <div className="subjectsHeader">
                <h1>📚 My Subjects</h1>
                <button className="addBtn">+ Add Subject</button>
            </div>

            <div className="statsContainer">
                <div className="statCard">
                    <h2>{subjects.length}</h2>
                    <p>Total Subjects</p>
                </div>

                <div className="statCard">
                    <h2>62%</h2>
                    <p>Average Progress</p>
                </div>

                <div className="statCard">
                    <h2>43</h2>
                    <p>Topics Completed</p>
                </div>
            </div>

            <div className="subjectsGrid">
                {subjects.map((subject, index) => (
                    <div className="subjectCard" key={index}>
                        <h2>{subject.name}</h2>

                        <div className="subjectInfo">
                            <p>Total Topics: {subject.tasks}</p>
                            <p>
                                Completed:{" "}
                                {Math.floor(
                                    (subject.tasks * subject.progress) / 100
                                )}
                            </p>
                            <p>
                                Remaining:{" "}
                                {subject.tasks -
                                    Math.floor(
                                        (subject.tasks * subject.progress) / 100
                                    )}
                            </p>
                        </div>

                        <div className="progressBar">
                            <div
                                className="progress"
                                style={{
                                    width: `${subject.progress}%`,
                                }}
                            ></div>
                        </div>

                        <h3>{subject.progress}% Complete</h3>

                        <button className="detailsBtn">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sub;