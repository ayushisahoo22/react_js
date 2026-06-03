import './App.css'
import SideBar from './Components/SideBar'
import MainContent from './Components/main/MainContent'
import RightPanel from './Components/RightPanel' 
function App() {
  return (
    <div style={{display:"flex"}}>
      <SideBar/>
      <MainContent/>
      <RightPanel/>
    </div>
  )
}

export default App
