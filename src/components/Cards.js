import './Cards.css';
import Medico from '../medico.jpg';
import Educacao from '../educacao.jpg';
import Alimentar from '../alimentacao.jpeg';
import Esporte from '../esporte.jpg';
import { Link } from 'react-router-dom';

export default function Cards() {

    // function MedicoClick() {
    //     navigate('/Medico', {
    //         state: `This is the state: ${Math.random()}`,
    //     });
    // }
    return (
        <div className="Cards">
            <div className="Card">
                <div className="CardFoto">
                    <img src={Medico} alt="FotoCard" />
                </div>
                <div className="CardTitulo">
                    <h1>Setor Médico</h1>
                </div>
                <div className="CardDescricao">
                    <p>Educação em Saúde: A Base do Bem-Estar. </p>
                </div>
                <div className="CardButton">
                    {/* <button onClick={MedicoClick}></button> */}
                    <button> <Link to="/Setor_medico">Setor Médico</Link> </button>
                </div>
            </div>

            <div className="Card">
                <div className="CardFoto">
                    <img src={Esporte} alt="FotoCard" />
                </div>
                <div className="CardTitulo">
                    <h1>Setor Esportivo</h1>
                </div>
                <div className="CardDescricao">
                    <p>Educação e Esporte: A Dupla Vencedora! </p>
                </div>
                <div className="CardButton">
                    {/* <button onClick={MedicoClick}></button> */}
                    <button><Link to="/Setor_esporte">Setor Esportivo</Link> </button>
                </div>
            </div>

            <div className="Card">
                <div className="CardFoto">
                    <img src={Alimentar} alt="FotoCard" />
                </div>
                <div className="CardTitulo">
                    <h1>Setor Alimentício</h1>
                </div>
                <div className="CardDescricao">
                    <p>Qualidade na Mesa, Excelência na Educação! </p>
                </div>
                <div className="CardButton">
                    {/* <button onClick={MedicoClick}></button> */}
                    <button> <Link to="/Setor_alimenticio">Setor Alimentício</Link> </button>
                </div>
            </div>

        </div>
    );
}