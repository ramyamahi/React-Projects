import React from 'react';
import { FaEdit,FaTrash } from 'react-icons/fa';

const List = ({items, removeItem, editItem}) => {
    return (
        <div>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <div className="list-container">
                        <p className="grocery-title">{title}</p>                       
                        <button type="button"  onClick={() => editItem(id)} className="edit-btn"><FaEdit /></button>
                        <button type="button" onClick={() => removeItem(id)} className="delete-btn"><FaTrash /></button>                        
                    </div>
                )
            })}
        </div>
    )
}

export default List;