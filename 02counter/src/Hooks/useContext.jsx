import { createContext,useState,useContext } from "react";

const userContext=createContext(); //create
function Component1(){
    const [user,setUser]=useState("Ayushi");
    return (
        //provider gives value
        <userContext.Provider value={user}>  
            <h1>Component 1</h1>
            <h1>My name is {user}</h1>
            <Component2/>
        </userContext.Provider>
    )
}

function Component2(){
    //no prop drilling
    return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3(){
    // using only at component 3
    const u=useContext(userContext);
    return (
    <>
      <h1>Component 3</h1>
      <h1>Hello {u}</h1>
    </>
  );
}

export default Component1