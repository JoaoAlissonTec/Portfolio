import './App.css';
import About from './components/Layout/About';
import FloatButton from './components/FloatButton';
import Main from './components/Layout/Main';
import Navbar from './components/Layout/Navbar';
import Projects from './components/Layout/Projects';
import Skills from './components/Layout/Skills';
import Charater1 from './img/charater1.png';
import Charater2 from './img/charater2.png';
import ProjectsData from './data/projectsData';
import SkillsData from './data/skillsData';
import { useState, useEffect } from 'react';
import {FaArrowUp} from 'react-icons/fa'
import Footer from './components/Layout/Footer';
import AboutMeData from './data/AboutMeData';

function App() {

  const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

  function calculateAge(bornday) {
    var today = new Date();
    var date = new Date(bornday);
    var yearsOld = today.getFullYear() - date.getFullYear();
    var month = today.getMonth() - date.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
      yearsOld--;
    }

    return yearsOld;
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  return (
    <div className="App">
      <Navbar/>
      <Main img={Charater1}/>
      <About img={Charater2} age={calculateAge}/>
      <Projects project={ProjectsData} skills={SkillsData}/>
      <Skills skills={SkillsData}/>
      <Footer abouteMe={AboutMeData}/>
      {showTopBtn && <FloatButton icon={<FaArrowUp/>} onClick={scrollToTop}/>}
    </div>
  );
}

export default App;
