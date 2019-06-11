// The Problem with the code: the function getStrength when called from whoIsStronger does not recognize this.health which belong to the object hero.
// Fixed code:

var hero = {
  health: 5,
  power: 68,
  getStrength: function() {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  }
};
function whoIsStronger(getStrength) {
  var myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

whoIsStronger(hero.getStrength.bind(hero));