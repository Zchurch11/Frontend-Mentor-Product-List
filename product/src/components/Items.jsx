import React from 'react'
import Item from './Item'
function Items({cartItems, type, onDelete, index}) {
    console.log('Cart Items in Items:', cartItems)
  return (
    <ul className="itemList">
        {cartItems.map(([key, item]) => (
            <Item
            index={index}
            onDelete={() => onDelete(key)}
            type={type}
            image={item.image} 
            key={key}
            name={item.name}
            price={item.price}
            quantity={item.quantity}/>))}
          
          
        </ul>
  )
}

export default Items