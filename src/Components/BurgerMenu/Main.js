import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Main.module.css';
import { menu } from '../Header/base/Base';

const Main = ({change, setChange}) => {
  return (
    <div className={`${s.menu} ${!change ? s.change : '' }`}>
      <div className={s.blur} />
      <div className={s.menuContent}>
        {/* <div className={s.menuHeader}>{header}</div> */}
        <ul>
          {menu.map((value, index) => {
            return (
              <li key={index}>
                <NavLink to={'/' + value}>{value} </NavLink>{' '}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Main;
