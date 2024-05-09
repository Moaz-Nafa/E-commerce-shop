import React from 'react'
import './productsPage.css'
import { Link } from 'react-router-dom'
import Product from '../Product/product'
import shortid from 'shortid'

import img1 from '../assets/pro1.png'
import img2 from '../assets/pro2.png'
import img3 from '../assets/pro3.png'
import img4 from '../assets/pro20.png'
import img5 from '../assets/pro5.png'
import img6 from '../assets/pro20.png'
import img7 from '../assets/pro7.png'
import img8 from '../assets/pro8.png'
import img9 from '../assets/pro9.png'
import img10 from '../assets/pro15.png'
import img11 from '../assets/pro11.png'
import img12 from '../assets/pro12.png'

const ProductsPage = () => {
  return (
    <>
    <div className='products'>
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

        <div className='product-cat'>
        <article>
        <Product
            id={shortid.generate()}
            image={img3}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img5}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
         <Product
            id={shortid.generate()}
            image={img9}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img6}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img7}
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
            image={img1}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img10}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img11}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img12}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img8}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
        <article>
        <Product
            id={shortid.generate()}
            image={img4}
            price={654}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
        </article>
      </div>
    </div>
    </>
  )
}

export default ProductsPage