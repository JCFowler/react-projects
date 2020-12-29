import './quiz.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import React, { useState } from 'react';
import { QuizStateContext } from './helpers/context';
import End from './components/End';

const QuizApp = () => {
    const [quizState, setQuizState] = useState('menu');
    const [user, setUser] = useState('');
    const [score, setScore] = useState(0);

    return (
        <div className='main'>
            <h1>Quiz App</h1>
            <QuizStateContext.Provider value={{ quizState, setQuizState, user, setUser, score, setScore }}>
                { quizState === 'menu' && <Menu /> }
                { quizState === 'playing' && <Quiz /> }
                { quizState === 'end' && <End /> }
            </QuizStateContext.Provider>
        </div>
    )
}

export default QuizApp;