import './styles.css'

export default function Card({img, title, type, technologies}){
    return(
        <div className='card'>
            {img ? <img src={img} alt={title}/> : <h3 className="noImage">{title}</h3>}
            <div className='description'>
                <h3>{title}</h3>
                <p>{type}</p>
                <div className='technologies'>
                    {technologies.map((value, index)=><div key={index}>{value.icon}</div>)}
                </div>
            </div>
        </div>
    )
}