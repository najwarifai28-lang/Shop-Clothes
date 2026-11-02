import React from 'react';
import './Cols.css';

const Cols = (props) => {
  return (
    <div className='cols'>
        <img src={props.image} alt="shop" />
        <h6>{props.name} </h6>
        <div className="price">
            <p>{props.new_price} </p>
            <p>{props.old_price} </p>
        </div>
    </div> 
  )
}

export default Cols;   
 