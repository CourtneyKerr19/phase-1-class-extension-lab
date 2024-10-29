// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  get isValid() {
    const [a, b, c, d] = this.sides;
    return a === b && b === c && c === d;
  }

  get area() {
    return this.sides[0] ** 2;
  }
}