import React from 'react';
import { useState, useEffect } from 'react';
import s from './BestSolutions.module.css';
// import { BestSolutionsCart } from '../../Base/Base';
import Cart2BestSolutions from './Cart2BestSolutions';

const BestSolutions = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://636ab9cdb10125b78fe35083.mockapi.io/items')
      .then((res) =>res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  return (
    <div className={s.wrapBestSolutions}>
      <div className={s.cont}>
        <div className={s.wrap}>
        <div className={s.title}>
          <h2>Лучшие решения для увеличения продаж</h2>
        </div>
        <ul className={s.Cart}>
          {items.map((item, i) => {
            return (
              <li className={s.ff} key={i}>
                <Cart2BestSolutions {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default BestSolutions;
