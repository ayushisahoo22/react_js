import { createRoot } from "react-dom/client"

// function Car(props){
//     return(
//         <h1>This is a {props.color} car</h1>
//     )
// }

// function Car(props){
//     return(
//         <h1>This is a {props.color} car of brand {props.brand}</h1>   /*using multiple props*/
//     )
// }

//destructuring of props
function Car({color,brand,...rest}){   //rest is used when we dont know the rest upcoming arguments
    return(
        <h1>This is a {color} car of brand {brand} and model {rest.model} </h1>
    )
}

export default Car;