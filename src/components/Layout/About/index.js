import './styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About({img, age}){

    useEffect(()=>{
        AOS.init()
    })

    return(
        <div id="about" className="about" data-aos="fade-right">
            <img src={img} alt="charater 2"/>
            <article>
                <h2>Sobre Mim</h2>
                <p>Sou João Alisson, um jovem apaixonado por tecnologia e desenvolvimento de software. Com {age('2005-07-22')} anos de idade e determinação incansável, estou mergulhado no emocionante mundo da análise e desenvolvimento de sistemas. Quero compartilhar com vocês um pouco da minha jornada e dos projetos nos quais tenho trabalhado até agora.</p>
            </article>
        </div>
    )
}