import './styles.css'
import {FaPlay, FaGithub} from 'react-icons/fa'

export default function Card({project, technologies}){
    return(
        <div className='card'>
            {project.image ? <img src={project.image} alt={project.title}/> : <h3 className="noImage">{project.title}</h3>}
            <div className='description'>
                <h3>{project.title}</h3>
                <p>{project.type}</p>
                <div className='technologies'>
                    {technologies.map((value, index)=><div key={index}>{value.icon}</div>)}
                </div>
                <div className='control'>
                    {project.link? <a href={project.link} target='_blank' rel='noreferrer'><FaPlay color='green'/></a>:<FaPlay color='red'/>}
                    <a href={project.repository} target='_blank' rel='noreferrer'><FaGithub color='white'/></a>
                </div>
            </div>
        </div>
    )
}