import React from 'react';
import s from './Reviews.module.css';
import Carusel  from './Carusel';
import { arrow2CaruselCart } from '../../Base/Base';
import Cart from './Cart';



const Reviews = () => {
  // const item1 = `${s.item} ${s.item1}`
  // const item2 = `${s.item} ${s.item2}`
  // const item3 = `${s.item} ${s.item3}`
  return (
  
  <Carusel>
    {/* <div className={`${s.item} ${s.item1}`}>item1</div>
    <div className={`${s.item} ${s.item2}`}>item2</div>
    <div className={`${s.item} ${s.item3}`}>item3</div> */}

    
          {arrow2CaruselCart.map((item, i) => (
            <Cart {...item} key={i} className={`${s.item} ${s.item1}`}/>
          ))}
         
  </Carusel>

 
  );
};

export default Reviews;
