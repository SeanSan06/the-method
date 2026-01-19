import { useState } from 'react'
import NavBar from "./components/NavBar";
import HeroArea from "./components/HeroArea";
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <NavBar />
            <HeroArea />
        </div>
    )
}

export default App
