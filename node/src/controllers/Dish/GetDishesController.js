const express = require('express');
const GetAllDishesService = require('../../services/Dish/GetAllDishesService');
const GetFilteredDishesService = require('../../services/Dish/GetFilteredDishesService')

class GetDishesController {
  async handle(req = express.request, res = express.response) {

    if(req.query.name) {
      const name = req.query.name;
      const service = new GetFilteredDishesService();

      const result = await service.execute(name);
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      return res.json(result)
    }

    if(req.query.filters) {
      const filters = req.query.filters;

      const service = new GetFilteredDishesService();

      const result = await service.execute(filters);
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      return res.json(result)
    }
    

    const service = new GetAllDishesService();

    const result = await service.execute();
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    return res.json(result)

  }
}

module.exports = GetDishesController;
