import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Work from './components/work/work';
import Footer from './components/footer/footer';

import Github from './assets/github';
import Instagram from './assets/instagram';
import Linkedin from './assets/linkedin';
import Twitter from './assets/twitter';

function App() {
  return (
    <div className="App">
        <div className="fixed-mail">
          <p>bhargavkuchipudi0@gmail.com</p>
        </div>
        <div className="fixed-follow">
          <ul>
            <li><Github className="follow-icn" width="20px"/></li>
            <li><Instagram className="follow-icn" width="20px"/></li>
            <li><Linkedin className="follow-icn" width="20px"/></li>
            <li><Twitter className="follow-icn" width="20px"/></li>
          </ul>
        </div>
        <Header/>
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
