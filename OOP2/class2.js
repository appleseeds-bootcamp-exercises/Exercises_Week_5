class Player{
    constructor(name){
        this.name= name;
        this.score = 0;
    }
    didWin(){
        return (this.score > 30)?true:false;
    }
    checkIfPlayerWon(){
        if(this.didWin())console.log("Player "+this.name+" won")
    }
}
let p1 = new Player("Asi");
p1.score = 32;
p1.checkIfPlayerWon();