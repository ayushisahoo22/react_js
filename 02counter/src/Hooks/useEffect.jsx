import { useEffect,useState } from "react";
import { createRoot } from "react-dom/client";

function Timer(){
    const [count,setCount]=useState(0);
    const [calc,setCalc]=useState(1);

    //as dependencies are not passed it will render infinite times
    // useEffect(()=>{
    //     setTimeout(()=>{setCount(c=>c+1)},1000);
    // });

    //as the dependency array is empty..it'll run only once
    // useEffect(()=>{
    //     setTimeout(()=>{setCount(c=>c+1)},1000);
    // },[]);

    //it will render first time and further when the count value changes
    useEffect(()=>{
        setCalc(c=>c*2);
    },[count]);

    return <>
        <h1>Counter renders {count} time</h1>
        <button onClick={()=>setCount(c=>c+1)}>Add counter</button>
        <h1>This shows two times of counter {calc}</h1>
    </>
}

export default Timer;