import React from 'react';
import icon from '../../img/image 24.svg';
import s from './Cart.module.css';

const Cart = () => {
  return (
    <div className={s.bigWrap}>
      <div className={s.CartWrap}>
        <div className={s.upWrap}>
          <div className={s.contentUp}>
            <p>Результаты продвижения «Оценочной компании №1»</p>
            <p>
              «Оценочная компания №1» – это оценочная компания, в спектр предоставляемых услуг
              которой входит полный набор услуг по оценке движимого и недвижимого имущества.
            </p>
          </div>
          <div className={s.icon}>
            <img title="my-img" src={icon} alt="my-img" />
          </div>
        </div>
        <div className={s.down}>
          <div className={s.downLeftWrap}>
            <div className={s.downTitleLeft}>Цели:</div>
            <ul>
              <li>
                Увеличение количества обращений с помощью комплексных решений интернет-маркетинга.
                Для выполнения поставленных задач была выбрана стратегия продвижения сайта по
                позициям.
              </li>
              <li>Увеличение количества визитов из поисковых систем</li>
              <li>Улучшение видимости ресурса поисковыми системами</li>
              <li>Увеличение количества обращений через сайт</li>
            </ul>
          </div>
          <div>
            <div className={s.lineGrid}></div>
          </div>
          <div className={s.downRightWrap}>
            <div className={s.downTiteRight}>Результат:</div>
            <div className={s.contentRightUp}>
              <div className={s.leftUp}>85%</div>
              <div className={s.rightUp}>
                запросов обширного семантического ядра выведено в ТОП-10 поисковой системы Яндекс
              </div>
            </div>
            <div className={s.contentRightDown}>
              <div className={s.leftDown}>в</div>
              <div className={s.leftDown1}>12</div>
              <div className={s.leftDown2}>раз</div>
              <div className={s.rightDown}>увеличился трафик на сайт</div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.scroll}></div>
    </div>
  );
};

export default Cart;
