import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Car from './Props.jsx'

createRoot(document.getElementById('root')).render(
  <Car color="red" brand="Ford" model="Mustang"/>   /*The attributes are props passed to the func as argument*/
)
