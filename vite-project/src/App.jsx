import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sofia from './components/sofia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Información Personal :)</h1>


<Sofia
nombre={"Sofia Palacios Lara"}
edad= {"18 añitos"}
especialidad={"Software"}
direccion={"San Salvador Este"}
codigo={"20230106"}
fechaNacimiento={"18/10/2006"}





/>







    </>
    
  )
}

export default App
