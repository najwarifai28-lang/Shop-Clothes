import React, { useEffect } from 'react';
import './Producties.css';
import { useParams } from 'react-router-dom';
import all_product from '../Assets/all_product';

const Producties = ({counts}) => {
    const {id}= useParams();
    const product = all_product.find((item)=>item.id === parseInt(id)); 
    useEffect(()=>{
        document.body.style.overflowY="hidden"; 
       window.scrollTo(0,0);
        return()=>{
            document.body.style.overflowY="auto"
        }
    },[]); 
 if(!product){
    return <div>Product not found</div>   
 };              
  
 
    return ( 
    <div className='prod'>   
      <img src={product.image} alt={product.name} />
     <h2>{product.name}</h2> 
     <p>${product.new_price}</p>
     <p><strik>${product.old_price} </strik> </p>
     <div className="size">  
     <h6>select size</h6> 
     <ul>
        <li>s</li>
        <li>m</li>  
        <li>l</li> 
        <li>xl</li>  
        <li>xxl</li>
     </ul> 
     <button>Add to cart</button> </div> 
 
    </div> 
  )  
}    
 
export default Producties; 
   