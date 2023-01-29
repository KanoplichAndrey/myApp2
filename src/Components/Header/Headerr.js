import React from 'react';
import s from './Header.module.css';
import MenuDown from './MenuDown';
import MenuUp from './MenuUp';

const Headerr = () => {
  return (
    <div className={s.cont}>
      <div className={s.wrapHeaderUp}>
        <MenuUp />
      </div>
      <hr></hr>
      <div className={s.wrapHeaderDouwn}>
        <MenuDown />
      </div>
    </div>
  );
};

export default Headerr;
