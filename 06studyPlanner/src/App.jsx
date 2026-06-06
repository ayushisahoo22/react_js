import './App.css'
import { Routes, Route } from "react-router-dom";
import Sub from "./Pages/Subject/Sub";
import SideBar from './Components/SideBar'
import MainContent from './Pages/Main/MainContent'
import RightPanel from './Components/RightPanel' 
import Schedule from './Schedule/Schedule';
import Progress from './Progress/Progress';
import Notes from './Note/Notes';
function App() {
  return (
    <div className="appLayout">
      <SideBar />

      <div className="contentArea">
          <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/Subject/Sub" element={<Sub />} />
              <Route path="/Schedule/Schedule" element={<Schedule />} />
              <Route path="/Progress/Progress" element={<Progress />} />
              <Route path="/Note/Notes" element={<Notes />} />
          </Routes>

          <RightPanel />
      </div>
  </div>
  )
}

export default App
