import React, { useState } from 'react';
import data from './data';
import './LoremIpsumGenerator.css';

function LoremIpsumGenerator() {
    const [ text, setText ] = useState([]);
    const [ count, setCount ] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if(count <=0) {
            amount = 1;
        }
        if(count > 8) {
            amount = 8;
        }
        let newText = data.slice(0, amount);
        setText(newText);
    }

    return (
        <div className="text-container">
            <h1 className="text-header">Lorem Ipsum Generator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Paragraphs: </label>
                <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} className="count-input"/>
                <button type="submit" className="generate-btn">Generate</button>
            </form><br />
            {text.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            })}
        </div>
    )
}

export default LoremIpsumGenerator;