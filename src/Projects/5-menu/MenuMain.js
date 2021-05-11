import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';
import './Menu.css';

const categoryList = ['all', ...new Set(items.map((item) => item.category))];

function MenuMain() {
    const [ categories, setCategories ] = useState(categoryList);
    const [ menuItems, setMenuItems ] = useState(items);

    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems);
    }

    return (
        <div>
            <h1 className="menu-header">Our Menu</h1>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
        </div>

    )
}

export default MenuMain;