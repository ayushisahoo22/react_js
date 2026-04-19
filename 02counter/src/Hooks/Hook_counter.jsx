import { createRoot } from "react-dom/client";
import { useState } from "react";

function CounterApp(){
    const [counter,setCounter]=useState(10);   //initial value is passed with the useState
    const addValue=()=>{
        setCounter(counter+1)   //do not use ++
    }
    const removeValue=()=>{
        setCounter(counter-1)
    }
    return(
        <>
            <h1>This is the counter app</h1>

            {/* dynamically everyone will change in one go */}
            <h3>Counter is: {counter}</h3>
            <button onClick={addValue}>Add Counter {counter}</button>    
            <button onClick={removeValue}>Remove Counter {counter}</button>
        </>
    )
}

export default CounterApp