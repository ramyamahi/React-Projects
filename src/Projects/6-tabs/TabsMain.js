import React, { useEffect, useState } from 'react';
import './Tabs.css';
const url = "https://course-api.com/react-tabs-project";


function TabsMain() {
    const [ loading, setLoading ] = useState(false);
    const [ jobs, setJobs ] = useState([]);
    const [ value, setValue ] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const jobsList = await response.json();         
        setJobs(jobsList); 
        setLoading(false);
    }

    useEffect(() =>{
        fetchJobs();
    }, [])


    if(loading) {
        return <div>Loading...</div>
    }
    const {  title, dates, duties, company } = jobs[value];
    return (
        <div className="tabs-detail-container">
            <h1>Experience</h1>
            <div>
                <div>
                    {jobs.map((job, index) => {
                        return <button onClick={() => {setValue(index)}} key={index} className={`tab-button ${index === value && 'active-button'}`}>{job.company}</button>
                    })}
                </div>
                <div>
                    <h4>{title}</h4>
                    <h5>{company}</h5>
                    <h5>{dates}</h5>
                    <ul>
                        {duties.map((duty, index) => {
                            return (
                                <li key={index}>{duty}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TabsMain;