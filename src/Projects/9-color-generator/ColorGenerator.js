import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
import './ColorGenerator.css';

function ColorGenerator() {
    const [ color, setColor ] = useState('');
    const [ error, setError ] = useState(false);
    const [ list, setList ] =useState(new Values('#FF0000').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
        }
        
    }

    return (
        <div className="color-generator">
            <h1 className="color-header">Color Generator</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="color">Color code: </label>
                    <input type="text" name="color" id="color" value={color} onChange={(e) => { setColor(e.target.value)}} placeholder="#f15025" className={` color-input ${error ? 'error': null}`}/>
                    <button type="submit" className="color-submit">Submit</button>
                </form>
            </section><br />
            <section className="color-container">
                { list.map((color, index) => {
                    return <SingleColor key={index} {...color} index={index} hex={color.hex}/>
                }) }
            </section>
        </div>
    )
}

export default ColorGenerator;