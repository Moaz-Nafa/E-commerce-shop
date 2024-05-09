import React from 'react'
import './cart.css'
import { useAuth } from '../ContextApi/globalState';
import CartProduct from '../CartProduct/cartProduct';
import { Link } from 'react-router-dom';
import Subtotal from '../Subtotal/subtotal';

const Cart = () => {
  const {basket} = useAuth();
  return (
    <div className='cart'>
      <div className='subtotal-card'>
        <Subtotal />
      </div>
    
      {
        basket.length > 0 ? (
        basket.map((item)=> (
        <CartProduct 
        key={item.id} 
        id={item.id} 
        title={item.title} 
        image={item.image} 
        price={item.price} 
        cat={item.cat}/>
      ))
        ) : (
          <div className="empty-cart">
            <h1>CART IS EMPTY</h1>
            <Link to='/product'>
              <button>Shop Now</button>
            </Link>
          </div>
          )
      }
    </div>
  )
}

export default Cart