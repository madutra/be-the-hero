//arquivo inicial, do qual ira iniciar toda a aplicacao 

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Metodos Get
 * 
 * GET: Buscar/listar uma informação no back-end 
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviados na rota apos o "?" (Filtros, Paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * 
 */

 /**
  * Banco de dados
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
  * NoSQL: (nao relacionais) MongoDB, CouchDB, etc
  * 
  * Comunicacao com banco de dados: 
  * * Driver: SELECT * FROM users
  * *Query Builder: table('users').select('*').where()
  */

app.listen(3333);
