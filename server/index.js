const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3002;

const user = 'codeflowinnovation@outlook.com'
//const user = 'no.reply@cfinnovation.com.br'
//const pass = 'NRcfinnovation1#'
const pass = '#cf12345678'

app.use(cors())
app.use(bodyParser.json());

app.get('/',(req, res) => res.send("Hello Word!"))

app.post('/send', (req, res) => {

    const body = req.body; // ou const { nome, email, mensagem } = req.body.body;
    const { nome, email, mensagem } = body;

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: { 
            user, 
            pass
        }
    })

    transporter.sendMail({
        from: user,
        to: email || 'rafaeltalles535@gmail.com',
        subject: "Olá, seja bem vindo a Code Flow",
        text: `Olá ${nome}`,
    })
    .then((info) => {
        console.log('E-mail enviado:', info);
        res.send(`E-mail enviado com sucesso!`);
    })
    .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
        res.status(500).send('Erro ao enviar o e-mail');
    });
})


app.listen(port, () => {
    console.log(`Servidor de e-mails rodando na porta ${port}`);
  });