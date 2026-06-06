import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./RightPanel.css";
import { tasks } from "../Data/task";
import { useNavigate } from "react-router-dom";

function RightPanel() {
    const navigate = useNavigate();

    const streakData = {
        currentStreak: 12,
        bestStreak: 18
    };

    return (
        <div className="rightPanel">

            <div className="calendarCard">
                <Calendar />
            </div>

            <div className="taskCard">

                <div className="taskHead">
                    <h2>Today's Tasks</h2>

                    <button
                        className="viewBtn"
                        onClick={() => navigate("/Schedule/Schedule")}
                    >
                        View All
                    </button>
                </div>

                {tasks.slice(0, 3).map((task) => (
                    <div className="taskItem" key={task.id}>

                        <input
                            type="checkbox"
                            checked={task.completed}
                            readOnly
                        />

                        <span>{task.title}</span>

                    </div>
                ))}

            </div>

            <div className="streakCard">

                <div className="fireEmoji">
                    🔥
                </div>

                <h1>
                    {streakData.currentStreak} Days
                </h1>

                <p>
                    Best Streak: {streakData.bestStreak} Days
                </p>

                <p className="streakText">
                    Keep it up!
                </p>

            </div>

        </div>
    );
}

export default RightPanel;