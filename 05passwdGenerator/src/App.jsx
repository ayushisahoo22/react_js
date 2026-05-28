import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[length,setLength]=useState(8);
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");
  const inputRef=useRef();
  const generate=useCallback(()=>{
    let s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numAllowed)s+="0123456789";
    if(charAllowed) s+="{}[]\|#$@&*^~`()/?";
    let pass="";
    for(let i=1;i<=length;i++){
      let c=Math.floor(Math.random()*s.length+1)
      pass+=s.charAt(c);
    }
    setPassword(pass);
  },[numAllowed,charAllowed,length]);
  const copy=()=>{
    inputRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  useEffect(()=>{
    generate();
  },[length,numAllowed,charAllowed,generate])
  return (
    <div style={{height:"100vh",backgroundColor:"black",display:"flex",justifyContent:"center",paddingTop:"15px"}}>
      <div className="container">
        <h3 style={{color:"white",display:"flex",justifyContent:"center"}}>PassWord Generator</h3>
        <div className='textP'>
          <input type="text"value={password} style={{padding:"10px",width:"300px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",border:"none"}} ref={inputRef} readOnly/>
          <button id='btnCopy' onClick={copy}>Copy</button>
        </div>
        <div className='toggle'>
          <input type="range" min={6} max={50} value={length} onChange={(e)=> setLength(e.target.value)}/>
          <label >Length: {length}</label>
          <div className='boxes' style={{display:"flex",gap:"5px"}}>
            <input type="checkbox" defaultChecked={numAllowed} onChange={()=>{
              setNumAllowed((p)=>!p);
            }}/>
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{
              setCharAllowed((p)=>!p);
            }}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App