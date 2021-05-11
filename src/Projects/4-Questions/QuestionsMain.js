import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './SingleQuestion';
import './Questions.css';

function QuestionsMain() {
    const [questions, setQuestions] = useState(data);

    return (
        <div className="questions-container">
            <h1 className="question-header">Questions & Answers</h1>
            {questions.map((question) => {
                return (
                   <div><SingleQuestion key={question.id} {...question} /></div>
                )
            })}
        </div>
    )
}

export default QuestionsMain;
