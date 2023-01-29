import React from 'react';
import s from './TabContent.module.css';

const TabContent = ({ content }) => {
  return (
    <div className={s.tabcontent}>
      <div className={s.tabc}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TabContent;
