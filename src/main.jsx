import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Header from './FreebieCoffee/Header.jsx'
import PersonalizedCoffee from './FreebieCoffee/PersonalizedCoffee.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <PersonalizedCoffee/>
    {/*<App />*/}
  </StrictMode>,
)
