import React from 'react'
import './headPhone.css'
import { Link } from 'react-router-dom'

import img1 from '../assets/pro24.png'
import img2 from '../assets/pro29.png'
import img3 from '../assets/pro31.png'
import Product from '../Product/product';
import shortid from 'shortid';
import Fade from 'react-reveal/Fade';

const HeadPhone = () => {
  return (
    <>
          <div className='headphone-products'>
            <article>
       
            <div className='filter'>
            <h1>#Products</h1>
                <p>Home. Products</p>
                <div className='categories'>
                    <h2>Categories</h2>
                    <ul>
                        <li><Link to='/product' className='link'>All Products</Link></li>
                        <li><Link to='/tablet' className='link'>Tablet</Link></li>
                        <li><Link to='/headphone' className='link'>Headphone</Link></li>                    
                        <li><Link to='/phone' className='link'>Phone</Link></li>
                        <li><Link to='/labtop' className='link'>Labtop</Link></li>
                        <li><Link to='/watch' className='link'>Watch</Link></li>
                        <li><Link to='/gaming' className='link'>Gaming</Link></li>
                        <li><Link to='/camira' className='link'>Camira</Link></li>
                    </ul>
                </div>
            </div>
        </article>

        <div className='headphone-cat'>
          <Fade right>
        <article>
        <Product
            id={shortid.generate()}
            image={img1}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img2}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img3}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        </Fade>
      </div>
    </div>
    </>
  )
}

export default HeadPhone