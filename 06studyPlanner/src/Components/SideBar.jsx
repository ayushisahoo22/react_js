import {BrowserRouter, Link} from "react-router-dom";
import "./SideBar.css";
import sidebar from "../Assets/sidebar.png"
function SideBar(){
    const linkStyle = {
        textDecoration: "none",
        color: "Black",
        fontSize:"20px"
    };
    return(
        <BrowserRouter>
            <nav className="sidebar" style={{
                height:"100vh",
                width:"250px",
                backgroundColor:"powderblue",
                backgroundImage:`linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.3)),
        url(${sidebar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"}}>
                <h2 style={{
                    display:"flex",
                    justifyContent:"center", 
                    marginTop:"13px"}}
                    > 📚 Study Planner</h2>
                    <div className="sidebarMenu" style={{
                        marginTop:"30px",
                        display:"flex", 
                        justifyContent:"center",
                        alignItems:"center",
                        gap:"30px",flexDirection:"column"}}>
                        <Link to="/" style={linkStyle}>Dashboard</Link>
                        <Link to="/subjects" style={linkStyle}>Subjects</Link>
                        <Link to="/schedule" style={linkStyle}>Schedule</Link>
                        <Link to="/progress" style={linkStyle}>Progress</Link>
                        <Link to="/notes" style={linkStyle}>Notes</Link>
                        <Link to="/goals" style={linkStyle}>Goals</Link>
                    </div>
            </nav>
        </BrowserRouter>
    )
    
}
export default SideBar;