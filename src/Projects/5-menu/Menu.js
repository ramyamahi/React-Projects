import React from 'react';
 
const Menu = ({items}) => {
    return (
        <div className="menu-container">
            {items.map((item) => {
                return (
                    <div key={item.id} className="menu-data">
                        <img src={item.img} alt={item.title} className="menu-img"/>
                        <div className="menu-info">
                            <h4 className="menu-title">{item.title}</h4>
                            <h5>${item.price}</h5>                            
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;