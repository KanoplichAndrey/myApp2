import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import s from './MenuDown.module.css';
import { ReactComponent as Search } from '../../img/search.svg';
import { useEffect, useState } from 'react';
import { getHeaderMenu } from './Servis/Servis';

const MenuDown = () => {
  const [menu, setMenu] = useState([]);
  const [open, setOpen] = useState('true');
  const [selcted, setSelcted] = useState();
  


  const list = [
    'Пункт 1',
    'SEO продвижение сайтов в Яндекс',
    'Проведение бизнеса в социальных сетях',
    'Пункт4',
  ];

  useEffect(() => {
    const servisMenu = getHeaderMenu();
    setMenu(servisMenu);
  }, []);

  // useEffect(() => {
  //   setChange(!change)
  // }, []);



  const onClickList = () => {
    setOpen(!open, console.log(open)) 
  }
  const onClickListItem = (index) => {
    setSelcted(index) 
    setOpen('false')
  }
 

  return (
    <div className={s.wrapMenuDown}>
      <div className={s.realit}>
        <button className={s.menuBtn} onClick={(onClickList)}>
          Увеличение продаж
        </button>
        {!open && (
          // <div className={s.active}>
            <ul className={s.dropDownList}>
              {list.map((value, index) => (
                <li className={s.dropDownItem } key={index}>
                  <NavLink to={'/' + value}
                  onClick={()=> onClickListItem(index, console.log(index)) }
                   className={` ${s.dropDownLink} ${selcted === index } ` } 
                  >
                    {value}
                  </NavLink>
                </li>
              ))}
            </ul>
          //  </div>
        )}
      </div>

      <ul className={s.map}>
        {menu.map((value, index) => {
          return (
            <li key={index} >
              <NavLink to={'/' + value}>{value} </NavLink>{' '}
            </li>
          );
        })}
      </ul>
      <Link to="logo" className={s.logo}>
        <Search className={s.search} />
      </Link>

    </div>
   
  );
};

export default MenuDown;
