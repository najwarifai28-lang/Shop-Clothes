import React from 'react';
import './Email.css';

const Email = () => {
  return (
    <div className='subsc'>
      <div className="offers">
        <h2>Get Exclusive Offers On Your Email </h2>
        <p>Subscribe to our newletter and stay updated</p>
        <div className="input">
            <input type="email"  placeholder='Your Email id' required/>
            <button>subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Email;
