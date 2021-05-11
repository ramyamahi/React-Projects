import React, {useState} from 'react';
import people from './data';
import {  AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if(number < 0){
            return people.length - 1;
        }
        if(number > people.length - 1) {
            return 0;
        }
        return number;
    }

    const navigateLeft = () => {
        setIndex(() => {
            const newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const navigateRight = () => {
        setIndex(() => {
            const newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    return (
        <div className="review-card">
            <img src={image} alt={name} className="people-profile"/>
            <h4>{name}</h4>
            <h5>{job}</h5>
            <p>{text}</p>
            <div>
                <button onClick={navigateLeft} className="navigate-icon"><AiOutlineLeft /></button>
                <button onClick={navigateRight} className="navigate-icon"><AiOutlineRight /></button>
            </div>
        </div>
    )
}

export default Review;