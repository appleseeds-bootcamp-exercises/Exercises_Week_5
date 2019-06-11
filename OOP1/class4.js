class Jewel {
  constructor(type, price, weight, typeOfGold) {
    this.type = type;
    this.price = price;
    this.weight = weight;
    this.typeOfGold = typeOfGold;
  }

  
}
function getHigherPrice(jewel1, jewel2) {
  if(jewel1.price>jewel2.price){
    return jewel1.price;
  }
  else{
    return jewel2.price;
  }
}
var goldRing = new Jewel("ring", 250, "1.5g", "white");
var silverNeckless = new Jewel("neckless", 450, "2.5g", "white");
let higher = getHigherPrice(goldRing, silverNeckless);
console.log(higher);