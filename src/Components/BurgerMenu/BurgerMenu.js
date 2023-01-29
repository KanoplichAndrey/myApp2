import React from 'react';
import s from './BurgerMenu.module.css';
import Main from './Main';
import logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Search } from '../../img/search.svg';
import { useState } from 'react';

// import Cover from '../Cover/Cover';
// import DigitalPaket from '../DigitalPaket/DigitalPaket';
// import Benefits from '../Benefits';
// import BestSolutions from '../BestSolutions copy/BestSolutions';
// import CaruselCard from '../CaruselCard/CaruselCard';
// import CTA from '../CTA/CTA';
// import OurCompany from '../OurCompany/OurCompany';
// import OurComand from '../OurComand/OurComand';
// import OurResult from '../OurResult/OurResult';
// import OurClients from '../OurClients/OurClients';
// import Reviews from '../Slider/Reviews';
// import WorkWithUs from '../WorkWithUs/WorkWithUs';
// import SalesDepartment from '../SalesDepartment/SalesDepartment';
// import FormBlock from '../FormBlock/FormBlock';


const BurgerMenu = () => {
    const [change, setChange] = useState('false');

    const handlerChange =()=>{
        setChange(!change) 
        if(change){document.body.classList.add('noscroll')}
        if(!change){document.body.classList.remove('noscroll')}

    }
  return (
    <div className={s.app}>
      <nav>
        <div className={`${s.burgerbtn} ${!change ? s.change : '' }`} onClick={handlerChange}>
            <span/>
        </div>

        <Link to="/" className={s.logo}>
            <img title="my-img" src={logo} alt="my-img" />
          </Link>

          <Link to="logo" className={s.logoSearch}>
        <Search className={s.search} />
      </Link> 

      </nav>
      <main>
      {/* <Cover />
        <DigitalPaket />
        <Benefits />
        <BestSolutions />  
        <CaruselCard />
        <CTA />
        <OurCompany />
        <OurComand />
        <OurResult />
        <OurClients />
        <Reviews />
        <WorkWithUs />
        <SalesDepartment />
        <FormBlock /> */}
      </main>
      <Main  change={change} setChange={setChange}/>
    </div>
  );
}

export default BurgerMenu;
