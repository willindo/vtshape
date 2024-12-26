import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shapes from './components/Shapes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Shapes/>
    </>
  )
}

export default App
