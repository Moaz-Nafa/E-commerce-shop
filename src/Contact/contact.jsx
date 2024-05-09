import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className='contact-container'>
        <div className='content'>
            <h1># Contact Us</h1>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value='' placeholder='Enter Your Name' autoComplete='off'/>
                    <input type='email' name='email' value='' placeholder='Enter Your email' autoComplete='off'/>
                    <input type='text' name='Subject' value='' placeholder='Enter Your Subject' autoComplete='off'/>
                    <textarea name='Subject' value='' placeholder='Your Message' autoComplete='off'></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact