class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance(point) {
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
  }
}

class Triangle {
  constructor(point1, point2, point3) {
    this.n1 = point1;
    this.n2 = point2;
    this.n3 = point3;
    this.dA = point1.distance(point2);
    this.dB = point2.distance(point3);
    this.dC = point3.distance(point1);
    this.isTriangle =
      this.dA + this.dB > this.dC &&
      this.dB + this.dC > this.dA &&
      this.dA + this.dC > this.dB &&
      Math.abs(this.dA - this.dB) < this.dC &&
      Math.abs(this.dB - this.dC) < this.dA &&
      Math.abs(this.dA - this.dC) < this.dB;
  }
  
  calculatePerimeter() {
    if (this.isTriangle) {
      return this.dA + this.dB + this.dC;
    } else {
      return 'These points do not form a triangle. Therefore, perimeter cannot be calculated.';
    }
  }

  calculateArea() {
    if (this.isTriangle) {
      let u = this.calculatePerimeter() / 2;
      return Math.sqrt(u * (u - this.dA) * (u - this.dB) * (u - this.dC));
    } else {
      return 'These points do not form a triangle. Therefore, area cannot be calculated.';
    }
  }
}

let triangle_1 = new Triangle(new Point(0, 0), new Point(0, 6), new Point(8, 0));
let triangle_2 = new Triangle(new Point(0, 0), new Point(0, 23), new Point(0, 10));

console.log('triangle_1');
console.log('Perimeter of Triangle:', triangle_1.calculatePerimeter());
console.log('Area of Triangle:', triangle_1.calculateArea());

console.log('---------------------------');
console.log('triangle_2');
console.log('Perimeter of Triangle:', triangle_2.calculatePerimeter());
console.log('Area of Triangle:', triangle_2.calculateArea());
