import './styles.css'

export default function NavItem({text, href, onClick}){
    return (
        <li className="item">
            <a href={href} className="link" onClick={onClick}>{text}</a>
        </li>
    )
}