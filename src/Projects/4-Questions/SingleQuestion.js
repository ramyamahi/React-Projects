import React, { useState } from 'react';
import { FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa';

const SingleQustion = ({id, title, info}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className="question-container">
            <div className="question-card">
                <h4>{title}</h4>                
                <button onClick={() => setShowAnswer(!showAnswer)} className="showhide-button">{!showAnswer ? <FaRegPlusSquare className="showhide-icon" /> : <FaRegMinusSquare className="showhide-icon" />} </button>
            </div>
            { showAnswer && <p>{info}</p> }            
        </div>
    )
}

export default SingleQustion;