import React from 'react';
import './Item.css';

const item = (props) => {
    return(
        <div className="Item">
            <div>
                <p>{props.name}</p>
                <p>{props.date}</p>
                <button className="btn" onClick={props.deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default item;