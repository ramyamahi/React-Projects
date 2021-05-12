import React, { useEffect, useState } from 'react';
import data from './data';
import './Slider.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function SliderMain() {
    const [ people, setPeople ] = useState(data);
    const [ index, setIndex ]  =useState(0);
    
    useEffect(() => {
        const lastIndex = people.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex) {
            setIndex(0);
        }
    }, [ index, people ]);

    useEffect(() => {
       let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {clearInterval(slider)}
    }, [index]);

    return (
        <div>
            <h1 className="slider-header">Reviews</h1>
            <div className="slider-card">
                {people.map((person, personIndex) => {
                    const { id, image,name, title, quote } = person;
                    let position = 'nextSlide';
                    if(personIndex === index) {
                        position = 'activeSlide';
                    }
                    if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1) )  {
                        position = 'lastSlide';
                    }
                    return (                    
                        <div className={`slider-data ${position}`}>
                            <img src={image} alt={name} className="slider-image"/>
                            <h4>{name}</h4>
                            <h5>{title}</h5>
                            <p>{quote}</p>
                        </div>
                    )
                })}
                <button className="prev-btn" onClick={() => setIndex(index - 1)}><BsChevronLeft /></button>
                <button className="next-btn" onClick={() => setIndex(index + 1)}><BsChevronRight /></button>
            </div>
        </div>
    )
}

export default SliderMain;