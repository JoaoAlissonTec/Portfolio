import './styles.css'

export default function Card({img, title, type, technologies}){
    return(
        <div className='card'>
            <img src={img} alt={title}/>
            <div className='description'>
                <h3>{title}</h3>
                <p>{type}</p>
                <div className='technologies'>
                    {technologies.map((value)=>value.icon)}
                </div>
            </div>
        </div>
    )
}