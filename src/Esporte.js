import './Medico.css';
import React, { useState } from 'react';

export default function Esporte() {
    const [showMessage, setShowMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // Para exibir mensagem de erro
    const [formData, setFormData] = useState({
        nome: '',
        matricula: '',
        setor: 'Academia',
        horario: '07:00h à 07:45h'
    });

    const checkIfSlotIsOccupied = async () => {
        try {
            // Consultar a planilha para verificar se o horário já está ocupado
            const response = await fetch('https://api.sheetbest.com/sheets/9f430570-a7ac-4290-a64b-7cfcc149ed75', {
                method: 'GET',
                headers: {
                    'X-Api-Key': '5fXwQKjxR-H0gAnIrfILmJjrt$q0muscFTRqpVHvW9re8us!Q!VRA7KVAqz-q8mh',
                },
            });

            const data = await response.json();

            // Verifica se já existe um registro para o mesmo setor e horário
            const isOccupied = data.some(item => item.setor === formData.setor && item.horario === formData.horario);

            if (isOccupied) {
                setErrorMessage('Esse horário já está ocupado. Por favor, escolha outro.');
                return false; // Horário ocupado
            }

            setErrorMessage('');
            return true; // Horário disponível
        } catch (error) {
            console.error('Erro ao verificar o horário:', error);
            alert('Erro ao verificar disponibilidade do horário.');
            return false;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        const isSlotAvailable = await checkIfSlotIsOccupied();
        if (!isSlotAvailable) return; // Não envia os dados se o horário estiver ocupado

        // Envia os dados para a planilha
        await sendDataToSheet();
        setShowMessage(true); // Mostra a mensagem de sucesso
        setFormData({ nome: '', matricula: '', setor: 'Academia', horario: '07:00h à 07:45h' }); // Reseta formulário
    };

    const sendDataToSheet = async () => {
        try {
            const response = await fetch('https://api.sheetbest.com/sheets/9f430570-a7ac-4290-a64b-7cfcc149ed75', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': '5fXwQKjxR-H0gAnIrfILmJjrt$q0muscFTRqpVHvW9re8us!Q!VRA7KVAqz-q8mh', // Substitua pela sua chave da API
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar os dados.');
            }
        } catch (error) {
            alert('Erro ao enviar os dados. Verifique a conexão.');
        }
    };

    return (
        <div id="esporte">
            <div className="MedicoAgenda" id="esporteagende">
                <h1 className="tituloMedico">Setor Esportivo</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inforMedico">
                        <div className="centralNomeMedico">
                            Nome do aluno:<br />
                            <input
                                type="text"
                                className="nomeMedico"
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            />
                        </div>
                        <div className="centralMatriculaMedico">
                            Matrícula:<br />
                            <input
                                type="number"
                                className="matriculaMedico"
                                value={formData.matricula}
                                onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="inforMedico">
                        <div className="centralSetorMedico">
                            Selecione opção: <br />
                            <select
                                className="setorMedico"
                                value={formData.setor}
                                onChange={(e) => setFormData({ ...formData, setor: e.target.value })}
                            >
                                <option>Academia</option>
                                <option>Quadra</option>
                            </select>
                        </div>
                        <div className="centralHoraMedico">
                            Selecione horário: <br />
                            <select
                                className="horaMedico"
                                value={formData.horario}
                                onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                            >
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
                {errorMessage && ( // Renderiza a mensagem de erro
                    <div className="errorMessage">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
}
