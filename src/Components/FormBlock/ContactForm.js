import React from 'react';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [checked, setChecked] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('name:', name);
    console.log('email:', email);
    console.log('checked:', { checked });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.input1}>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Имя"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input className={s.checkbox} type="checkbox" onChange={() => setChecked(!checked)} />
        <span>Я даю свое согласие на обработку персональных данных</span>
      </div>
      <button type="submit">Отправить заявку</button>
    </form>
  );
};

export default ContactForm;
