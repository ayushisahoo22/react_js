import "./Schedule.css";
import { tasks } from "../Data/task";

function Schedule() {
    return (
        <div className="schedulePage">

            <div className="scheduleHeader">
                <h1>📅 Study Schedule</h1>

                <button className="addBtn">
                    + Add Schedule
                </button>
            </div>

            <div className="todayCard">
                <h2>Today's Study Plan</h2>

                <div className="todayTasks">
                    {tasks.slice(0, 3).map((task) => (
                        <p key={task.id}>
                            📚 {task.title}
                        </p>
                    ))}
                </div>
            </div>

            <div className="sectionHeader">
                <h2>Upcoming Sessions</h2>
            </div>

            <div className="scheduleCards">
                {tasks.map((task) => (
                    <div className="scheduleCard" key={task.id}>

                        <h3>{task.title}</h3>

                        <p className="day">
                            {task.day}
                        </p>

                        <div className="timeBadge">
                            {task.time}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Schedule;