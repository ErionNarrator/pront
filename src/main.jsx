import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react';
import Header from './FreebieCoffee/Header.jsx'
import ReactDOM from 'react-dom/client';
import PersonalizedCoffee from './FreebieCoffee/PersonalizedCoffee.jsx'
import SectionInfoA from "./FreebieCoffee/SectionInfoA.jsx";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <Header/>
      <PersonalizedCoffee/>
          <SectionInfoA/>
    {/*<App />*/}
  </StrictMode>,
)
