import React, { useEffect, useState } from 'react';
import './Tabs.css';
const url = "https://course-api.com/react-tabs-project";


function TabsMain() {
    const [ loading, setLoading ] = useState(true);
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
    console.log(jobs, "jobs")
    const {  title, dates, duties, company } = jobs[value];
    return (
        <div>
            <h1 className="tabs-header">Experience</h1>
            <div className="tabs-container">
                <div className="tabs-button">
                    {jobs.map((job, index) => {
                        return <button onClick={() => {setValue(index)}} key={index} className={`tab-button ${index === value && 'active-button'}`}>{job.company}</button>
                    })}
                </div>
                <div>
                    <h3>{title}</h3>
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