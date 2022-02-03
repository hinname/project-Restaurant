
class GetAllDishesService {
  async execute() {
    const dishes = require('../../../info.json')

    return dishes

    
  }
}

module.exports = GetAllDishesService;
