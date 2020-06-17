import React from 'react';
import Item from './Item/Item'


const items = (props) => {
    return(
        props.itemsList.map((item, index) => {
            return (
                <Item 
                    key={index}
                    deleteHandler={() => props.delete(index)}
                    name={item.name} 
                    date={item.date.toUTCString()}
                />
            );
         })
    );
};

export default items;