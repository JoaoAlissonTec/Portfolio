import './styles.css'

export default function Main({img}){
    return(
        <div id="main" className="main">
            <span>
                <h2 className="marked">João Alisson</h2>
                <h1>- Olá, visitante, seja bem-vindo</h1>
                <h2>Desenvolvedor Fullstack comprometido com inovação e criatividade</h2>
            </span>
            <img src={img} alt="charater 1" />
        </div>
    )
}