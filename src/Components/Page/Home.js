import React from 'react';

import Cover from '../Cover/Cover';
import DigitalPaket from '../DigitalPaket/DigitalPaket';
import Benefits from '../Benefits';
import BestSolutions from '../BestSolutions copy/BestSolutions';
import CaruselCard from '../CaruselCard/CaruselCard';
import CTA from '../CTA/CTA';
import OurCompany from '../OurCompany/OurCompany';
import OurComand from '../OurComand/OurComand';
import OurResult from '../OurResult/OurResult';
import OurClients from '../OurClients/OurClients';
import WorkWithUs from '../WorkWithUs/WorkWithUs';
import SalesDepartment from '../SalesDepartment/SalesDepartment';
import FormBlock from '../FormBlock/FormBlock';


const Home = () => {
  return (
    <>
    
        <Cover   />
        <DigitalPaket />
        <Benefits />
         <BestSolutions />  
        <CaruselCard />
        <CTA />
        <OurCompany />
        <OurComand />
        <OurResult />
        <OurClients />
        {/* <Reviews /> */}
        <WorkWithUs />
        <SalesDepartment />
        <FormBlock /> 
    </>
  );
}

export default Home;
