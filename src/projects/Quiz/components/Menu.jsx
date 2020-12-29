import React, { useContext } from 'react';
import { Input } from '@material-ui/core';
import '../quiz.css';
import { QuizStateContext } from '../helpers/context';

const Menu = () => {
    const { setQuizState, setUser } = useContext(QuizStateContext);

    return (
        <div className="menu">
            <label>Enter your Name</label>
            <Input type="text" placeholder="John Smith" onChange={(event => { setUser(event.target.value)})}></Input>
            <button onClick={ () => { setQuizState('playing') }}>Start Quiz</button>
        </div>
    )
}

export default Menu;