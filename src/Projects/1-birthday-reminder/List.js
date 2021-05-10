import React from 'react';

const List = ({people}) => {
    return (
        <div>
            {people.map((person) => {
                return (
                    <div key={person.id} className="profile-card">
                        <img src={person.image} alt="person profile" className="profile-image"/>
                        <div>
                            <h5>{person.name}</h5>
                            <span>{person.age}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default List;