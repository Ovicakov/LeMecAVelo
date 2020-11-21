const categorie = require('./categorie')
const articles = require('./articles')
const stock = require('./stock')
const user = require('./user')
const authentification = require('./jwt/authentification')
const register = require('./jwt/register')

module.exports = {
  categorie, 
  articles, 
  stock, 
  user,
  authentification,
  register
};