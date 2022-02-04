
class GetSearchedDishesService {
  async execute(query) {
    const dishes = await require('../../../info.json');

    query = query.toLowerCase();

    const searchedDishes = dishes.filter((dish) => {
      return dish.nome.toLowerCase().includes(query) //|| dish.filter.includes(query)
    })

    return searchedDishes;
  }
}

module.exports = GetSearchedDishesService;