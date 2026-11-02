import React, { useState } from 'react';
import './Login.css';

const Login = ({close}) => {
  const [logines,setlogines]=useState('login')
  return ( 
    <div className='logins1'>
        <div className='login2'>  
          <h1>{logines}</h1>
          {
            logines==='login'?(
              <div className='login3'> 
           <input type="email" placeholder='Your email' required />
           <input type="password"  placeholder='Your password' required/> 
           <div className="cancel">
           <button>Login</button> 
           <button onClick={()=>close(false)}>Cancel</button>
           </div>
            </div>
            ):(   
              <div className='login3'> 
           <input type="text" placeholder='Your name'  required/>
           <input type="email" placeholder='Your email' required />
           <input type="password"  placeholder='Your password' required/>
           <div className="cancel"> 
           <button>Create Account</button>
           <button onClick={()=>close(false)}>Cancel</button> 
           </div>
           
               </div> 
            ) 
          }
            <div className='check'> 
              <input type="checkbox" /> 
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <div className="account">
{ 
              logines==='login'?<p>Create a new account? <span onClick={()=>setlogines('sign up')}>Click here</span></p>:<p>Al ready have a account?<span onClick={()=>setlogines('login')}>Login here</span></p>
            }
            </div>
            
        </div> 
    </div>
  ) 
} 
 
export default Login;
      