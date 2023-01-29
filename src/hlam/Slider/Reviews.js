import React from 'react';
import s from './Reviews.module.css';
import { MultipleItems } from './MultipleItems';
import Button from '../../Components/Button/Button';

const Reviews = () => {
  return (
    <div className={s.Testimonials}>
      <div className={s.wrapContainer}>
      <div className={s.title}>
        <h2>Отзывы наших клиентов</h2>
      </div>
      <MultipleItems />
      <div className={s.button}>
        <Button customClass={s.btn} text="Смотреть все отзывы" />
      </div>
    </div>
    </div>
  );
};

export default Reviews;
