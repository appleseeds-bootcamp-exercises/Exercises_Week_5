var wonderWoman = {
  name: "Diana Prince"
};
var batman = {
  name: "Bruce Wayne"
};
var superHeroes = [wonderWoman, batman];
function printName() {
  console.log("my name is " + this.name);
}
function printHeroes(heroes, printFunc) {
  for (let index = 0; index < heroes.length; index++) {
    bPrintFunc = printFunc.bind(heroes[index]);
    bPrintFunc();
  }
}

printHeroes(superHeroes, printName);
