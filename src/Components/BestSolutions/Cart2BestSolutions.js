import React from 'react';
import s from './Cart2BestSolutions.module.css';
import { ReactComponent as Vector6 } from '../../img/Vector6.svg';
import { ReactComponent as Frame } from '../../img/Frame.svg';

const Cart2BestSolutions = ({ clss, cls, title, content, prise, salePrise, sale, more }) => {
  return (
    <div className={s.wrapCart}>
      <div className={`${s.s} ${s[clss]}`}> </div>
      <div className={s.MainText}>
        <div className={s.title}>
          <h2>{title}</h2>
        </div>
        <div className={s.content}>
          <p>{content}</p>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.Info}>
        <div className={s.prise}>
          <Frame />
          <p dangerouslySetInnerHTML={{ __html: prise }}></p>
        </div>
        <div className={s.wrapSale}>
          <div className={`${s.cartIcon} ${s[cls]}`}></div>
          <div className={s.warapslepris}>
            <div className={s.salePrise}>
              <p dangerouslySetInnerHTML={{ __html: salePrise }}></p>
            </div>
            <div className={s.sale}>
              <p dangerouslySetInnerHTML={{ __html: sale }}></p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.more}>
        <p>
          {more}
          <span>
            <Vector6 />{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart2BestSolutions;
