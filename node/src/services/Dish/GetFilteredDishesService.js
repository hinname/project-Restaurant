
class GetFilteredDishesService {
  async execute(query) {
    const dishes = require('../../../info.json');

    query = query.toLowerCase();

    const filteredDishes = dishes.filter((dish) => {
      return dish.nome.toLowerCase().includes(query) //|| dish.filter.includes(query)
    })

    return filteredDishes;
  }
}

module.exports = GetFilteredDishesService;