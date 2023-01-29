import React from 'react';
import { useState } from 'react';
const Pages2 = () => {
	const [active, setActive] = useState();
	const handaleClick = (index) => 	{
		setActive(index)
		console.log(index)
	}
	const arrows = ['111111111111111', '222222222222222', '333333333333333', '444444444444444', '555555555555555']
	return (<>
		{/* <button onClick={()=> handaleClick(0)} className={active === 0 ? 'active' : ''}>111111111111111</button>
		<button onClick={()=> handaleClick(1)} className={active === 1 ? 'active' : ''}>222222222222222</button>
		<button onClick={()=> handaleClick(2)} className={active === 2 ? 'active' : ''}>333333333333333</button>
		<button onClick={()=> handaleClick(3)} className={active === 3 ? 'active' : ''}>444444444444444</button>
		<button onClick={()=> handaleClick(4)} className={active === 4 ? 'active' : ''}>555555555555555</button> */}
		{
			arrows.map((item,index)=>(
			<button style={{ color: 'red', fontSize: '20px', marginRight: '150px' }}
			key={index}
			onClick={()=> handaleClick(index)}
			className={active === index ? 'active' : ''}>{item}
			
			</button>
			))	
		}
		</>	
	);
}
export default Pages2;
