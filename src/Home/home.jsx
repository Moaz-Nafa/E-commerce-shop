import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import IMG from '../assets/home1.png'
import { FaArrowRightLong } from "react-icons/fa6";
import product1 from '../assets/phone.png' 
import product2 from '../assets/headphone3.png' 
import product3 from '../assets/ipad.png' 
import product4 from '../assets/watch.png' 
import { BsTruck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { ImHeadphones } from "react-icons/im";

import Banner from '../Banner/banner';
import Product from '../Product/product';
import shortid from 'shortid';

import img1 from '../assets/pro34.png'
import img2 from '../assets/pro32.png'
import img3 from '../assets/pro19.jpg'
import img4 from '../assets/pro14.jpg'
import img5 from '../assets/pro39.png'
import img6 from '../assets/pro17.png'
import img7 from '../assets/pro16.png'
import img8 from '../assets/pro7.png'
import img9 from '../assets/pro1.png'
import img10 from '../assets/pro21.png'
import img11 from '../assets/pro6.png'
import img12 from '../assets/pro18.png'


const Home = ({id, image, title, price, cat}) => {
  return (
    <>
    <div className='top-banner'>
        <div className='container'>
            <div className='detail'>
                <h2 data-testid="home">The Best Not Book Collection 2024</h2>
                <Link to='/product' className='link'>Shope Now <FaArrowRightLong/></Link>
            </div>
            <div className='img-box'>
                <img src={IMG} alt='product'></img>
            </div>
        </div>
    </div>

    <div className='product-type'>
        <div className='container'>
            <div className='type-box'>
                <div className='img-box'>
                    <img src={product1} alt='product'></img>
                </div>
                <div className='details'>
                    <p>21 products</p>
                </div>
            </div>
            <div className='type-box'>
                <div className='img-box'>
                    <img src={product2} alt='product'></img>
                </div>
                <div className='details'>
                    <p>58 products</p>
                </div>
            </div>
            <div className='type-box'>
                <div className='img-box'>
                    <img src={product3} alt='product'></img>
                </div>
                <div className='details'>
                    <p>66 products</p>
                </div>
            </div>
            <div className='type-box'>
                <div className='img-box'>
                    <img src={product4} alt='product'></img>
                </div>
                <div className='details'>
                    <p>43 products</p>
                </div>
            </div>
        </div>
    </div>
    
    
        <div className='container about__container'>
            <div className='box'>
                <div className='icon'>
                    <BsTruck/>
                </div>
                <div className='details'>
                    <h3>Free Shipping</h3>
                    <p>Order above 100$</p>
                </div>      
            </div>
            <div className='box'>
                <div className='icon'>
                    <BsCurrencyDollar/>
                </div>
                <div className='details'>
                    <h3>Return & Refund</h3>
                    <p>Money back Gaurenty</p>
                </div>      
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent/>
                </div>
                <div className='details'>
                    <h3> Member discount</h3>
                    <p>On Every Order</p>
                </div>      
            </div>
            <div className='box'>
                <div className='icon'>
                    <ImHeadphones/>
                </div>
                <div className='details'>
                    <h3>Customer Support</h3>
                    <p>Any time</p>
                </div>      
            </div>
        </div>
 
  <div className='container home-products'>
    
    <Product
            id={shortid.generate()}
            image={img1}
            price={353}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img2}
            price={202}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img3}
            price={484}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img5}
            price={891}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img6}
            price={334}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img7}
            price={655}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img9}
            price={996}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img10}
            price={755}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img11}
            price={456}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />

    <Product
            id={shortid.generate()}
            image={img12}
            price={321}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img8}
            price={369}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    <Product
            id={shortid.generate()}
            image={img4}
            price={258}
            title="Title: summuing Galaxy Pro.max 10.4-inch Androied"
            cat='tecnolegy'
          />
    </div>

    <Banner/> 
    </>
  )
}

export default Home