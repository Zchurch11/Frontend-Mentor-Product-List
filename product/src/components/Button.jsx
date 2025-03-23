import React from 'react'

function Button({index, cart, onIncrement, onDecrement, onActive, }) {
  const quantity = cart[index]?.quantity || 0
  
  return (
    quantity === 0
    ? 
    <button
    type='button' 
    className='btn btnAdd'
    onClick={onActive}>
      <img src='/assets/images/icon-add-to-cart.svg'>
      </img>Add to Cart
    </button> 
    
    : 
    <button
    index={index} 
    type='button' 
    className='btn btnActive'
    >
        <span
        role='button'
        aria-roledescription='decrement quantity'
        onClick={onDecrement}>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
        </span>{quantity}
        <span
        role='button'
        aria-roledescription='increment quantity'
        onClick={onIncrement}>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M4.375 0v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25H5.625V0h-1.25Z"
          />
          </svg>
        </span>
    </button>
  )
}

export default Button