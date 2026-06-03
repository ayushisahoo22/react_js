import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./RightPanel.css"
function RightPanel(){
     return(
        <div className="rightPanel">
            <div className="calendarCard">
                <Calendar />
            </div>
            <div className="taskCard">
                <div className="taskHead" style={{display:"flex",alignItems:"row",gap:"50px"}}>
                    <h2>Today's Tasks</h2>
                    <button style={{
                        backgroundColor:"Black",
                        border:"none",
                        padding:"5px",
                        color:"white",
                        borderRadius:"5px"
                    }}>Add</button>
                </div>
                <div className="taskItem">
                    <input type="checkbox"/>
                    <span>React Revision</span>
                </div>
                <div className="taskItem">
                    <input type="checkbox"/>
                    <span>DSA Practice</span>
                </div>
                <div className="taskItem">
                    <input type="checkbox"/>
                    <span>DBMS Notes</span>
                </div>
            </div>
            <div className="streakCard">
                <div style={{fontSize:"50px"}}>🔥</div>
                    <h1>12 Days</h1>
                    <p>Best Streak: 18 Days</p>
                    <p>Keep it up!</p>
                </div>
        </div>
    )
}
export default RightPanel