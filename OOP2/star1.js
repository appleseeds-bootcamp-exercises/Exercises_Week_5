class Shoes {
  constructor(name) {
    this.name = name;
    this.availableSizes = [45, 42, 35, 37];
  }
  isAvailable(size) {
    var isAvailable = false;
    this.availableSizes.forEach(index => {
      if (index === size) {
        isAvailable = true;
      }
    });
    return isAvailable;
  }
}
let shoe = new Shoes("havanas");
console.log(shoe.isAvailable(45));
console.log(shoe.isAvailable(32));
