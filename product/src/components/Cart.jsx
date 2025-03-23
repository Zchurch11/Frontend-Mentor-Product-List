import React from 'react'
import Item from './Item'
import Items from './Items'
function Cart({cart, onDelete, index, onOpen, openModal}) {
  const cartItems = Object.entries(cart)
  const total = cartItems.reduce((acc, [, item]) => acc + item.price * item.quantity, 0);
  
  return (
    <div className=' col cartContainer '>
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <>
          <img className="emptyCartSvg" src="./assets/images/illustration-empty-cart.svg" alt="" srcSet="" />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <>
          <Items
          index={index} 
          cartItems={cartItems}
          onDelete={onDelete} />
          <div className="amount row">
            <small>Order Total</small>
            <h3 className='subTotal'>${total.toFixed(2)}</h3>
          </div>
          <div className="orderMission row">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
            <p>This is a <span className='bold'>carbon-neutral</span> shipment</p>
          </div>
          <button onClick={onOpen} className='checkoutBtn' type="button">Confirm Order</button>
        </>
      )}
      
        
    </div>
  )
}

export default Cart