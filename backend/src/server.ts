import express from "express";

import './database/connection';


const app = express();

app.use(express.json());

//rota = Conjunto de tudo
//recurso = Usuário

//Métodos HTTP = Get, Post Put and Delete
//Get = Buscar informações
//Post = Criando informações novas

//Put = Editar informações
//Delete = Deleta informações

//Parametros: 
// Query Paramn http://localhost:3333/users?search=Diego (Busca por informação)
// Route Params http://localhost:3333/users/1 (Identificar um recurso)
// Body http://localhost:3333/users (Imformações comportas e complexas)

//comandos:
//npm run dev



app.get('/users', (request, response) => {

/*
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
*/

   return response.json( {message: 'Hello World'});
})

app.listen(3333);

