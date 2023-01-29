import React from 'react';
import s from'./BestSolutions.module.css';
import { BestSolutionsCart } from '../../Base/Base';
import Cart2BestSolutions from './Cart2BestSolutions';

const  BestSolutions = () => {
  
  return (
	<div className={s.wrapBestSolutions} >
	   <div className={s.wrap} >
			<div className={s.title}>
				<h2>Лучшие решения для увеличения продаж</h2>
			</div>
			<ul className={s.Cart}>
			{ BestSolutionsCart.map((item, i) => {
				  return <li className={s.li} key={i}><Cart2BestSolutions {...item}  /></li>	  
			   })}
			</ul>	   
	   </div>
	</div>
  );
}

export default BestSolutions;