const express = require('express');
const app = express();
const port = 4000;
const connection = require('./config');
const route = require('./routes/index');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')

app.use(cors());
// morgan error support
app.use(morgan('dev'));
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/categorie', route.categorie);
app.use('/article', route.articles)
app.use('/stock', route.stock)
app.use('/user', route.user)
app.use('/authentification', route.authentification)
app.use('/register', route.register)

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});