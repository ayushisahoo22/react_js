import { createRoot } from "react-dom/client";
import { useState } from "react";

function FavoriteColor(){
    //useState return two things- 
        // 1.On which the change is occuring 
        // 2.Which is responsible for the change
    const [color,setColor]=useState("Red");
    const c=(e)=>{   //a function to set color
        setColor(e)
    }
    return(
        <>
            <h1>My FavoriteColor is {color}</h1>
            <button onClick={()=>c("blue")}>Blue</button>
            <button onClick={()=>setColor("green")}>Green</button>
            <button onClick={()=>setColor("pink")}>Pink</button>
        </>
    )
}

export default FavoriteColor