import React from 'react';
import { useState } from 'react';
// import coverimg from '../../img/photo.png';
import Button from '../Button/Button';
import s from './Cover.module.css';

const Cover = () => {
  const [active, setActive] = useState('true');

  const Active = () => {
    setActive(!active);
  };

  return (
    <div className={s.cover}>
      <div className={s.cont}>
        <div className={s.wrapCover}>
          {/* <img className={s.wrapPhoto} title="my-img" src={coverimg} alt="my-img" /> */}
          <div className={s.container}>
            <div className={s.containerContent}>
              <h1>Комплексный интернет-маркетинг</h1>
              <h3>
                Мы помогаем бизнесу находить клиентов быстрее, интегрируя маркетинговые, обучающие и
                технологические продукты
              </h3>
              <div className={s.inputWrap}>
                <Button
                  href="test" // сделать ссылкой
                  customClass={active ? s.btnContentLeft : s.btnContentLeftTrue}
                  onClick={Active}
                  text="Заказать увеличение продаж"
                />
                <Button
                  customClass={active ? s.btnContentRight : s.btnContentRightTrue}
                  onClick={Active}
                  text="Заказать экспертный аудит"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
