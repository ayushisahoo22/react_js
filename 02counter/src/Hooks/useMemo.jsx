import { useState, useMemo } from "react";

function Memo() {

  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  function slowFunction(num) {
    console.log("Calculating...");
    for(let i=0;i<1000000000;i++) {}
    return num * 2;
  }
  function toggleTheme(t){
    if(t===false) console.log("Light");
    else console.log("Dark");
  }
  //no need to use react.memo explicitly here as it memoizes the value 
  const result = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <>
      <h1>{result}</h1>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
      <button onClick={() =>{
            toggleTheme(!dark),
            setDark(!dark)}
        }>
        Theme
      </button>
    </>
  );
}

export default Memo;