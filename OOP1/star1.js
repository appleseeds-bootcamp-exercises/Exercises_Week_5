class Dog {
  constructor(name, type, age, isCuddle) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.isCuddle = isCuddle;
  }
}
function describeDog(dog) {
  console.log(
    `This is ${dog.name} a ${dog.type}. He is ${dog.age} years old and ${
      dog.isCuddle ? "loves" : "does not love"
    } to cuddle`
  );
}
let dogArr = [3];
dogArr[0] = new Dog("woof", "labarador", 12, true);
dogArr[1] = new Dog("boof", "amstaph", 6, false);
dogArr[2] = new Dog("doof", "another canine", 1.5, true);
for (let index = 0; index < dogArr.length; index++) {
  describeDog(dogArr[index]);
}
