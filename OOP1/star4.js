class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;

  }
}
let p1 = new Player("David");
console.log((p1.score==0)?"correct":"error");

function play(player){
  if((Math.floor(Math.random() * 10)+1)%2){
    player.score++;
  }; 
}
function game(player){
  for (let index = 0; index < 3; index++) {
    play(player);
  }
  console.log(player.score)
}
game(p1);