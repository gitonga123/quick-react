const rect = require('./rectangle')

function solveRect(l, b) {
  // console.log('Solving the reactangle with l = ' + l);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log('ERROR: ', err.message)
    } else {
      console.log(`Area of Rectangle ${l} by ${b} = ${rectangle.area()}`)
      console.log(`Perimeter of Rectangle ${l} by ${b} = ${rectangle.perimeter()}`)
    }
  })
  console.log("This statement is after the rect");
}

solveRect(5, 7)
solveRect(5, 10)
solveRect(15, 67)
solveRect(-15, 7)
solveRect(15, 0)