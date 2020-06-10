const Agenda = require('../models/Agenda');
const db = require('../../config/db');

module.exports = {
  index(req, res) {
    Agenda.all(function (agenda) {
      // return res.send(agenda);
      return res.render('agenda/index', { agenda });
    });
  },
  create(req, res) {
    Agenda.all(function (agenda) {
      return res.render('agenda/create');
    });
  },

  post(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == '') {
        return res.send('please, fill all fill');
      }
    }
    s;
    Agenda.create(req.body, function (agenda) {
      return res.redirect(`/agenda/${agenda.id}`);
    });
  },
  put(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == '') {
        return res.send('please, fill all fill');
      }
    }
    Agenda.update(req.body, function () {
      return res.redirect(`/agenda/${req.body.id}`);
    });
  },
  show(req, res) {
    Agenda.find(req.params.id, function (agenda) {
      if (!agenda) return res.send('Agenda not Found');

      return res.render('agenda/show', { agenda });
    });
  },
  edit(req, res) {
    Agenda.find(req.params.id, function (agenda) {
      if (!agenda) return res.send('Agenda not Found');

      return res.render('agenda/edit', { agenda });
    });
  },
};
