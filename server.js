const express = require('express');

const app = express();

app.listen(1234, () => {
    console.log("servidor iniciado na porta 1234");
});