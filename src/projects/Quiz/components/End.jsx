import React, { useContext } from 'react';
import { QuizStateContext } from '../helpers/context';
import { Questions } from '../helpers/questions';

const End = () => {
    const { score, setScore, setQuizState, user } = useContext(QuizStateContext);


    const restart = () => {
        setScore(0);
        setQuizState('menu');
    }

    return (
        <div className="end">
            <h1>Quiz Finished!</h1>
            <h3>{user}</h3>
            <h1>{score} / {Questions.length}</h1>

            <button onClick={restart}>Restart?</button>
        </div>
    )
}

export default End;