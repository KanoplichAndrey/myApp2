import React from 'react';
import s from './Footer.module.css';
import { Link } from 'react-router-dom';
import LogoFooter from '../../img/footerLogo.svg';
import VK from '../../img/vk.svg';
import Telegram from '../../img/Telegram.svg';
import { column } from '../../Base/Base';
import Column from './Column';

const Footer = () => {
  return (
    <div className={s.cont}>
      <div className={s.footerWrap}>
      <div className={s.footerContainer}>
        <div className={s.gridContainer}>
          <div className={s.column1}>
            <div className={s.img}>
              <img title="my-img" src={LogoFooter} alt="my-img" />
            </div>
            <div className={s.ourRegion}>
              <p>
                Ваш регион:
                <Link className={s.link} to="контакты">
                  Тула
                </Link>
              </p>
            </div>
            <div className={s.contact}>
              <a href="tel: +74872 79-29-10">+7 (495) 223-66-59</a>
              <p>г. Тула, ул. Пушкинская, 27</p>
            </div>
            <div className={s.requisites}>
              <p>ИНН 123456789</p>
              <p>ОГРН 123456789010</p>
            </div>
            <div className={s.img}>
              <img title="my-img" src={VK} alt="my-img" />
            </div>
            <div>
              <img title="my-img" src={Telegram} alt="my-img" />
            </div>
          </div>
          {column.map((item, i) => {
            return (
              <ul key={i}>
                <Column {...item} />
              </ul>
            );
          })}
        </div>
        <div className={s.endFooter}>
          <p>© 2008-2022 Компания «ДОМ САЙТОВ»</p>
          <p>Карта сайта | Политика конфиденциальности</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
