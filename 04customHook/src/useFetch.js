//custom hook always start with 'use' word and stored in same folder as of its component
// the file should be in .js

import { useEffect, useState } from "react";
const useFetch=(url)=>{
    const[data,setData]=useState(null);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data));
    },[url]);
    return [data];
}
export default useFetch;