import React from 'react';
import './App.css' ;
import Navbar from './Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import Cart from './Cart/Cart';
import ShopCategory from './ShopCategory/ShopCategory';
import Shop from './Shop/Shop';
import Footer from './Footer/Footer';
import Producties from './Producties/Producties';

const App = () => {
  return (   
    <div>   
     <BrowserRouter> 
      <Navbar/>  
       
        
           <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategory category="men"/>} />
          <Route path='/women' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>} /> 
          <Route path='/cart' element={<Cart/>} />
          <Route path='/product/:id' element={<Producties/>} /> 

           </Routes> 
            
        </BrowserRouter>  
         <Footer/>
    </div>   
  )   
} 
     
export default App;    
   
       