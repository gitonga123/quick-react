// global scope
const firstName = 'Daniel';

myFunction = () => {
    //local scope
    const secondName = 'Mutwiri';
    nestedFunction = () => {
        const thirdName = "Gitonga";
        console.log(firstName, secondName, thirdName);
    };
    return nestedFunction
};

const allMyName = myFunction();

allMyName();
var add = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

// a closure is a function having access to the parent scope, even after the parent function is closed