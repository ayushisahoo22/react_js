import "./Progress.css";
import { assignments } from "../Data/assignments";

function Progress() {
    const completed = assignments.filter(
        item => item.progress === 100
    ).length;
    const pending = assignments.length - completed;
    const avgProgress =
        Math.round(
            assignments.reduce(
                (sum, item) => sum + item.progress,
                0
            ) / assignments.length
        );
    return (
        <div className="progressPage">
            <div className="progressHeader">
                <h1>📈 Progress Tracker</h1>
            </div>
            <div className="statsCards">
                <div className="statCard">
                    <h2>{assignments.length}</h2>
                    <p>Total Assignments</p>
                </div>
                <div className="statCard">
                    <h2>{completed}</h2>
                    <p>Completed</p>
                </div>
                <div className="statCard">
                    <h2>{pending}</h2>
                    <p>Pending</p>
                </div>
                <div className="statCard">
                    <h2>{avgProgress}%</h2>
                    <p>Overall Progress</p>
                </div>
            </div>

            <h2 className="sectionTitle">
                Assignment Progress
            </h2>
            <div className="progressCards">
                {assignments.map((item) => (
                    <div
                        className="progressCard"
                        key={item.id}
                    >
                        <h3>{item.subject}</h3>
                        <p>{item.task}</p>
                        <p>
                            Due: {item.date}
                        </p>
                        <div className="progressBar">
                            <div
                                className="progressFill"
                                style={{
                                    width:
                                    `${item.progress}%`
                                }}
                            ></div>
                        </div>
                        <span>
                            {item.progress}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Progress;