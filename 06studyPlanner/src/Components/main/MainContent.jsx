import { FaSearch } from "react-icons/fa";
import "./MainContent.css"
import Welcome from "./Welcome";
import Assignment from "./Assignment";
import Subject from "./Subject"
import Quick from "./Quick";
function MainContent(){
    return(
        <div style={{width:"750px", marginLeft:"10px", marginRight:"10px"}}>
            <div className='searchBar'>
                <input type="text" 
                    placeholder="What do you want to study today?" style={{
                    border:"none",
                    width:"300px",
                    outline:"none"
                }}/>
                <FaSearch/>
            </div>
            <Welcome/>
            <Assignment/>
            <Subject/>
            <Quick/>
        </div>
    );
}
export default MainContent;