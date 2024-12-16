import './Medico.css';
import React, { useState } from 'react';

export default function Medico() {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',  // Dados estáticos para teste
        matricula: '', 
        setor: 'Psicologo',
        horario: '07:30hrs',
    });

    const sendDataToSheet = async () => {
        try {
            console.log('Enviando dados:', formData); // Log para verificar os dados sendo enviados
            const response = await fetch('https://api.sheetbest.com/sheets/23fcfd1f-857c-4fbf-b101-2ed15bb27e24', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': '5fXwQKjxR-H0gAnIrfILmJjrt$q0muscFTRqpVHvW9re8us!Q!VRA7KVAqz-q8mh',
                },
                body: JSON.stringify(formData),
            });
    
            const responseData = await response.json();
            console.log('Resposta da API:', responseData); // Log da resposta da API
    
            if (response.ok) {
                setShowMessage(true); // Exibe a mensagem de sucesso
                setFormData({ nome: '', matricula: '', setor: 'Psicologo', horario: '07:30hrs' }); // Reseta o formulário
            } else {
                alert('Erro ao enviar os dados. Verifique a conexão.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro na comunicação com a API.');
        }
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        sendDataToSheet();
    }

    return (
        <div className='centralMedico'>
            <div className='MedicoAgenda'>
                <h1 className='tituloMedico'>Setor Médico</h1>
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
                                <option>Psicologo</option>
                                <option>Curativos</option>
                                <option>Dentista</option>
                                <option>Atendimento Rapido</option>
                            </select>
                        </div>
                        <div className="centralHoraMedico">
                            Selecione horário: <br />
                            <select 
                                className="horaMedico" 
                                value={formData.horario} 
                                onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                            >
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
                    <div className="buttonMedico">
                        <button>Agendar</button>
                    </div>
                </form>
                {showMessage && (
                    <div className="successMessage">
                        Seu agendamento foi concluído com sucesso!
                    </div>
                )}
            </div>
        </div>
    );
}
