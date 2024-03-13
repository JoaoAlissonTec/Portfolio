import './styles.css'

export default function Link({link, content, className}){
    return (
        <li className='linkItem'>
            <a href={link} target='_blank' rel='noreferrer' className={`footerLink ${className}`}>{content}</a>
        </li>
    )
}