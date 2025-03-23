import { useState } from 'react'

import './index.css'
import Grid from './components/Grid'
import Cart from './components/Cart'
import Modal from './components/Modal'
import data from './assets/data.json'

function App() {
  const [cart, setCart] = useState({})
  const [active, setActive] = useState(Array(data.length).fill(false))
  const [modalOpen, setModalOpen] = useState(false)
  console.log('Cart in app:', cart)
  const handleClick = (action, index) => {
    if (action === 'increment') {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart }
        if (!updatedCart[index]) {
          updatedCart[index] = { image: data[index].image.thumbnail,
             name: data[index].name, price: data[index].price, quantity: 1 }
             
        } else {
          updatedCart[index].quantity += 1;
        }
        console.log("updated cart", updatedCart)
        return updatedCart;
      });
    } else if (action === 'decrement') {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart }
        if (updatedCart[index]?.quantity > 1) {
          updatedCart[index].quantity -= 1
        } else {
          delete updatedCart[index]
          setActive((prevActive) => {
            const updatedActive = [...prevActive]
            updatedActive[index] = false
            return updatedActive
          }
          );
        }
        return updatedCart;
      });
    } else if (action === 'activate') {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart }
        if (!updatedCart[index]) {
          updatedCart[index] = { image: data[index].image.thumbnail,
            name: data[index].name, price: data[index].price, quantity: 1 }
        }
        return updatedCart
      });

      setActive((prevActive) => {
        const updatedActive = [...prevActive]
        updatedActive[index] = true
        return updatedActive;
      });
    } else if (action === 'delete'){
      
      setCart((prevCart) => {
        const updatedCart = { ...prevCart }
        console.log('Deleting item:', updatedCart[index])
        delete updatedCart[index]
        return updatedCart
      });
    } else if (action === 'reset') {
      setCart({})
      setActive(Array(data.length).fill(false))
      setModalOpen(!modalOpen)
    }
    
  };
  const openModal = () => {
    console.log('Opening Modal')
    setModalOpen(true)
  }
  




  return (
    <div className='overlay'>
      <main className='row'>
        <div className="col">
          <h1>Desserts</h1>
          <Grid
          cart={cart}
          onIncrement={(index) => handleClick('increment', index)}
          onDecrement={(index) => handleClick('decrement', index)}
          active={active}
          onActive={(index) => handleClick('activate', index)}
          data={data} />
        </div>
        <div className="col">
          <Cart
          onDelete={(index) => handleClick('delete', index)}
          onOpen={openModal}
          cart={cart}
          type='cart' />
        </div>
        
      </main>
      <Modal
      modalOpen={modalOpen}
      cart={cart}
      type='checkout' 
      onReset ={() => handleClick('reset')}/>
    </div>
  )
}

export default App
