const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const UserRoutes = require('./src/routes/UserRoutes')
const app = express();

app.use(express.json());

app.use(UserRoutes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`ervidor iniciado na porta ${process.env.SERVER_PORT}`);
});