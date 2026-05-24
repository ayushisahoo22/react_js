import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState({
    head:"hotpink",
    bg:"honeydew",
    border:"black"
  })

  return (
    <div className='container' style={{backgroundColor:color.bg}}>
      <h1 style={{display:"flex",justifyContent: "center",color:color.head}}>Background Changer</h1>
      <div  className='buttons' style={{border:`${color.border} solid 2px`}}>
        <button className='btn' id='black' onClick={()=>setColor({
          head:"hotpink",
          bg:"black",
          border:"white"
        })}>Black</button>
        <button className='btn' id='blue' onClick={()=>setColor({
          head:"hotpink",
          bg:"powderblue",
          border:"black"
        })}>Blue</button>
        <button className='btn' id='pink' onClick={()=>setColor({
          head:"hotpink",
          bg:"pink",
          border:"black"
        })}>Pink</button>
        <button className='btn' id='red' onClick={()=>setColor({
          head:"black",
          bg:"lightcoral",
          border:"black"
        })}>Red</button>
        <button className='btn' id='green' onClick={()=>setColor({
          head:"hotpink",
          bg:"teal",
          border:"black"
        })}>Green</button>
        <button className='btn' id='yellow' onClick={()=>setColor({
          head:"black",
          bg:"khaki",
          border:"black"
        })}>Yellow</button>
      </div>
    </div>    
  )
}

export default App
