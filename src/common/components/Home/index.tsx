import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/hero">
                <Button variant="contained" color="primary">Hero Builder</Button>
            </Link>
            <Link to="/todo">
                <Button variant="contained" color="primary">Todo list</Button>
            </Link>
        </div>
        
    )
}


export default Home;