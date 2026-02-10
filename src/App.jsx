import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/dashboard'

function App() {

  const [count, setCount] = useState(10)

  const name="John ram Doe"
  return (
    <>
    
 <Dashboard name={name} count={count} setCount={setCount}/>
    </>
  )
}

export default App
