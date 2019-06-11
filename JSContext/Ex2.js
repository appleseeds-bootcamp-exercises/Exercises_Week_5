name = "different";
var printObject = {
  name: "poppy",
  printName: function() {
    console.log(this.name);
  },
  printNameAfterSec: function() {
    setTimeout(this.printName.bind(this), 1000);
  }
};
printObject.printName();
printObject.printNameAfterSec();
