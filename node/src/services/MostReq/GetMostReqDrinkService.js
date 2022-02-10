

class GetMostReqDrinkService {
  async execute() {
    const dishes = require('../../../info.json')

    //Apenas teste
    const mostReqDrink = dishes.find((dish) => {
      return dish.filtroPrincipal == "Bebidas"
    })

    return mostReqDrink
  }
}

module.exports = GetMostReqDrinkService;
