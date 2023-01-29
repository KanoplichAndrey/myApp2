import React from 'react';
import s from './CaruselCard.module.css';
import Cart from './Cart';
import { arrow2CaruselCart } from '../../Base/Base';

const CaruselCard = () => {
  return (
    <div className={s.Wrap}>
      <div className={s.wrapContent}>
        <div className={s.Title}>
          <h2>Наши кейсы и портфолио</h2>
        </div>
        <div className={s.Content}>
          {arrow2CaruselCart.map((item, i) => (
            <Cart {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaruselCard;
