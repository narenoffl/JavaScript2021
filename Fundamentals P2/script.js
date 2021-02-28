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

/*Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Scott";
const friend3 = "Beasley";

const friends = ['Michael', 'Scott', 'Beasley'];
console.log(friends);

const yeah = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Halpert';
console.log(friends);

const firstName = "Naren";
const perDetails = [firstName, "Puru", 2021-1999, 'student', friends];
console.log(perDetails);

// Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const years = [1990, 1967, 2002, 2010, 2018];

  const age1 = calcAge(years[0]);
  const age2 = calcAge(years[1]);
  const age3 = calcAge(years[years.length-1]);
  console.log(age1, age2, age3);

  const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
  console.log(ages); */

  /*Basic Array Operations
  const friends = ['Michael', 'Scott', 'Beasley'];
  
  //Add new elements
  const newLength = friends.push('Schrute');
  console.log(friends);
  console.log(newLength);

  friends.unshift('Dwight');
  console.log(friends);

  //Remove elements
  friends.pop(); // Removes only last element
  const popped = friends.pop();
  console.log(popped);
  console.log(friends);

  friends.shift();
  console.log(friends);

  friends.push("Hussey");
  console.log(friends.indexOf("Scott"));
  console.log(friends.includes("Michael"));
  console.log(friends.includes("Hussey"));

  if(friends.includes("Scott")) {
      console.log("We have that value");
  }

else{
    console.log("Not available");
} */

//Introduction to Objects

const narenArray = [
    "Naren",
    'student',
    2021-1999,
    ['Scott', 'Beasley', 'Michael']
];

const naren = {
   firstName: "Naren",
   job: 'student',
   age: 2021-1999,
   friends:  ['Scott', 'Beasley', 'Michael']
};