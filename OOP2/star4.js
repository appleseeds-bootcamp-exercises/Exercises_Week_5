class Plant{
  constructor(season, color, doesBlossom){
    this.season = season;
    this.color = color;
    this.doesBlossom = doesBlossom;
  }
}


function getPlantsBySeason(plants, season){
  var blossomPlants = [];
  plants.forEach(plant => {
    if(plant.season === season)blossomPlants.push(plant);
  });
  return blossomPlants;
}
let greenHouse1 = [];
greenHouse1.push(new Plant("automn", "red", false));
greenHouse1.push(new Plant("spring", "yellow", true));
greenHouse1.push(new Plant("winter", "pink", true));
console.log(getPlantsBySeason(greenHouse1, "spring"));
let greenHouse2 = [];
greenHouse2.push(new Plant("spring", "red", false));
greenHouse2.push(new Plant("spring", "blue", false));
greenHouse2.push(new Plant("winter", "pink", true));
console.log(getPlantsBySeason(greenHouse2, "spring"));
