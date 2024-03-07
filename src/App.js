import './App.css';
import About from './components/Layout/About';
import Card from './components/Card';
import FloatButton from './components/FloatButton';
import Main from './components/Layout/Main';
import Navbar from './components/Layout/Navbar';
import NavItem from './components/NavItem';
import Projects from './components/Layout/Projects';
import Skills from './components/Layout/Skills';
import SkillsContainer from './components/SkillsContainer';
import Charater1 from './img/charater1.png';
import Charater2 from './img/charater2.png';
import ProjectsData from './data/projectsData';
import SkillsData from './data/skillsData';
import { useState, useEffect } from 'react';
import {FaArrowUp} from 'react-icons/fa'

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
      <Navbar>
        <NavItem text="Principal" href="#"/>
        <NavItem text="Sobre Mim" href="#about"/>
        <NavItem text="Habilidades" href="#skills"/>
        <NavItem text="Projetos" href="#projects"/>
      </Navbar>
      <Main>
        <span>
          <h2 className="marked">João Alisson</h2>
          <h1>- Olá, visitante, seja bem-vindo</h1>
          <h2>Desenvolvedor Fullstack comprometido com inovação e criatividade</h2>
        </span>
        <img src={Charater1} alt="charater 1" />
      </Main>
      <About>
        <img src={Charater2} alt="charater 2"/>
        <article>
          <h2>Sobre Mim</h2>
          <p>Sou João Alisson, um jovem apaixonado por tecnologia e desenvolvimento de software. Com {calculateAge('2005-07-22')} anos de idade e determinação incansável, estou mergulhado no emocionante mundo da análise e desenvolvimento de sistemas. Quero compartilhar com vocês um pouco da minha jornada e dos projetos nos quais tenho trabalhado até agora.</p>
        </article>
      </About>
      <Skills>
        <h2>Habilidades</h2>
        <SkillsContainer skills={SkillsData}/>
      </Skills>
      <Projects>
        {ProjectsData.map((value, index)=><Card key={index} img={value.image} title={value.title} type={value.type} link={value.link} technologies={SkillsData.filter(skill=>value.technologies.includes(skill.name))}/>)}
      </Projects>
      {
        showTopBtn && <FloatButton icon={<FaArrowUp/>} onClick={scrollToTop}/>
      }
    </div>
  );
}

export default App;
