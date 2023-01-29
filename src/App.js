import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Headerr from './Components/Header/Headerr';
import Footer from './Components/Footer/Footer';
import Home from './Components/Page/Home';
import Pages from './Components/Pages/Pages';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import NotFound from './Components/Page/NotFound';
import { useState, useEffect } from 'react';

function App() {
  const [mobile,setMobile] = useState(false);
  const size = window.innerWidth

  useEffect(() => {  
    if(size <= '768'){setMobile(true)}
  },[window.innerWidth] );
  console.log(mobile);
  return (
    
      <div className="App">
        <Headerr  className='Headerr'/>
        <BurgerMenu className='BurgerMenu'/>
        {/* {mobile ? <BurgerMenu /> : <Headerr />} */}
        <Home />
        <Routes>
          <Route path="/myApp2/" element={<Home />} />
          <Route path="Создание сайтов" element={<Pages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
