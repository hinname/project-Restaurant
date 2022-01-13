const express = require('express');
const GetDishService = require('../services/GetDishService');

class GetDishController {
  async handle(req = express.request, res = express.response) {

    //id pegado como paramêtro da requisição na URL
    //ex: localhost:3000/dishes/1    
    //1 = id
    const { id } = req.params;

    const service = new GetDishService();

    try {
      const result = await service.execute(id);
      return res.json(result)
    }
    catch(err) {
      //Se o erro de trazer o prato for por id inválido
      if(err = "Id inválido") {
        res.status(404); //status de not found
        return res.json({"error": err})
      }
      //Se o erro for em qualquer outra parte do service
      res.status(500) //erro no servidor
      return res.json({"error": err})
    }
    

  }
}

module.exports = GetDishController;
