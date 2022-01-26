const express = require('express');
const GetAllFiltersService = require('../../services/Filter/GetAllFiltersService');

class GetAllFiltersController {
  async handle(req = express.request, res = express.response) {

    const service = new GetAllFiltersService();

    const result = await service.execute();
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    return res.json(result)

  }
}

module.exports = GetAllFiltersController;