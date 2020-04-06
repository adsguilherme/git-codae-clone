const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Olá mundo esse é meu novo repositório clonado!'});
})

app.get('/Rotaolá', (req, res) => {
    res.status(200).send({ message: 'Olá, usando GitHub Desktop!'});
})

app.listen(4001, () => {
    console.log('Api rodando na porta 4001');
})
