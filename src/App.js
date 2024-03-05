import './App.css';
import About from './components/About';
import Card from './components/Card';
import FloatButton from './components/FloatButton';
import Main from './components/Main';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillsContainer from './components/SkillsContainer';
import Charater1 from './img/charater1.png';
import Charater2 from './img/charater2.png';
import Mdvie from './img/projects/Mdvie.png';
import ConsultaCep from './img/projects/Consulta-de-CEP.png';
import { useState, useEffect } from 'react';
import {FaHtml5, FaCss3, FaJs, FaJava, FaReact, FaLaravel, FaFigma, FaPhp, FaArrowUp} from 'react-icons/fa'

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

  const skills = [
    {"name":"HTML", "icon":<FaHtml5/>},
    {"name":"CSS", "icon":<FaCss3/>},
    {"name":"Javascript", "icon":<FaJs/>},
    {"name":"React", "icon":<FaReact/>},
    {"name":"PHP", "icon":<FaPhp/>},
    {"name":"Laravel", "icon":<FaLaravel/>},
    {"name":"Java", "icon":<FaJava/>},
    {"name":"Figma", "icon":<FaFigma/>}
  ]

  const projects = [
    {"title":"Mdvie", "type":"Website", "image":Mdvie, "link":"https://mdvie.vercel.app/", "technologies":[
      "React",
      "Javascript"
    ]},
    {"title":"Consulta CEP", "type":"Website", "image":ConsultaCep, "link":"https://joaoalissontec.github.io/consulta-cep/", "technologies":[
      "HTML",
      "CSS",
      "Javascript"
    ]}
  ]

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
        <SkillsContainer skills={skills}/>
      </Skills>
      <Projects>
        {projects.map((value, index)=><Card key={index} img={value.image} title={value.title} type={value.type} link={value.link} technologies={skills.filter(skill=>value.technologies.includes(skill.name))}/>)}
      </Projects>
      {
        showTopBtn && <FloatButton icon={<FaArrowUp/>} onClick={scrollToTop}/>
      }
    </div>
  );
}

export default App;
