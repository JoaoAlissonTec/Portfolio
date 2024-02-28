import './styles.css'

export default function FloatButton({icon, onClick}){
    return(
        <button className='float-button' onClick={onClick}>
            {icon}
        </button>
    )
}