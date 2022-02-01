
class GetAllDishesService {
  async execute() {
    const dishes = require('../../../info.json')

    console.log(dishes)

    return dishes

    
  }
}

module.exports = GetAllDishesService;
