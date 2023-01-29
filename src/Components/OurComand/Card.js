import React from 'react';
import s from './Card.module.css';

const Card = ({ cls, name, jobTitle }) => {
  return (<>
    <div className={s.cartWrap}>
      <div className={s.hj}>
        <div className={`${s.p} ${s[cls]}`}>
        </div >
      </div>
    </div>
    <p className={s.names}>{name}</p>
    <p className={s.jobTitles}>{jobTitle}</p>
  </>
  );
}

export default Card;
