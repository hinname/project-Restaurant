

class GetAllFiltersService {
  async execute() {
    let filters = require('../../../filter.json')

    return filters
  }
}

module.exports = GetAllFiltersService;