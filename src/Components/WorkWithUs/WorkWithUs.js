import React from 'react';
import { useState, useEffect } from 'react';
import s from './WorkWithUs.module.css';

// import { workWithUs } from '../../Base/Base';
// import { json } from 'react-router-dom';

// https://636ab9cdb10125b78fe35083.mockapi.io/items1
const WorkWithUs = () => {
  const [active, setActive] = useState(null);
  const [items1, setItems1] = useState([]);

 useEffect(() => {
    fetch('https://636ab9cdb10125b78fe35083.mockapi.io/items1')
    .then((res)=>res.json())
    .then((res) => {
      setItems1(res);
    });
    }, []);

  const openTab = (e) => setActive(+e.target.dataset.index);

  const TabContent = ({content, img,}) => {

   
    
    return (
      <div className={s.tabcontent}>
        <ul>  
          {
            content.map((content, index)=>(
            <li key={index}>{content}</li>))
          }
        </ul>
        <div className={s.imgq}>
          <div className={` ${s[img]}`}></div>
        </div>
      </div>
    );
  };
 
  return (
    <div className={s.wrapOurResult}>
      <div className={s.wrapContainer}>
      <h1 className={s.h1}> Как начать с нами работать </h1>
      <div className={s.contTab}>
        <div className={s.tab}>
          {items1.map((n, i) => (
            <button
              className={` ${s.tablinks} ${i === active ? s.active : ''} `}
              onClick={openTab}
              data-index={i}
              key={i}>
              {n.title}
            </button>
          ))}
        </div>
        {items1[active] && <TabContent {...items1[active]} />}
      </div>
    </div>
    </div>
  );
};

export default WorkWithUs;
