import React, { useEffect, useState } from 'react';
import './ShopCategory.css';
import AllProduct from '../Assets/all_product';
import Category from '../Catogery/Category';
import Mens from '../Assets/banner_mens.png';
import Womens from '../Assets/banner_women.png';
import Kids from '../Assets/banner_kids.png';

const ShopCategory = (props) => {
 // let bannerShown=false; 
 const categor= props.category;
 const [scroll,setscroll]=useState(false);
 useEffect (()=>{
  const handleScroll=()=>{
    if(window.scrollY>1850){
      setscroll(true);
    }
    else{ 
      setscroll(false)
    } 
     }; 
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
 
 },[]);
    
  return (   
    <div className='categore'> 
      { 
        categor==='men'?<img className='men' src={Mens} alt='men'/> : categor==='kid'? <img className='men' src={Kids} alt='kid'/> : <img className='men' src={Womens}  alt='women'/>
      }
       <div className='categorys'>   
         {   
          AllProduct.map((item,i)=>{  
             if(props.category===item.category){ 
          //  const showBanner=!bannerShown; 
       //     bannerShown=true;
              return <Category key={i} id={item.id} category={item.category} image={item.image} name={item.name} new_price={item.new_price} 
                   old_price={item.old_price} 
                              
                   />           
             }     })        
         }         
       </div>   
       <div className="arrow" onClick={()=> window.scrollTo({top:0,behavior:"smooth"})} >  
       
        
          <i className="fa-solid fa-arrow-up"></i>
        
       
       </div> 
          
    </div>   
  )      
}   
                   
export default ShopCategory;     
   