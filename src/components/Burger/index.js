import NavItem from '../NavItem'
import {useState} from 'react'
import './styles.css'
export default function Burger(){
    const [active, setactive] = useState(false);
    function handleOnChange(){
        setactive(!active)
    }
    return (
        <div id="menuToggle">
            <input type="checkbox" checked={active} onChange={handleOnChange}/>
            <span></span>
            <span></span>
            <span></span>
            
            <ul id="menu">
                <NavItem text="Principal" href="#" onClick={handleOnChange}/>
                <NavItem text="Sobre Mim" href="#about" onClick={handleOnChange}/>
                <NavItem text="Habilidades" href="#skills" onClick={handleOnChange}/>
                <NavItem text="Projetos" href="#projects" onClick={handleOnChange}/>
            </ul>
        </div>
    )
}