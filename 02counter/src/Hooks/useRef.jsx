import { useRef,useState } from "react";
import { createRoot } from "react-dom/client";

function UseRef() {
//   const countRef = useRef(0);
//   function handleClick() {
//     countRef.current++;
//     console.log(countRef.current);
//   }
//   return (
//     <button onClick={handleClick}>
//       Click
//     </button>
//   );

    const inputRef = useRef();
    function focusInput() {
        inputRef.current.focus();
    }
    return (
        <>
        {/* ref is used to attach DOM element */}
        <input ref={inputRef} />  
        {/* inputRef.current->input */}

        <button onClick={focusInput}>
            Focus
        </button>
        </>
    );
}
export default UseRef;