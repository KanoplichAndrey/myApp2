import React from 'react';
import Button from '../Button/Button';
import s from './Cart.module.css';

const Cart = ({ title, seo, content, sale, text, cls }) => {
  return (
    <div className={s.cartWrap1}>
      <div className={`${s.f} ${s[cls]}`}>
        <div className={s.wrapContent}>
          <div className={s.title}>
            <p dangerouslySetInnerHTML={{ __html: title }}></p>
          </div>
          <hr className={s.hr}></hr>
          <div className={s.seo}>
            <p dangerouslySetInnerHTML={{ __html: seo }}></p>
          </div>
          <hr className={s.hr}></hr>
          <div className={s.content}>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </div>
          <div className={s.sale}>
            <p dangerouslySetInnerHTML={{ __html: sale }}></p>
          </div>
          <div className={s.btnCartWrap}>
            <Button customClass={s.btnCart} text={text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
