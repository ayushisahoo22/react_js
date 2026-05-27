import { useState, useCallback, memo } from "react";

//memo helps in skipping the rerendering of components until its props are not changed
//by using it if child is not reqd to be rerender then it will be skipped only parent will rerender
const Child=memo(function Child({ greet }) {
  console.log("Child Rendered");
  return (
    <button onClick={greet}>
      Greet
    </button>
  );
});
function Callback() {
  const [count, setCount] = useState(0);

  //without useCallback the function will be created at every render
  //but by using it same reference is chosen no more func is created for same purpose
  const greet = useCallback(() => {
    console.log("Hello");
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <Child greet={greet} />
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
export default Callback;