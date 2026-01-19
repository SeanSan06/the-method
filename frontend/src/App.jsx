import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/NavBar";
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default App
