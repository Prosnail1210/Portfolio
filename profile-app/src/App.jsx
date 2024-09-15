import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Project from './components/Project';
import { WiSolarEclipse } from "react-icons/wi";

function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    document.documentElement.setAttribute('theme',currentTheme)
  })
  
  const changeTheme=()=>{
    const currentTheme = document.documentElement.getAttribute('theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('theme',newTheme)
    localStorage.setItem('theme',newTheme)
  }
  return (
    <div className='container'>
      <header>
        <Nav/>
      </header>
      <main>
        <Intro/>
        <About/>
        <Project/>
        <Footer/>
      </main>
      <div className='theme' onClick={changeTheme}>
        <WiSolarEclipse/>
      </div>
    </div>
  );
}

export default App;
