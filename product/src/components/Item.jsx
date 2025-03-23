import React from 'react'

function Item({name, price, quantity, type, image, onDelete}) {
  console.log(type)
  return (
    type !== 'checkout' ? 
          (<li className='item row'>
            <div className="itemInfo col">
              <h3 className="name">{name}</h3>
              <div className="rowSmall">
                <small className="quantity">{quantity}x</small>
                <small className="unitPrice">@ {price.toFixed(2)}</small>
                <small className="total">${(price * quantity).toFixed(2)}</small>
              </div>              
            </div>
            <button onClick={onDelete} className='removeBtn' type="button">
                <img src="/assets/images/icon-remove-item.svg" alt="" />
            </button>
          </li>) :

          (<li className='item row'>
            <div className="itemInfo">
              
              <div className="rowSmall">
                <img src={image} alt="" />
                <div className="col">
                  <h3 className="name">{name}</h3>
                  <div className="rowSmall">
                  <small className="quantity">{quantity}x</small>
                  <small className="unitPrice">@ ${price.toFixed(2)}</small>
                  </div>
                </div>
              </div>
                            
            </div>
            <small className="total">${(price * quantity).toFixed(2)}</small>
          </li>
          
    
  )
)}

export default Item