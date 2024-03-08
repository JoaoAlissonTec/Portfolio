import './styles.css'
export default function FooterContent({title, children, className}){
    return (
        <div className="footerContent">
            <h3>{title}</h3>
            <ul className={className}>
              {children}
            </ul>
        </div>
    )
}