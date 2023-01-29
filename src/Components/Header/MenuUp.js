import React from 'react';
import s from './MenuUp.module.css';
import logo from '../../img/Logo.svg';
import Button from '../Button/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuUp = () => {
  const [actives, setActives] = useState('false');

  const Active = () => {
    setActives(!actives);
  };

  return (
    <div className={s.wrapMenuUp}>
      <ul>
        <li>
          <Link to="/" className={s.logo}>
            <img title="my-img" src={logo} alt="my-img" />
          </Link>
        </li>
      </ul>
      <ul>
        <li>Увеличиваем продажи в Вашем бизнесе!</li>
      </ul>
      <ul>
        <li>
          <a href="tel: +74872 79-29-10">+7 (4872) 79-29-10</a>
        </li>
      </ul>
      <ul>
        <li onClick={Active} className={actives ? s.true : s.false}>
          <Button customClass={s.btnUp} text="Заказать звонок" />
        </li>
      </ul>
    </div>
  );
};

export default MenuUp;
