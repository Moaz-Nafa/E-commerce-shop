import React from 'react'
import './footer.css';
import IMG from '../assets/logo1.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='footer'>
            <div className='about'>
                <div className='logo'>
                    <img src={IMG} alt='foote-img'></img>
                </div>
                <div className='details'>
                    <p>You can achive whate ever you want you just have to work hard every day long,</p>
                    <div className='icons'>
                        <li><FaFacebookF/></li>
                        <li><FaInstagram/></li>
                        <li><FaTwitter/></li>
                        <li><FaYoutube/></li>
                    </div>
                </div>
            </div>

            <div className='account'>
                <h3>My accounts</h3>
                <ul>
                    <li>Acount</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>

            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terma & Cndition</li>
                </ul>
            </div>
    </div>
    </>
  )
}

export default Footer