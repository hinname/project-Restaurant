
class GetFilteredDishesService {
  async execute(query) {
    const dishes = require('../../../info.json')

    const filteredDishes = dishes.filter((dish) => {
      return dish.nome.includes(query) //|| dish.filter.includes(query)
    })

    return filteredDishes
  }
}

module.exports = GetFilteredDishesService;