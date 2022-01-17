const express = require('express');
const GetAllDishesService = require('../services/GetAllDishesService');

class GetAllDishesController {
  async handle(req = express.request, res = express.response) {

    const service = new GetAllDishesService();

    const result = await service.execute();
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    return res.json(result)

  }
}

module.exports = GetAllDishesController;
