const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const connection = require('../../config')

const router = express.Router()

const secret = 'ZizouEstTropFort'

/**
 * Route post d'authentification
 */

router.post('/', (req, res)=>{


  /**
   * Verification du format de l'email fournit.
   */

  const emailRegEx= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  
  if(!emailRegEx.test(req.body.user_email)){ //on test l'email fournit avec la regex 'emailRegEx'
    return res.status(401).send('Unauthorized user')
  }

  const user_email = req.body.user_email
  const user_password = req.body.user_password

  /**
   * Recuperation de l'utilisateur par son email
   */

  connection.query(`SELECT * FROM user WHERE user_email = ?`, user_email, (err, result)=>{
    if (err) {
      return res.status(500).send(err)
    } else if (!result[0]){ // on verifie la présence d'un resultat dans la reponse
      return res.status(409).send('Unknown user')
    }

    /**
     * Test du mot de passe envoye.
     */

    const passwordIsValid = bcrypt.compareSync(user_password, result[0].user_password); // comparaison entre le mot de passe envoye et le hash suvegarde en base grace a compareSync de bcrypt
    if (!passwordIsValid){
      return res.status(401).send({ auth: false, token: null }); // Si passwordValid est false le mot de passe est faux, on renvoie donc une 401 
    }
    
    /**
     * Construction du token
     */

    const token = jwt.sign(// on utilise sign de jwt pour creer le token
      {user_id : result[0].user_id, user_email: result[0].user_email}, // on rentre les information de l'utilisateur dont on a besoin en front 
      secret, // correspond a une chaine de caractere permettant de chiffrer la signature du token
      {
        expiresIn: '24h'// fixe la duree de vie du token
      },
      { algorithm: 'RS256' }// specifie l'algorithme de chiffrage utilise
    );
    res.header("Access-Control-Expose-Headers", "x-access-token") // On crer le header de la reponse
    res.set("x-access-token", token) // on ajoute le token au header
    res.status(200).send({ auth: true }) // on envoie la reponse
  });
})

module.exports = router