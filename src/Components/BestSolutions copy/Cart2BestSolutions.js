import React from 'react';
import s from './Cart2BestSolutions.module.css';
import { ReactComponent as Vector6 } from '../../img/Vector6.svg';
import { ReactComponent as Frame } from '../../img/Frame.svg';

const Cart2BestSolutions = ({ li, clss, cls, title, content, prise, salePrise, sale, more }) => {
  return (
    <div className={`${s.wrapCart} ${s[li]}`}>
      <div className={`${s.s} ${s[clss]}`}> </div>
      <div className={s.title}>
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      </div>
      <div className={s.content}>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
      <div className={s.line}></div>
      <div className={s.Info}>
        <Frame />
        <p className={s.prise} dangerouslySetInnerHTML={{ __html: prise }}></p>
        <div className={`${s.cartIcon} ${s[cls]}`}> </div>
        <div className={s.warapslepris}>
          <div className={s.salePrise}>
            <p dangerouslySetInnerHTML={{ __html: salePrise }}></p>
          </div>
          <div className={s.sale}>
            <p dangerouslySetInnerHTML={{ __html: sale }}></p>
          </div>
        </div>
      </div>
      <div className={s.more}>
        <span>
          {more}
          <span>
            <Vector6 className={s.arrow} />{' '}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Cart2BestSolutions;
