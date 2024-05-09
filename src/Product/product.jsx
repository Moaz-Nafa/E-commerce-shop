import React from 'react'
import './product.css'
import { useAuth } from '../ContextApi/globalState';

const Product = ({id, image, title, price, cat}) => {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        cat: cat,
      },
    });
  };
  return (
    <>
    <div className='main-product'>
        <div className='container'>
           <div className='product-image'>
                <img src={image} alt='tecnolegy'></img>
            </div>
             
            <div className='product-info'>
                <h3>{title}</h3>
                <p>category: {cat}</p>
                <h4>price: ${price}</h4>
            </div>
          
            <div className='add-to-basket'>
                <button onClick={addToBasket} data-testid='add-product'>Add to Basket</button>
            </div>

            </div>
        </div>   
    </>
  )
}

export default Product