import { FaSearch } from "react-icons/fa";
import "./MainContent.css"
function MainContent(){
    return(
        <div style={{width:"550px",textAlign:"center"}}>
            <div className='searchBar'>
                <input type="text" value="What do you want to study today?" style={{
                    border:"none",
                    width:"300px",
                    outline:"none"
                }}/>
                <FaSearch/>
            </div>
            
        </div>
    );
}
export default MainContent;