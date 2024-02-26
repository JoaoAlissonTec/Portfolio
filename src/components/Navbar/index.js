import Burger from '../Burger'
import './styles.css'

export default function Navbar({children}){
    return(
        <nav className="nav">
            <Burger/>
            <h1>Logo</h1>
            <ul className="items">
                {children}
            </ul>
        </nav>
    )
}