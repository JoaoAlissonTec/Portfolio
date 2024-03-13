import FooterContent from '../../FooterContent'
import Link from '../../Link'
import './styles.css'

export default function Footer({abouteMe}){
    return (
        <div className="footer">
            <div>
                <h1>João Alisson</h1>
            </div>
            <div className='links'>
                <FooterContent title="Redes" className="social">
                    {abouteMe.social.map((value)=><Link key={value.id} link={value.link} content={value.icon}/>)}
                </FooterContent>
                <FooterContent title="Contatos" className="contact">
                    {abouteMe.contact.map((value)=><Link key={value.id} link={value.link} content={[value.icon, value.name]} className="contactContent"/>)}
                </FooterContent>
            </div>
        </div>
    )
}