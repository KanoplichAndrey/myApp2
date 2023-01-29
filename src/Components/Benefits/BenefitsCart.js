import React from 'react';
import s from './BenefitsCart.module.css';

const BenefitsCart = ({ content, cls }) => {
  return (
    <div className={s.cartWrap}>
      <div className={s.cartWrapLight}>
        <div className={`${s.cartIcon} ${s[cls]}`}></div>
        <div className={s.cartContent}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCart;
