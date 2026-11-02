import React from 'react';
import './Category.css'; 
import { Link } from 'react-router-dom';

const Category = (props) => {
  return ( 
             
    <div className='shoppe'>   
    <Link to={`/product/${props.id}`}> <img src={props.image} alt="shop" />  </Link>   
        <h6>{props.name} </h6>  
        <div className="price">  
            <p> ${props.new_price} </p>  
            <p>${props.old_price} </p>  </div>
        </div>  
          
  )   
}        
   
export default Category;       
                        