import CardIcon from '../CardIcon'
import './styles.css'

export default function SkillsContainer({skills}){
    return(
        <div className="skillsContainer">
            {skills.map((value)=><CardIcon key={value.name} icon={value.icon} text={value.name}/>)}
        </div>
    )
}