import React from 'react';
import './cartProduct.css'
import { useAuth } from '../ContextApi/globalState';

const CartProduct = ({id, image, title, price, cat}) => {
    const { dispatch } = useAuth();
    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
  return (
    <div className='cart-products'>
            <div className='cart-image'>
                <img src={image} alt='tecnolegy'></img>
            </div>

            <div className='cart-info'>
                <h3>{title}</h3>
                <p>category: {cat}</p>
                <h4>price: ${price}</h4>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
    </div>
  )
}

export default CartProduct