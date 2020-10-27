import express, { request } from 'express';
import path from 'path';
import cors from 'cors';

import './database/connection'

import 'express-async-errors';

import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

app.use(cors()); //Biblioteca instalada necessária para que outras aplicações consigam acessar essa API
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


//Métodos HTTP = Get, Post Put and Delete
//Get = Buscar informações
//Post = Criando informações novas

//Put = Editar informações
//Delete = Deleta informações



app.listen(3333);