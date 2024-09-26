import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaRegPaste } from "react-icons/fa6";
import pdf from '../../../assets/cv.pdf'

export default function About({ img, age }) {
	useEffect(() => {
		AOS.init();
	});

	function handleDownload() {
		const link = document.createElement("a");
		link.href = pdf; // Caminho local do arquivo
		link.download = "Joao Alisson Rodrigues da Silva - curriculo.pdf"; // Nome do arquivo baixado
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	return (
		<div id="about" className="about" data-aos="fade-right">
			<img src={img} alt="charater 2" />
			<article>
				<h2>Sobre Mim</h2>
				<p>
					Sou João Alisson, um jovem apaixonado por tecnologia e desenvolvimento
					de software. Com {age("2005-07-22")} anos de idade e determinação
					incansável, estou mergulhado no emocionante mundo da análise e
					desenvolvimento de sistemas. Quero compartilhar com vocês um pouco da
					minha jornada e dos projetos nos quais tenho trabalhado até agora.
				</p>
				<button className="download-button" onClick={handleDownload}>
					<p>Currículo</p>
					<FaRegPaste />
				</button>
			</article>
		</div>
	);
}
