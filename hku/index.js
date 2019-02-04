const rect = require('./rectangle');

function solveRect(l, b) {
  // console.log('Solving the reactangle with l = ' + l);
  if (l <= 0 || b <= 0) {
    console.log('Reactangle dimensions should be greater than 0');
  } else {
    console.log(`The area of ${l} and ${b} the rectangle is ` + rect.area(l, b));
    console.log(`The Perimeter of ${l} and ${b} the reactangle is ` + rect.perimeter(l, b));
  }
}

solveRect(5, 7);
solveRect(5, 10);
solveRect(15, 67)