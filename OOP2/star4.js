class Plant {
  constructor (name, season, color, doesBlossom) {
    this.name = name
    this.season = season
    this.color = color
    this.doesBlossom = doesBlossom
  }
}
function getPlantsBySeason (plants, season) {
  return plants.filter(plant => (plant.season === season && plant.doesBlossom))
}
let greenHouse1 = []
greenHouse1.push(new Plant('rose', 'automn', 'red', false))
greenHouse1.push(new Plant('aconitum', 'spring', 'yellow', true))
greenHouse1.push(new Plant('agapanthus', 'winter', 'pink', true))
console.log(getPlantsBySeason(greenHouse1, 'spring'))
let greenHouse2 = []
greenHouse2.push(new Plant('ageratum', 'spring', 'red', true))
greenHouse2.push(new Plant('alchemilla', 'spring', 'blue', false))
greenHouse2.push(new Plant('alstroemeria', 'winter', 'pink', true))
console.log(getPlantsBySeason(greenHouse2, 'spring'))
