import "./Quick.css"
function Quick(){
    return(
        <div className="quickActions" style={{marginTop:"10px"}}>
            <h3 style={{marginLeft:"15px"}}>Quick Actions</h3>
            <div className="actionCards">
                <div className="actionCard">
                    ➕ Add Task
                </div>
                <div className="actionCard">
                    📚 Add Subject
                </div>
                <div className="actionCard">
                    ⏱ Study Timer
                </div>
                <div className="actionCard">
                    📝 Add Note
                </div>
            </div>
        </div>
    )
}
export default Quick