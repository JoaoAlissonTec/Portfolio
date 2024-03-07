import './styles.css'

export default function Projects({children}){
    return (
        <div className="projects" id="projects">
            <h2>Projetos</h2>
            <div className='projects-container'>
                {children}
            </div>
        </div>
    )
}