import React from 'react';
import s from './OurClients.module.css';
import Image1 from '../../img/image1.svg';
import Image2 from '../../img/image2.svg';
import Image3 from '../../img/image3.svg';
import Image4 from '../../img/image4.svg';
import Image5 from '../../img/image5.svg';
import Image6 from '../../img/image6.svg';
import Image7 from '../../img/image7.svg';
import Image8 from '../../img/image8.svg';

const icons = [Image1, Image2, Image3, Image4];
const icons1 = [Image5, Image6, Image7, Image8];

const OurClients = () => {
  return (
    <div className={s.WrapOurClients}>
      <div className={s.WrapContainer}>
      <div className={s.title}>
        <h2>Наши клиенты</h2>
      </div>
      <div className={s.wrapImages}>
        {icons.map((icon, index) => (
          <div className={s.divWrap} key={index}>
            <img title="my-img" src={icon} alt="my-img" />
          </div>
        ))}
      </div>
      <div className={s.wrapImages1}>
        {icons1.map((icon, index) => (
          <div className={s.divWrap1} key={index}>
            <img title="my-img" src={icon} alt="my-img" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurClients;
