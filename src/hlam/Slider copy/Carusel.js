import React, { cloneElement } from 'react';
import s from './Carusel.module.css';
import { useState, useEffect, Children } from 'react';

const PAGE_WIDTH = 450
const Carusel = ({children}) => {
	const [pages, setPages]  = useState([]);
	const [offset, setOffset]  = useState(0);

	const handleLeftArrowClick = () =>{
		setOffset((currentOffset)=>{
			const newOffset = currentOffset + PAGE_WIDTH
			
			return Math.min(newOffset, 0) 
		})
	}
	const handleRightArrowClick = () =>{
		setOffset((currentOffset)=>{
			const newOffset = currentOffset - PAGE_WIDTH
			
			const maxOffset = -(PAGE_WIDTH * (pages.length -1))
			 console.log(newOffset, maxOffset);
			return Math.max(newOffset, maxOffset) 
		})
	}

	useEffect(() => {
		setPages(
			Children.map(children, child => {
				return cloneElement(child,{
					style:{
						height: '100%',
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`,
						
					},
				})
			})
		)
	}, []);
	
  return (
	<>
	  <div className={s.mainContainer} >
		<div className={s.arrowLeft} onClick={handleLeftArrowClick} />
		<div className={s.window}>
			<div className={s.allPagesContainer} style={{
				transform: `translateX(${offset}px)`,
			}}>{pages}
			</div>
		</div>
		<div className={s.arrowRight} onClick={handleRightArrowClick} />
	  </div>
	</>
  );
}

export default Carusel;
