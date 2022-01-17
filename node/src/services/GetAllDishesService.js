
class GetAllDishesService {
  async execute() {
    let dishes = require('../../info.json')

    return dishes
  }
}

module.exports = GetAllDishesService;
