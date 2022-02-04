const express = require('express');
const GetAllDishesService = require('../../services/Dish/GetAllDishesService');
const GetSearchedDishesService = require('../../services/Dish/GetSearchedDishesService')
const GetFilteredDishesService = require('../../services/Dish/GetFilteredDishesService')

class GetDishesController {
  async handle(req = express.request, res = express.response) {

    if(req.query.name) {
      const name = req.query.name;
      const service = new GetSearchedDishesService();

      const result = await service.execute(name);
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      return res.json(result)
    }

    if(req.query.mainfilter) {
      const mainFilter = req.query.mainfilter;
      const subFilter = req.query.subfilter;

      const service = new GetFilteredDishesService();

      const result = await service.execute(mainFilter, subFilter);
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
