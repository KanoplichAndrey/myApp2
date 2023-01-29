import React from 'react';
import s from './Reviews.module.css';
import {Carusel}  from './Carusel';
import {arrow2CaruselCart} from '../../Base/Base';
import Cart from './Cart';


const Reviews = () => {

  return (
  
//   <Carusel>
//     <Carusel.Pages>
// <div className={`${s.item} ${s.item1}`}>item1</div>
//     </Carusel.Pages>
//     <Carusel.Pages>
// <div className={`${s.item} ${s.item2}`}>item2</div>
//     </Carusel.Pages>
//     <Carusel.Pages>
//  <div className={`${s.item} ${s.item3}`}>item3</div>
//     </Carusel.Pages>
//   </Carusel>
  <Carusel>
{arrow2CaruselCart.map((item, i) => (
 <Carusel.Pages key={i}> <Cart {...item} key={i} className={`${s.item} ${s.item1}`}/></Carusel.Pages>
))}
 </Carusel>
  );
};

export default Reviews;
