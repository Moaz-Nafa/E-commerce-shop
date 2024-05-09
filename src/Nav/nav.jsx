import React, { useState } from 'react';
import './nav.css';
import { FaTruck } from "react-icons/fa";
import logo from '../assets/logo1.png';
import { LuHeart } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineLogin } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";


const Nav = () => {
  const [search, setSearch] = useState()
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
    <div className='free'>
        <div className='icon'> 
          <FaTruck/>
        </div>
        <p>FREE Shipping when the order is up to 1000$</p>
    </div>
  
    <div className='main-header'>
      <div className='container'>

        <div className='logo'>
        <Link to='/'><img src={logo} alt='logo'></img></Link>
        </div>

      <div className='search-box'>
        <input type='text' value={search} placeholder='Search your product' autoComplete='off' onChange={(e)=> setSearch(e.target.value)}></input>
        <button data-testid='search'  placeholder='Search'>search</button>
      </div>

      <div className='icons'>
        {
          isAuthenticated && 
          (
            <div className='account'>
            <div className='user-icon'><FaRegUser/></div>
              <p>Hello, {user.name}</p>
            </div>
          )
        }
        
        <div className='scound-icon'>
          <Link to='/' className='link'><LuHeart/></Link>
          <Link to='/cart' className='link'><BsBagCheck/></Link>
        </div>
      </div>

      </div>
    </div>

    <div className='header'>
      <div className='container'>

        <div className='nav'>
          <ul>
            <li>
              <Link to='/' className='link'>Home</Link>
            </li>
            <li>
              <Link to='/product' className='link'>Products</Link>
            </li>
            <li>
              <Link to='/about' className='link'>About</Link>
            </li>
            <li>
              <Link to='/contact' className='link'>Contact</Link>
            </li>
          </ul>
        </div>
   
          <div className='auth'>
            {
              isAuthenticated?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CgLogOut/></button>
                :
                <button onClick={() => loginWithRedirect() }><MdOutlineLogin/></button>
            }
          </div>

      </div>
    </div>
    </>
  )
}

export default Nav