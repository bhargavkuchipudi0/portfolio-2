import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Work from './components/work/work';
import Footer from './components/footer/footer';

import { GitHub, Instagram, Linkedin, Twitter } from './assets/svg';
import { useState } from 'react';

function App() {
  const [fixedHeader, toggleFixedHeader] = useState(0);
  const checkHeaderInView = function() {
    const ele = document.querySelector('.main');
    toggleFixedHeader(ele.getBoundingClientRect().top < 0 ? 1 : 0)
  }
  const profiles = {
    github: 'https://github.com/bhargavkuchipudi0',
    linkedin: 'https://www.linkedin.com/in/bhargav-kuchipudi-389036b6/',
    twitter: 'https://twitter.com/bhargavkuchipu2',
    instagram: 'https://www.instagram.com/bhargav.7895/',
  }
  const openTab = function(link) {
    window.open(profiles[link], '_blank');
  }
  window.addEventListener('scroll', checkHeaderInView);
  return (
    <div className="App">
        <div className="fixed-mail">
          <p>bhargavkuchipudi0@gmail.com</p>
        </div>
        <div className="fixed-follow">
          <ul>
            <li className="pointer" onClick={() => {openTab('github')}}><GitHub width="20px"/></li>
            <li className="pointer" onClick={() => {openTab('linkedin')}}><Linkedin width="20px"/></li>
            <li className="pointer" onClick={() => {openTab('twitter')}}><Twitter width="20px"/></li>
            <li className="pointer" onClick={() => {openTab('instagram')}}><Instagram width="20px"/></li>
          </ul>
        </div>
        <Header headerType={fixedHeader}/>
        <Header headerType={2}/>
        <Main/>
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
        <Footer/>
    </div>
  );
}

export default App;
