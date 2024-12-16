const { google } = require('googleapis');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const auth = new google.auth.GoogleAuth({
    keyFile: 'credenciais.json', // Substitua pelo caminho do seu arquivo JSON
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = '1hiVfZOTQX_QPz2T1tUwRfKXJ6Kia-DzbQFbR52jyvQQ'; // Substitua pelo ID da sua planilha

app.post('/api/send-to-sheet', async (req, res) => {
    const { nome, matricula, setor, horario } = req.body;

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Medico!A2', // Modifique para a aba/célula desejada
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[nome, matricula, setor, horario]],
            },
        }); 
        res.status(200).send('Dados enviados com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao enviar dados para a planilha.');
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
