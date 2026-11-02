import React, { useState } from 'react';
import './Navbar.css' ;
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
const Navbar = () => { 
  const[login,setlogin]=useState(false); 
  const [menu,setmenu]=useState('shop');  
  return (
    <div className='navbar'>
      <div className='navlo'>   
       <img src={logo} alt='logo' />  
       <p>SHOPPER</p> 
       </div> 
       <div>
        <ul>   
          <li onClick={()=>setmenu('shop')}> <Link to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>   
          <li onClick={()=>setmenu('mens')}> <Link to='/men'>Men</Link> {menu==='mens'?<hr/>:<></>}</li>    
          <li onClick={()=>setmenu('womens')}> <Link to='/women'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
          <li onClick={()=>setmenu('kids')}> <Link to='/kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>  
        </ul> 
       </div>    
       <div className='login'> 
        <button onClick={()=>setlogin(true)}>Login</button> 
           {login===true&& <Login close={setlogin}/>}  
        <div className="coun"> 
        <Link to='/cart'><img src={cart_icon} alt='cart' /></Link>   
        <span>0</span>

        </div> 
          
       </div> 
    
    </div>  
  )         
}      
  
export default Navbar ;  
       