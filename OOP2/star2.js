class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  plus(point) {
return new Point(this.x+point.x, this.y+point.y)
  }
}
let point = new Point(10,12);
let point2 = new Point(1,-5);
let addedPoint = point.plus(point2);
console.log(addedPoint);
let point3 = new Point(2,-20);
let point4 = new Point(1,-4);
addedPoint = point3.plus(point4);
console.log(addedPoint);