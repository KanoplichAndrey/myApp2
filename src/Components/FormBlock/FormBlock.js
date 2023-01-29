import React from 'react';
import s from './FormBlock.module.css';
import ContactForm from './ContactForm';
const FormBlock = () => {
  return (
    <div className={s.wrapForm}>
      <div className={s.wrapcontainer}>
        <div className={s.formContent}>
            <div className={s.title}>
                <h2>Найдем клиентов в Интернете для Вас</h2>
                <p> Для заказа стратегии продвижения в Москве или другом городе просто заполни заявку
                    или закажи обратный звонок. Менеджер по работе с клиентами выйдет на связь и подготовит
                    персональное коммерческое предложение, составленное с учетом желаемых
                    целей и возможностей.
                </p>
            </div>
            <div>
           <ContactForm />
            </div>
        </div>
    </div>
    </div>
  );
}

export default FormBlock;
