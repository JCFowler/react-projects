import React from 'react';
import { Link } from "react-router-dom";
import '../../../App.css';

function Home() {
    return (
        <div className="App">
            <h1>React projects:</h1>
            <Link to="/hero">
                <button className="button">Hero Builder</button>
            </Link>
            <Link to="/todo">
                <button className="button">Todo list</button>
            </Link>
            <Link to="/quiz">
                <button className="button">Quiz</button>
            </Link>
        </div>
        
    )
}


export default Home;