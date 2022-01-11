// Requiring module
const express = require('express');
let info = require('./info.json')

var serveIndex = require('serve-index')
// Creating express object
const app = express();

// Defining port number
const PORT = 3000;

// Function to serve all static files
// inside public directory.

//Criando display do folder no servidor
app.use(express.static(__dirname + "/"))
app.use('/images', serveIndex(__dirname + '/images'));

//Disponibilizando as imagens do folder images
app.use(express.static('public'));
app.use('/images', express.static('images'));

//Disponibilizando as informações do info.json com GET
app.get('/users', (request, response) => {
  response.json(info)
})

//Selecionando as informações do info.json por id com GET
app.get("/users/:id", (req, res) => {
  const { id } = req.params
  const user = info.find(user => user.id == id)

  if(!user) return res.status(404).json()

  res.json(user)
})

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})
