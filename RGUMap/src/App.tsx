import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome';
import SIWB from './Components/SIWB';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/siwb" element={<SIWB />} />
      </Routes>
    </div>
  )
}

export default App