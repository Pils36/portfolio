import React, { useState, useEffect } from 'react';
import Home from './page/Home';
import './assets/css/main.css';

function App() {
  const [myheight, setHeight] = useState();
  useEffect(() => {
    document.getElementsByClassName('ds-banner')[0].style.marginTop = `${myheight}px`;
    scrollFunction();
  }, [myheight])

  const scrollFunction = () => {
    const mastheadheight = document.getElementsByClassName('ds-header')[0].offsetHeight;
    setHeight(mastheadheight);
    window.addEventListener('scroll', () => {

      if (window.scrollY >= 10) {
        document.getElementsByClassName('ds-header')[0].classList.add('ds-fixed-header')
      }
      else {
        document.getElementsByClassName('ds-header')[0].classList.remove('ds-fixed-header')
      }

    });

  }

  return <Home />;
}

export default App;
