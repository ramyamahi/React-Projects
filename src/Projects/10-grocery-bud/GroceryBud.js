import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import './GroceryBud.css';

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if(list) {
        return JSON.parse(localStorage.getItem('list'))
    } 
    else {
        return []
    }
}

function GroceryBud(){
    const [ name,setName ]  = useState('');
    const [ list, setList ] = useState(getLocalStorage());
    const [ alert, setAlert ] = useState({show: false, msg: '', type: ''});
    const [ isEditing, setIsEditing ] = useState(false);
    const [ EditID, setEditID ] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            showAlert(true, 'please enter the item', 'danger');
        }
        else if( name && isEditing) {
            setList(list.map((item) => {
                if(item.id === EditID) {
                    return {...item, title: name}
                }
                return item
            }))
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'Value changed', 'success');
        }
        else {
            showAlert(true, 'Item added to the list', 'success');
            const newItem = {id: new Date().getTime().toString(), title: name};
            setList([...list,newItem]);
            setName('');
        }
    }

    const showAlert = (show=false, msg='', type= '') => {
        setAlert({show, msg, type});
    }

    const clearItems = () => {
        showAlert(true,'Empty list', 'danger')
        setList([])
    }

    const removeItem = (id) => {
        showAlert(true, 'Item deleted', 'danger')
        setList(list.filter((item) =>  item.id !== id ))
    }

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setIsEditing(true)
        setEditID(id)
        setName(specificItem.title)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    },[list])

    return (
        <div className="grocery-container">
            <h1>Grocery Bud</h1>
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="grocery-input" />
                <button type="submit" className="grocery-button">{isEditing? 'Edit' : 'Submit'}</button>
            </form>
            {(list.length > 0) &&                 
                <div>
                    <List items = {list} removeItem={removeItem} editItem={editItem}/>
                </div>
            }
            <button onClick={clearItems} className="clear-button">Clear items</button> 
        </div>
    )
}

export default GroceryBud;