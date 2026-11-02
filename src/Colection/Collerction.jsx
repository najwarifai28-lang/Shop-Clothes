import React from 'react';
import './Collection.css';
import Collection from '../Assets/new_collections';
import Cols from '../Cols/Cols';

const Collerction = () => {
  return (
    <div className='coll'>
       <h2>new collections</h2>
       <hr />
       <div className="collect">
        {
            Collection.map((item,i)=>{
                return <Cols key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} 
                   old_price={item.old_price}  />
            })
        }
       </div>  
    </div>   
  )
} 
 
export default Collerction;

