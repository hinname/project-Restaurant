
class GetDishService {
  async execute(id) {
    let dishes = require('../../info.json')

    const dish = dishes.find(dish => dish.id == id)

    if(!dish) {
      throw new Error("Id inválido");
    }

    return dish

  }
}

module.exports = GetDishService;
