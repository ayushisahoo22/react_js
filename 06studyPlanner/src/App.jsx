import './App.css'
import { Routes, Route } from "react-router-dom";
import Sub from "./Pages/Subject/Sub";
import SideBar from './Components/SideBar'
import MainContent from './Pages/Main/MainContent'
import RightPanel from './Components/RightPanel' 
function App() {
  return (
    <div style={{display:"flex"}}>
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainContent />
              </>
            }
          />
          <Route
            path="/Subject/sub"
            element={<Sub />}
          />
        </Routes>
        <RightPanel/>
    </div>
  )
}

export default App
