import {BrowserRouter, Link} from "react-router-dom";
import "./SideBar.css";
import sidebar from "../Assets/sidebar.png"
function SideBar(){
    return(
        <BrowserRouter>
            <nav className="sidebar">
                <h2 style={{
                    display:"flex",
                    justifyContent:"center", 
                    marginTop:"13px"}}
                    > 📚 Study Planner</h2>
                    <div className="sidebarMenu">
                        <Link to="/" className="linkStyle">Dashboard</Link>
                        <Link to="/subjects" className="linkStyle">Subjects</Link>
                        <Link to="/schedule" className="linkStyle">Schedule</Link>
                        <Link to="/progress" className="linkStyle">Progress</Link>
                        <Link to="/notes" className="linkStyle">Notes</Link>
                        <Link to="/goals" className="linkStyle">Goals</Link>
                    </div>
            </nav>
        </BrowserRouter>
    )
    
}
export default SideBar;