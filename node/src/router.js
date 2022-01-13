const express = require("express");
const serveIndex = require("serve-index");
const path = require('path');


const GetAllDishesController = require("./controllers/GetAllDishesController");
const GetDishController = require("./controllers/GetDishController");

const router = express.Router();



//definindo outro dirname pq é preciso voltar uma pasta para acessar o images
const dirname = path.join(__dirname, "..")

// Function to serve all static files
// inside public directory.
//Criando display do folder no servidor
router.use(express.static(dirname + "/"))
router.use('/images', serveIndex(dirname + '/images'));

//Disponibilizando as imagens do folder images
router.use(express.static('public'));
router.use('/images', express.static('images'));



//Disponibilizando as informações do info.json com GET
router.get('/dishes', new GetAllDishesController().handle)

//Selecionando as informações do info.json por id com GET
router.get("/dishes/:id", new GetDishController().handle)

module.exports = router;