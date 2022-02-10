const express = require('express');
const GetMostReqMainDishService = require('../../services/MostReq/GetMostReqMainDishService')
const GetMostReqDrinkService = require('../../services/MostReq/GetMostReqDrinkService')
const GetMostReqDessertService = require('../../services/MostReq/GetMostReqDessertService')

class GetMostReqDishesController {
  async handle(req = express.request, res = express.response) {

    const { filter } = req.params;

    if(filter == "comidas") {
      const service = new GetMostReqMainDishService();

      const result = await service.execute();
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      return res.json(result)
    }

    if(filter == "bebidas") {
      const service = new GetMostReqDrinkService();

      const result = await service.execute();
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      return res.json(result)
    }

    if(filter == "sobremesas") {
      const service = new GetMostReqDessertService();

      const result = await service.execute();
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      return res.json(result)
    }

    return res.json({err: 'filtro inválido'})
  }
}

module.exports = GetMostReqDishesController;