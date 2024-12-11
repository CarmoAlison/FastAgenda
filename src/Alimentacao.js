import React, { useEffect, useState } from 'react';
import './Medico.css';

export default function Medico() {
    const [tomorrowDate, setTomorrowDate] = useState('');
    const [showMessage, setShowMessage] = useState(false); // Estado para controlar a mensagem de sucesso

    useEffect(() => {
        function getTomorrowDate() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            // Formatar a data no formato desejado (DD/MM/YYYY)
            const day = String(tomorrow.getDate()).padStart(2, '0');
            const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
            const year = tomorrow.getFullYear();

            return `${day}/${month}/${year}`;
        }

        setTomorrowDate(getTomorrowDate()); // Atualiza o estado com a data de amanhã
    }, []);

    function handleSubmit(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        setShowMessage(true); // Mostra a mensagem de sucesso
    }

    return (
        <div className='centralMedico'>
            <div className='MedicoAgenda'>
                <h1 className='tituloMedico'>Setor Alimentício</h1>
                <form onSubmit={handleSubmit}> {/* Formulário com evento onSubmit */}
                    <div className="inforMedico">
                        <div className="centralNomeMedico">
                            Nome do aluno:<br />
                            <input type="text" className="nomeMedico" required />
                        </div>
                        <div className="centralMatriculaMedico">
                            Matrícula:<br />
                            <input type="number" className="matriculaMedico" required />
                        </div>
                    </div>
                    <div className="inforMedico">
                        <div className="centralSetorMedico">
                            Selecione opção: <br />
                            <select className="setorMedico" required>
                                <option>Almoço</option>
                                <option>Janta</option>
                            </select>
                        </div>
                        <div className="centralHoraMedico">
                            Selecione horário: <br />
                            <select className="setorMedico" required>
                                <option>{tomorrowDate}</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttonMedico">
                        <button type="submit">Agendar</button>
                    </div>
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
