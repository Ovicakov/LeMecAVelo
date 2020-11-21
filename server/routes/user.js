const express = require('express');
const router = express.Router({ mergeParams: true });
const connection = require('../config')

router.get('/', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la récupération des users');
    } else {
      res.status(200).json(results);
    }
  });
});

router.route(['/:id', '/'])
  .get(function (req, res) {
    connection.query(`SELECT * FROM user WHERE user_id=${req.params.id}`, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la récupération d'un user");
      } else {
        res.json(results).status(200);
      }
    });
  })
  .post(function (req, res) {
    const formData = req.body;
    connection.query('INSERT INTO user SET ?', formData, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de l'ajout d'un user");
      } else {
        res.sendStatus(200);
      }
    });
  })
  .put(function (req, res) {
    const formData = req.body;
    connection.query(`UPDATE user SET ? WHERE user_id= ${req.params.id}`, [formData], err => {
      if (err) {
        res.status(500).send("Erreur lors de la modification d'un user");
      } else {
        res.sendStatus(200);
      }
    });
  })
  .delete(function (req, res) {
    connection.query(`DELETE FROM user WHERE user_id= ${req.params.id}`, err => {
      if (err) {
        res.status(500).send("Erreur lors de la suppression d'un user");
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = router;