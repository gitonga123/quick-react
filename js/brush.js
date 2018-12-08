// something new today smilely face
const east = ['Kenya', 'Uganda', 'Tanzania'];
const west = ['Nigeria', 'Cameroon', 'Ghana', 'Niger'];

const countries = [...east, ...west];
// global scope
const firstName = 'Ann';
myFunction = () => {
    // local scope
    const secondName = 'Mutwiri';
    console.log(firstName, secondName);
    nestedFunction = () => {
        const thirdName = 'Kalekye';
        console.log(firstName, secondName, thirdName);
    };

    nestedFunction();
};

myFunction();