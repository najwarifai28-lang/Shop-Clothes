import React from 'react';
import './Home.css';
import homes from '../Assets/hero_image.png';
const Home = () => {
  return (
    <div className='homess'>
    <div className='girlHome'>
      <img src={homes}  alt='home'/>
    </div>
    <div className='word'>
     <p className='new'>NEW ARRIVALS ONLY</p>
     <h2>new <br/>collections <br/> for everyone </h2>
     <button>Latest Collection <i class ="fa-solid fa-arrow-right"></i> </button>
    </div>
    </div>
  ) 
}                

export default Home; 
            