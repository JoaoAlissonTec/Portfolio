import Burger from '../../Burger'
import NavItem from '../../NavItem'
import './styles.css'

export default function Navbar(){
    return(
        <nav className="nav">
            <Burger/>
            <h1>João Alisson</h1>
            <ul className="items">
                <NavItem text="Principal" href="#"/>
                <NavItem text="Sobre Mim" href="#about"/>
                <NavItem text="Projetos" href="#projects"/>
                <NavItem text="Habilidades" href="#skills"/>
            </ul>
        </nav>
    )
}