import './App.css';
import About from './components/About';
import Main from './components/Main';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import Charater1 from './img/charater1.png';
import Charater2 from './img/charater2.png';

function App() {

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

  return (
    <div className="App">
      <Navbar>
        <NavItem text="Principal" href="#"/>
        <NavItem text="Sobre Mim" href="#about"/>
        <NavItem text="Habilidades" href="#"/>
        <NavItem text="Projetos" href="#"/>
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
    </div>
  );
}

export default App;
