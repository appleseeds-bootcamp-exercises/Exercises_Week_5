class Account {
  constructor(sum) {
    this.sum = sum;
  }
  deposit(value) {
    this.sum += value;
  }
  withdraw(value) {
    if(value<this.sum){
      this.sum -= value;
    }
    else console.log("Insuffiecient funds");
  }
  canWithdraw(value) {
    return this.sum > value;
  }
}
function lottery(account) {
  if (!account.canWithdraw(100)) {
    console.log("Come back richer");
    return;
  }
  let r = Math.floor(Math.random()*101);
  let didWon = Math.floor(Math.random()*2 === 1);
  if (didWon) account.sum += r + 30;
  else account.sum -= r;
}
let account = new Account(500);
for (let index = 0; index < 5; index++) {
  lottery(account);
}
console.log(account.sum);
