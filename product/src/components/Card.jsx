import React from 'react'
import Button from './Button'
function Card({ index, item, cart, onIncrement, onDecrement, onActive, isActive }) {
  console.log(item.image.mobile)
  return (
    <div className='card'>
        <picture className={isActive ? "cardImg active" : "cardImg"} >
          <source media="(max-width: 480px)" srcSet={item.image.mobile}  />
          <source media="(min-width: 481px) and (max-width: 768px))" srcSet={item.image.tablet}  />
          <img src={item.image.desktop} alt={item.name} className="cardImg"/>
        </picture>
        <Button
        index={index}
        cart={cart}
        
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onActive={onActive}
         />
        <div className="cardBody">
            <small className="type">{item.category}</small>
            <h3 className="title">{item.name}</h3>
            <p className="price">${item.price.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default Card