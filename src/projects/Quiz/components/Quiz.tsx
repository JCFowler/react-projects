import React, { useContext, useState } from 'react';
import '../quiz.css';
import { QuizStateContext } from '../helpers/context';
import { Questions } from '../helpers/questions';

const Quiz = () => {
    const { score, setScore, setQuizState } = useContext(QuizStateContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState('');

    const answerQuestion = (answer: 'optionA' | 'optionB' | 'optionC' | 'optionD') => {
        setOptionSelected(answer);
    };

    const next = () => {
        if (Questions[currentQuestion].answer === optionSelected) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < Questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizState('end');
        }
    };

    return (
        <div className="quiz">
            <h1>{ Questions[currentQuestion].prompt }</h1>
            <button onClick={() => answerQuestion('optionA') }>{ Questions[currentQuestion].optionA }</button>
            <button onClick={() => answerQuestion('optionB') }>{ Questions[currentQuestion].optionB }</button>
            <button onClick={() => answerQuestion('optionC') }>{ Questions[currentQuestion].optionC }</button>
            <button onClick={() => answerQuestion('optionD') }>{ Questions[currentQuestion].optionD }</button>

            { currentQuestion === Questions.length - 1 ? 
                <button className="nextQuextion" onClick={next}>Finish Quiz</button> :
                <button className="nextQuextion" onClick={next}>Next Question</button>
            }
        </div>
    )
}

export default Quiz;