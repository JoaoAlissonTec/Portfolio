import './styles.css'

export default function CardIcon({icon, text}){
    return(
        <div className="cardIcon">
            {icon}
            <h3>{text}</h3>
        </div>
    )
}