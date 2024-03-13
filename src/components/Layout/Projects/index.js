import Card from '../../Card'
import './styles.css'

export default function Projects({project, skills}){
    return (
        <div className="projects" id="projects">
            <h2>Projetos</h2>
            <div className='projects-container'>
                {project.map((value)=><Card key={value.id} img={value.image} title={value.title} type={value.type} link={value.link} technologies={skills.filter(skill=>value.technologies.includes(skill.name))}/>)}
            </div>
        </div>
    )
}