//Activating Strict Mode
'use strict';

/*Functions
function logger() {
    console.log("My name is Naren"); //This function prints only message but doesn't return any value
}

//Calling, running or invoking a function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,2);
console.log(appleJuice);
console.log(fruitProcessor(5,5));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice); */


/*Function Declarations vs. Expressions
function calcAge1(birthYear){          //Function Declaration
    const age = 2021-birthYear;
    return age;
}

const ageCheck = calcAge1(1999); //1999 is the parameter
console.log(ageCheck);

//Function expression
const calcAge2 = function(birthYear){
    return 2021 - birthYear;
}
const age2 = calcAge2(1999);
console.log(ageCheck, age2); */


/*Arrow Function

const calcAge4 = birthYear => 2021-birthYear; //Arrow Function
const calcAge5 = calcAge4(1999);
console.log(calcAge5);

const yearsUntilRetirement = (birthYear,firstname) => {
    const age = 2021 - birthYear;
    const retirementAge = 60 - age;
    //return retirementAge;
    return `${firstname} retires in ${retirementAge} years`;
}

console.log(yearsUntilRetirement(1999, 'naren')); */


/*Function calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice =`Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3)); */

/*Reviewing Functions

const calcAge = function(birthYear) {
    return 2021-birthYear;
}

const yearsUntilRetirement = function(birthYear,firstname)  {
    const age = calcAge(birthYear);
    const retirementAge = 60 - age;
    if (retirementAge > 0) {
        console.log(`${firstname} retires in ${retirementAge} years`);
        return retirementAge;
        }
    else{
        console.log(`${firstname} already retired`);
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1999, 'naren'));  */

