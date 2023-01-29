import React from 'react';
import s from './OurCompany.module.css';
const OurCompany = () => {
  return (
    <div className={s.wrapOurCompany}>
      <div className={s.cont}> 
      <div className={s.wrapContainer}>     
      <div className={s.wrapleftOurCompany}>
        <div className={s.leftOurCompany}>
          <h2>О компании</h2>
        </div>
        <div className={s.leftOurCompanyDoun}>
          <p>
            Наша веб-студия создаёт сайты с высокой конверсией, которые легко вывести в ТОП
            поисковых систем. Наша команда полностью ведем Ваш проект от и до, а также помогаем
            сотрудникам на стороне клиента. Вы можете обратиться в веб-студию Дом сайтов для запуска
            своего онлайн бизнеса в Интернете. Если у вас уже есть сайт — мы его оптимизируем,
            превратим в полноценный и эффективный инструмент бизнеса.
          </p>
        </div>
      </div>
      <div className={s.rightOurCompany}>
        <div className={s.img}></div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default OurCompany;
