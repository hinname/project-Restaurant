

class GetMostReqDessertService {
  async execute() {
    const dishes = require('../../../info.json')

    //Apenas teste
    const mostReqDessert = dishes.find((dish) => {
      return dish.filtroPrincipal == "Comidas" && dish.subFiltros.includes('Sobremesas')
    })

    return mostReqDessert
  }
}

module.exports = GetMostReqDessertService;