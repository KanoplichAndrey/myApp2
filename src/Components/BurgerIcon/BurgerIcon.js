import React from 'react';

const BurgerIcon = () => {
  const [change, setChange] = useState('false');
  return (
    <div
      className={`${s.container} ${!change ? s.change : ''}`}
      onClick={() => {
        setChange(!change);
      }}>
      <div className={`${s.bar1} ${!change ? s.change : ''}`}></div>
      <div className={`${s.bar2} ${!change ? s.change : ''}`}></div>
      <div className={`${s.bar3} ${!change ? s.change : ''}`}></div>
    </div>
  );
};

export default BurgerIcon;
