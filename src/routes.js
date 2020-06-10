const express = require('express');
const routes = express.Router();
const agenda = require('./app/controllers/agenda');

routes.get('/', function (req, res) {
  return res.redirect('/agenda');
});

routes.get('/agenda', agenda.index);
routes.get('/agenda/create', agenda.create);
routes.get('/agenda/:id', agenda.show);
routes.put('/agenda', agenda.put);
routes.get('/agenda/:id/edit', agenda.edit);
// Recebe os dados do formulario
routes.post('/agenda', agenda.post);
// routes.delete('/agenda', agenda.delete);

module.exports = routes;
