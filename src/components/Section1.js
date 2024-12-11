import './Section1.css';
import Ifrn from '../ifrn.jpg';
import LogoIF from '../ifrn.jpg';

export default function Section1() {
    return (
        <div Class="Section">
            <div class="section1">
                <div class="SectionFoto">
                    <div><img scr={LogoIF} alt="IFRN" /></div>
                </div>
                <div class="SectionInformacao">
                    <h1>O que o site te proporciona?</h1>
                    <p>
                        A organização de horários e a gestão de recursos em instituições educacionais têm se tornado desafios cada vez maiores,
                        especialmente com a crescente demanda por espaços físicos e serviços compartilhados. No Instituto Federal de Educação,
                        Ciência e Tecnologia do Rio Grande do Norte (IFRN), Campus Macau, essa necessidade é evidente em diversos setores, como
                        laboratórios e salas de aula. A falta de um sistema eficiente para o agendamento e controle desses recursos pode resultar
                        em sobrecargas, uso inadequado ou conflitos de horários, comprometendo o funcionamento da instituição. Este projeto visa
                        desenvolver uma plataforma web de agendamento que otimize o gerenciamento de horários e recursos, utilizando a biblioteca
                        React. A proposta não apenas busca melhorar a eficiência administrativa, mas também proporcionar uma experiência mais
                        satisfatória para alunos, professores e funcionários, promovendo uma organização eficaz das atividades acadêmicas e
                        administrativas. A pesquisa destaca a importância da adoção de tecnologias digitais, que têm o potencial de transformar
                        a gestão educacional, garantindo um ambiente mais funcional e integrado.
                    </p>
                </div>
            </div>
        </div>
    );

}