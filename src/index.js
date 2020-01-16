const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:p2WJlicy16sEjwuh@cluster0-unsab.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);

// METÓDOS HTTP GET, POST, DELETE, PUT

// Tipos de Parametros
// Query Params: request.query(Filtros, ordenação, paginação ...)
// Route Params: request.params(identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criaçaõ ou alteração de um registro)

//MongoDB (Não-Relacional)


