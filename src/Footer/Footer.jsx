import React from 'react';
import './Footer.css';
import shop from '../Assets/logo_big.png';
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsApp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="sho">
      <div className="shopper">
        <img src={shop} alt="shop" />
        <h2>shopper</h2>
      </div> 
      <div className="contact">
        <ul>
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>    
            <li>contact</li>
        </ul>
      </div>
      <div className="media"> 
        <img src= {instagram} alt="insta" /> 
        <img src={pinterest} alt="pinterest" />
        <img src={whatsApp} alt="whatsApp" />         
      </div> </div>
      <hr/>
      <div className="copy">
      <p>  copyright @ 2025 - all right reserved </p>
      </div> 
    </div>
  )      
}

export default Footer;
