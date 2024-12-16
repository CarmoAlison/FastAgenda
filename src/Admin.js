import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
    const [alimentos, setAlimentos] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [esportes, setEsportes] = useState([]);

    useEffect(() => {
        // Função para buscar dados de cada setor
        const fetchData = async () => {
            const alimentoResponse = await fetch('https://api.sheetbest.com/sheets/612d40e4-c447-4679-ac7c-bb1ca08daed3');
            const medicoResponse = await fetch('https://api.sheetbest.com/sheets/23fcfd1f-857c-4fbf-b101-2ed15bb27e24');
            const esporteResponse = await fetch('https://api.sheetbest.com/sheets/9f430570-a7ac-4290-a64b-7cfcc149ed75');

            const alimentoData = await alimentoResponse.json();
            const medicoData = await medicoResponse.json();
            const esporteData = await esporteResponse.json();

            setAlimentos(alimentoData); // Atualiza o estado com os dados de Alimentos
            setMedicos(medicoData); // Atualiza o estado com os dados de Médicos
            setEsportes(esporteData); // Atualiza o estado com os dados de Esportes
        };

        fetchData(); // Chama a função de busca
    }, []);

    return (
        <div className="adminContainer">
            <h1>Administração de Agendamentos</h1>

            <div className="section">
                <h2>Setor Alimentício</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Matrícula</th>
                            <th>Opção</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alimentos.map((alimento, index) => (
                            <tr key={index}>
                                <td>{alimento.nome}</td>
                                <td>{alimento.matricula}</td>
                                <td>{alimento.setor}</td>
                                <td>{alimento.horario}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Setor Médico</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Matrícula</th>
                            <th>Opção</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicos.map((medico, index) => (
                            <tr key={index}>
                                <td>{medico.nome}</td>
                                <td>{medico.matricula}</td>
                                <td>{medico.setor}</td>
                                <td>{medico.horario}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Setor Esportivo</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Matrícula</th>
                            <th>Opção</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {esportes.map((esporte, index) => (
                            <tr key={index}>
                                <td>{esporte.nome}</td>
                                <td>{esporte.matricula}</td>
                                <td>{esporte.setor}</td>
                                <td>{esporte.horario}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
