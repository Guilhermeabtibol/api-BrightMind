require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');

const app = express();
app.use(express.json());
const port = process.env.PORT;

const mongoUri = process.env.MONGODB_URI;

app.use(userRoutes);

mongoose.connect(mongoUri)
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.listen(port, () => {
    console.log(`Api está rodando na porta ${port}`);
})