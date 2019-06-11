var spiderMan = {
  favourite_animal: "spider"
};
function printFavouriteAnimal() {
  console.log(this.favourite_animal);
  return this.favourite_animal;
}
var favourite_animal = "horse";
printFavouriteAnimal();
printFavouriteAnimal.bind(spiderMan)();
printFavouriteAnimal.bind({favourite_animal:"elephant"})();