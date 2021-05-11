import React from 'react';
 
const Categories = ({categories, filterItems}) => {
    return (
        <div className="category-container">
            { categories.map((category, index) => {
                return (
                    <button onClick={() => {filterItems(category)}} key={index} className="category-button">{category.charAt(0).toUpperCase() + category.slice(1)}</button>
                )
            }) }
        </div>
    )
}

export default Categories;