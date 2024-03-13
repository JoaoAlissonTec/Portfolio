import SkillsContainer from '../../SkillsContainer'
import './styles.css'

export default function Skills({skills}){
    return(
        <div className="skills" id="skills">
            <h2>Habilidades</h2>
            <SkillsContainer skills={skills}/>
        </div>
    )
}