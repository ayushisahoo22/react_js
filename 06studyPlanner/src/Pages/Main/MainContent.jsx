import { FaSearch } from "react-icons/fa";
import "./MainContent.css";

import Welcome from "./Welcome";
import Assignment from "./Assignment";
import Subject from "./Subject";
import Quick from "./Quick";

function MainContent() {
    return (
        <div className="mainContent">
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="What do you want to study today?"
                    className="searchInput"
                />
                <FaSearch className="searchIcon"/>

            </div>
            <Welcome />
            <Assignment />
            <Subject />
            <Quick />
        </div>
    );
}
export default MainContent;