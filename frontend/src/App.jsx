import { useState } from 'react'
import HomePage from './pages/HomePage';
import "./styles.css";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <HomePage />
        </div>
    )
}

export default App
