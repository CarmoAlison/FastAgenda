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
                <h1 className='tituloMedico'>Setor Médico</h1>
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
                                <option>Psicologo</option>
                                <option>Curativos</option>
                                <option>Dentista</option>
                                <option>Atendimento Rapido</option>
                            </select>
                        </div>
                        <div className="centralHoraMedico">
                            Selecione horário: <br />
                            <select className="horaMedico">
                                <option>07:30hrs</option>
                                <option>08:00hrs</option>
                                <option>08:30hrs</option>
                                <option>09:00hrs</option>
                                <option>09:30hrs</option>
                                <option>10:00hrs</option>
                                <option>10:30hrs</option>
                                <option>11:00hrs</option>
                                <option>13:30hrs</option>
                                <option>14:00hrs</option>
                                <option>14:30hrs</option>
                                <option>15:00hrs</option>
                                <option>15:30hrs</option>
                                <option>16:00hrs</option>
                                <option>16:30hrs</option>
                                <option>17:00hrs</option>
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