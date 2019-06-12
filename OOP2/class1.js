class Player{
    constructor(name){
        this.name= name;
        this.score = 0;
    }
    didWin(){
        return (this.score > 30)?true:false;
    }
}
let p1 = new Player("Asi");
p1.score = 32;
console.log(p1.didWin());