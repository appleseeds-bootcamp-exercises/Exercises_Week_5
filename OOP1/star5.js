class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}
circle = new Shape("circle", "red");
square = new Shape("square", "blue");
circle.radius = 3;
square.edgeLength = 5;
square.calcArea = function(edge) {
  return edge * edge;
};
circle.calcArea = function(radius) {
  return radius * radius * Math.PI;
};

function calcShapeArea(shape) {
  if (shape.type === "square") return square.calcArea(shape.edgeLength);
  else return circle.calcArea(shape.radius);
}
calcShapeArea(circle);
calcShapeArea(square);

square.calcArea2 = function() {
  return this.edgeLength * this.edgeLength;
};
circle.calcArea2 = function() {
  return this.radius * this.radius * Math.PI;
};
function calcShapeArea2(shape) {
  return shape.calcArea2();
}

function test_equal(actual, expected, msg) {
  if (actual !== expected) {
  console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
  }
 }
 test_equal(square.type, "square");
 test_equal(circle.type, "circle");
 test_equal(circle.radius, 3);
 test_equal(square.edgeLength, 5);
 test_equal(square.calcArea(square.edgeLength), 25);
 test_equal(circle.calcArea(circle.radius), Math.PI * 9);
 test_equal(calcShapeArea(square), 25);
 test_equal(calcShapeArea(circle), Math.PI * 9);
 test_equal(square.calcArea2(), 25);
 test_equal(circle.calcArea2(), Math.PI * 9);
 test_equal(calcShapeArea2(square), 25);
 test_equal(calcShapeArea2(circle), Math.PI * 9);