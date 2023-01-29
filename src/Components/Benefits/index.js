import React from 'react';
import s from './Benefits.module.css';
import Cart from './BenefitsCart';
import { benefitsCart } from '../../Base/Base';

const Benefits = () => {
  return (
    <div className={s.conts}>
      <div className={s.BenefitsWrap}>
        <div className={s.BenefitsTitle}>
          <p>Преимущества работы с нами</p>
        </div>

        <ul className={s.ulBenefits}>
          {benefitsCart.map((item, i) => {
            return (
              <li className={s.liBenefits} key={i}>
                <Cart {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
