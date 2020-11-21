const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const connection = require('../../config')
const router = express.Router()

router.route(['/', '/'])

  .get(function (req, res) {
    connection.query('select * from user', (err, result) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).send(result)
      }
    })
  })

  .post(function (req, res) {

    const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!emailRegEx.test(req.body.user_email)) {
      return res.status(401).send('Utilisateur non-authorisé')
    }

    const user = {
      user_email: req.body.user_email,
      user_password: bcrypt.hashSync(req.body.user_password)
    }

    /**
   * Verification de l'absence de l'utilisateur dans la base
   */

    connection.query('select user_id from user where user_email = ?', user.user_email, (err, result) => {
      if (err) {
        console.log('err 38',err);
        return res.status(500).send('internal server error 40')
      } else if (res.length > 0) {
        return res.status(409).send('User already exists')
      }

      /**
       * Insertion de l'utilisateur en base
       */

      connection.query('insert into user set ?', user, (err, result) => {
        if (err) {
          console.log('err 50',err);
          return res.status(500).send('Cannot register the user')
        }

        /**
         * Renvoie de l'utilisateur enregistre au front
         */

        connection.query('select user_id, user_email from user where user_id = ?', result.insertId, (err, result) => {
          if (err) {
            console.log('60',err);
            
            return res.status(500).send('Internal server error 60')
          }
          res.status(200).send(result)
        })
      })
    })
  })

module.exports = router;