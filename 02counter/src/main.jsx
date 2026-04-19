import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Car from './Props.jsx'
import Car from './PropsObject.jsx'

//    Object
// const carInfo={
//     color:"Red",
//     brand:"Ford",
//     model:"Mustang",
//     year:1986
// }

//    Array
// let carInfo=["Ford","Mustang"]

//nested
function Garage(){
  return(
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford"/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  // <Car color="red" brand="Ford" model="Mustang"/>   /*The attributes are props passed to the func as argument*/

  // <Car info={carInfo}/>

  //nested
  <Garage/>
)
