import React from 'react';
import s from './SalesDepartment.module.css';
import book from '../../img/book.png';
import Button from '../Button/Button';

const SalesDepartment = () => {
  return (
    <div className={s.wrapSalesDepartment}>
      <div className={s.wrapContainer}>
      <div className={s.leftWrap}>
        <img title="my-img" src={book} alt="my-img" />
      </div>
      <div className={s.rightWrap}>
        <div className={s.wrapColumn}>
          <div className={s.title}> <h2>Вооружение отделов продаж </h2></div>
          <div className={s.wrapContent}>
            <div className={s.left}>
              <p> 99 работающих инструментов, которые помогут увеличить продажи вашей
                компании. Четкие этапы, прозрачная
                навигация позволяют полностью удерживать ситуацию в своих руках.
              </p>
            </div>
            <div className={s.right}>
              <div className={s.rightContent}>
                <p>Если Вы закажете и оплатите
                  продвижение своего сайта, то
                  получите в подарок книгу с
                  персональным АВТОГРАФОМ!
                </p>
              </div>
              <Button customClass={s.btn} text='Хочу получить подарок' />
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SalesDepartment;
