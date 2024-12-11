import './Medico.css';
import React, { useEffect, useState } from 'react';

export default function Medico() {
    const [showMessage, setShowMessage] = useState(false);
    function handleSubmit(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        setShowMessage(true); // Mostra a mensagem de sucesso
    }
    return (
        <div className='centralMedico'>
            <div className='MedicoAgenda'>
                <h1 className='tituloMedico'>Setor Esportivo</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inforMedico">
                        <div className="centralNomeMedico">
                            Nome do aluno:<br />
                            <input type="Text" className="nomeMedico" />
                        </div>
                        <div className="centralMatriculaMedico">
                            Matrícula:<br />
                            <input type="number" className="matriculaMedico" />
                        </div>
                    </div>
                    <div className="inforMedico">
                        <div className="centralSetorMedico">
                            Selecione opção: <br />
                            <select className="setorMedico">
                                <option>Academia</option>
                                <option>Quadra</option>
                            </select>
                        </div>
                        <div className="centralHoraMedico">
                            Selecione horário: <br />
                            <select className="horaMedico">
                                <option>07:00h à 07:45h</option>
                                <option>07:45h à 08:30h</option>
                                <option>08:50h à 09:35h</option>
                                <option>09:35h à 10:20h</option>
                                <option>10:30h à 11:15h</option>
                                <option>11:15h à 12:00h</option>
                                <option>13:00h à 13:45h</option>
                                <option>13:45h à 14:30h</option>
                                <option>14:50h à 15:35h</option>
                                <option>15:35h à 16:20h</option>
                                <option>16:30h à 17:15h</option>
                                <option>17:15h à 18:00h</option>

                            </select>
                        </div>

                    </div>
                    <div className="buttonMedico"><button>Agendar</button></div>
                </form>
                {showMessage && ( // Renderiza a mensagem de sucesso apenas se showMessage for true
                    <div className="successMessage">
                        Seu agendamento foi concluído com sucesso!
                    </div>
                )}
            </div>
        </div>
    );
}