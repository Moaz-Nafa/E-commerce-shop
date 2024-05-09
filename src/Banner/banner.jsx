import React from 'react';
import './banner.css'
import { Link } from 'react-router-dom';
import bannerImg from '../assets/home2.png'

const Banner = () => {
  return (
    <>
    <div className='banner'>
        <div className='container'>
            <div className='details'>
                <h4 data-testid='text'>Apple Labtop 10.6 Gen-9</h4>
                <h3>LATEST TECNOLEGY ADDED</h3>
                <p>$994</p>
                <Link to='/product' className='link'> Show Now</Link>
            </div>
            <div className='box-image'>
                <img src={bannerImg} alt='banner img'></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner