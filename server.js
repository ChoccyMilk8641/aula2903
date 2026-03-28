const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send ('requisição chegou');
})

app.get('/home', (req, res) => {
    res.send ('home');
})

app.listen(1234, () => {
    console.log("servidor iniciado na porta 1234");
});