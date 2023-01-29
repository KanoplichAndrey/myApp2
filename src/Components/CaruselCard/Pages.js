import React from 'react';
import s from './Pages.module.css';
import { useContext } from 'react';
import { CaruselContext } from './CaruselContext';

export const Pages = ({ children}) => {
  const  {width}  = useContext(CaruselContext);
  return (
    <div
      className={s.pagesMainContainer}
      style={{
       
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}>
      {children}
    </div>
  );
};
