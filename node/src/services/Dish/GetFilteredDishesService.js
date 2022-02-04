

class GetFilteredDishesService {
  async execute (mainFilter, subFilter) {
    const dishes = await require('../../../info.json');

    if(subFilter == "0") {

      const filteredDishes = dishes.filter((dish) => {
        return dish.filtroPrincipal == mainFilter
      })
  
      return filteredDishes;
    }

    const filteredDishes = dishes.filter((dish) => {
      return dish.filtroPrincipal == mainFilter && dish.subFiltros.includes(subFilter)
    });

    return filteredDishes
  }
}

module.exports = GetFilteredDishesService
