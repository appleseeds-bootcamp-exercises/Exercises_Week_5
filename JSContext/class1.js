var storm = {
  superPower: "Flying"
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.printSP = printSuperPower;
storm.printSP();