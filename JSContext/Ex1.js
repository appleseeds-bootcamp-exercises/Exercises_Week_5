// ** case 1:
// Output: error
// The problem: We have an assinment to Constant (Which can't be changed) 

let dog = {
  name: "sparky"
};
let black_dog = {
  name: "blacky"
};
const x16 = dog;
x16 = black_dog;
x16;
// ** case 2:
// Output: object with the ' name:"blacky" ' property. Since we changed the name midway

let dog = {
  name: "sparky"
};
let black_dog = {
  name: "blacky"
};
const x16 = dog;
dog.name = "blacky";
x16;
