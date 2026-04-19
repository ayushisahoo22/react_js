import {createRoot} from "react-dom/client"

//props from object
// function Car(props){
//     return(
//         <h1>This is a {props.info.color} car of brand {props.info.brand}</h1>
//     )
// }

//props from array index
// function Car(props){
//     return(
//         <h1>This is {props.info[0]} brand of model {props.info[1]}</h1>
//     )
// }

//nested 
function Car({color="red",brand}){    //default value of color
    return <h1>This is {color} car of brand {brand}</h1>
}

export default Car 
