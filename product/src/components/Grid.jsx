import React, { act } from 'react'
import Card from './Card'
import data from '../assets/data.json'

function Grid({ cart, onIncrement, onDecrement, onActive, active}) {
  
  return (
    <div className='grid'>
        {data.map((item, index) => (
          <Card key={index}
          cart={cart}
          index={index}
          item={item}
          onIncrement={() => onIncrement(index)}
          onDecrement={() => onDecrement(index)}
          onActive={() => onActive(index)}
          isActive={active[index]}
          />
        ))}
    </div>
  )
}

export default Grid