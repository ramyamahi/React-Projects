import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './Tours.css';
const url = 'https://course-api.com/react-tours-project'; 

function ToursMain() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
        }
        
    }

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id );
        setTours(newTours);
    }

    useEffect(() => {
        fetchTours(); 
    }, []);

    if(loading) {
        console.log(tours);
        return (
            <div>
                <Loading/>
            </div>
        )
    }
    if(tours.length === 0) {
        return (
            <div>
                <h4>No Tours Left</h4>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        )
    }
    return (
        <div>
            <Tours tours={tours} removeTour = {removeTour}/>
        </div>
    )
    
}

export default ToursMain;