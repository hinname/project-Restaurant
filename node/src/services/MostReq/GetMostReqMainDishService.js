

class GetMostReqMainDishService {
  async execute() {
    const dishes = require('../../../info.json')

    //Apenas teste
    const mostReqDish = dishes.find((dish) => {
      return dish.filtroPrincipal == "Comidas"
    })

    return mostReqDish
  }
}

module.exports = GetMostReqMainDishService;
