const express = require("express");
const serveIndex = require("serve-index");
const path = require('path');


const GetAllFiltersController = require("./controllers/Filter/GetAllFiltersController")
const GetDishesController = require("./controllers/Dish/GetDishesController");
const GetDishController = require("./controllers/Dish/GetDishController");

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


//Disponiblizando as informações do filter.json com método GET
router.get('/filters', new GetAllFiltersController().handle)


//Disponibilizando as informações do info.json com GET
router.get('/dishes', new GetDishesController().handle)
//Selecionando as informações do info.json por id com GET
router.get("/dishes/:id", new GetDishController().handle)

module.exports = router;