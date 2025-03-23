import React from 'react'
import Items from './Items'

function Modal({cart, type, modalOpen, onReset}) {
  console.log('Modal Open:', modalOpen)
  const cartItems = Object.entries(cart)
  const total = cartItems.reduce((acc, [, item]) => acc + item.price * item.quantity, 0);
  console.log('type in Modal:', type)
  return (
    <div className={!modalOpen ?"modalOverlay" : "modalOverlay open"} aria-hidden={!modalOpen}>
    <section className={!modalOpen ? 'modal col' : 'modal col open'} aria-hideen={modalOpen}>
      <img src="/assets/images/icon-order-confirmed.svg" alt="" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <div className="itemListContainer">
        <Items 
      cartItems={cartItems}
      type={type} />
        <div className="amount row">
            <small>Order Total</small>
            <h3 className='subTotal'>${total.toFixed(2)}</h3>
        </div>
      </div>
      <button onClick={onReset}  className='checkoutBtn' type="reset">Start New Order</button>
    </section>
    </div>
  )
}

export default Modal