import React, {useState} from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
    const [ readMore, setReadMore ] = useState(false);
    return (
        <div className="tours-card">
            <img src={image} alt={name}/>
            <div>
                <div>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <p className="tour-info">{readMore ? info : `${info.substring(0, 200)}...`}</p>
                <button onClick = {() => setReadMore(!readMore)} className="readmore">{readMore ? 'show less' : 'read more'}</button><br/>
                <button onClick={() => removeTour(id)} className="not-interested">Not Interested</button>
            </div>
        </div>
    )
}

export default Tour;