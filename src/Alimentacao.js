import React, { useEffect, useState } from 'react';
import './Medico.css';

export default function Alimenticio() {
    const [tomorrowDate, setTomorrowDate] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        matricula: '',
        setor: 'Almoço',
        horario: tomorrowDate
    });

    useEffect(() => {
        function getTomorrowDate() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            const day = String(tomorrow.getDate()).padStart(2, '0');
            const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
            const year = tomorrow.getFullYear();

            return `${day}/${month}/${year}`;
        }

        setTomorrowDate(getTomorrowDate());
        setFormData({ ...formData, horario: getTomorrowDate() });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendDataToSheet();
        setShowMessage(true);
        setFormData({ nome: '', matricula: '', setor: 'Almoço', horario: tomorrowDate });
    };

    const sendDataToSheet = async () => {
        try {
            const response = await fetch('https://api.sheetbest.com/sheets/612d40e4-c447-4679-ac7c-bb1ca08daed3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': '5fXwQKjxR-H0gAnIrfILmJjrt$q0muscFTRqpVHvW9re8us!Q!VRA7KVAqz-q8mh'
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
        <div className='centralMedico' id='alimento'>
            <div className='MedicoAgenda'>
                <h1 className='tituloMedico'>Setor Alimentício</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inforMedico">
                        <div className="centralNomeMedico">
                            Nome do aluno:<br />
                            <input
                                type="text"
                                className="nomeMedico"
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                required
                            />
                        </div>
                        <div className="centralMatriculaMedico">
                            Matrícula:<br />
                            <input
                                type="number"
                                className="matriculaMedico"
                                value={formData.matricula}
                                onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
                                required
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
                                required
                            >
                                <option>Almoço</option>
                                <option>Janta</option>
                            </select>
                        </div>
                        <div className="centralHoraMedico">
                            Selecione Data: <br />
                            <select
                                className="setorMedico"
                                value={formData.horario}
                                onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                                required
                            >
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
                        Seu agendamento foi concluído com sucesso! Pro dia {formData.horario}
                    </div>
                )}
            </div>
        </div>
    );
}
