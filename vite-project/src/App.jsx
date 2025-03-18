import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Información Personal :)</h1>

<Accordion/>
    </>
  )
}

export default App
