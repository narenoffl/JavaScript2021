/*
let js = 'amazing'; //Variable
//console.log(40 + 8 + 53); //Values

const firstName = "Naren DevJs";  // Variable in camelcase
console.log(firstName);

//Variable Name Conventions
let firstPerson = "javascript";
console.log(firstPerson);

let jonas_matilda = "developers";
let PI = 3.1415;

let myFirstSchool = "DAV";
let myCollege = "RIT";
*/

/*
let javaScriptIsFun = true; //Boolean
console.log(javaScriptIsFun);
console.log(typeof(javaScriptIsFun));
console.log(typeof(true)); //To find out the datatype of the given value

//Changing the value of already declared variable
javaScriptIsFun = "YES";
console.log(typeof(javaScriptIsFun)); 

//undefined data type
let nope;
console.log(nope);
console.log(typeof nope);

nope=2020;
console.log(typeof nope); //Dynamic changing of value in already declared variable */

/* let age = 30;
age = 31;

const birthYear = 1999; //Cannot mutate variable which has "const"
//birthYear = 1991;
//const job; //Missing statement error
var job = "programmer";
job = "developer;"
console.log(job); */

/* const presentYear = 2021;
const ageNaren = presentYear-1999; //Mathematical Operations
const ageAppu = presentYear-2002;
console.log(ageNaren);
console.log(ageNaren * 2, ageNaren / 10, 2**3); // 2**3 means 2 to the power of 3 which equals to 8

const firstName = "Naren";
const lastName = "Purushothaman";
console.log(firstName + " " +lastName); //Concatenation of two strings

let x = 10+5; //Assignment Operator (Ans=15)
x += 10; //(x=x+10) Assignment Operator
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operators
console.log(ageNaren > ageAppu);
console.log(ageNaren < ageAppu); //false
console.log(ageNaren >=18); //true
console.log(ageAppu <=18); //false

const isFullAge = ageNaren >=18;

console.log(presentYear - 1990 > presentYear - 1994); */

/*
//Operator Precedence
const presentYear = 2021;
const ageNaren = presentYear-1999; 
const ageAppu = presentYear-2002;
console.log(presentYear - 1990 > presentYear - 1994);

let x,y;
x = y = 25 - 10 - 5; //Both x and y will be equal to final value 10
console.log(x,y);

a = (10-(24-10));
console.log(a); //Grouping elements

const ageAverage = (ageNaren + ageAppu)/2;
console.log(ageAppu, ageNaren, ageAverage);
*/

/*
//Strings and Template Literals
const firstName = "Naren";
const job = "Student";
const birthYear = 1999;
const year = 2021;

const naren = "I'm " +firstName+ " , a " + (year - birthYear) + " year old " + job + " ! ";
//console.log(naren);

const narenNew = `I'm ${firstName} , a ${year - birthYear} year old ${job} !`;
console.log(narenNew);

console.log(`Just a regular thing... \n\
Multiple string lines`);

console.log(`string
lines`); */

// Decision-making Statements
/* const age = 16;
;

if(age >= 18) {
    console.log("Eligible for driver's license");
}
else {
    const yearsLeft = 18 - age;
    console.log(`Not eligible for driver's license. Wait another ${yearsLeft} years`);
}

const birthYear = 1999;
let century;

if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;
}
console.log(century);
*/

/*
//Type conversion
const birthYear = "1999";
console.log(birthYear + 18);
console.log(Number(birthYear) + 21);

console.log(Number('Naren'));
console.log(typeof(NaN));

console.log(String(23), 23);

//Type coercion
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - '5'); //Strings converted to number and calculation done
console.log('23' + '10' + '5'); //Concatenation occurs
console.log('23' * "2");
console.log('23' / "2");
console.log('23' > '18');

let n = '1' + 1;
n = n-1;
console.log(n); */

/*
//Truthy and falsy values
// 5 falsy values : 0, '', undefined, null, NaN
console.log(0);
console.log();
console.log(undefined);
console.log(Boolean('Naren'));
console.log(Boolean(1));
console.log(Boolean({}));

const money = 10;
if(money) {
    console.log("Dont spend");
}
else{
    console.log("You should work hard");
}

let height;
if(height) {
    console.log("Height is defined");
}
else {
    console.log("Height is undefined");
} */

//Equality operators == vs ===
/* const age  = 19;
if(age === 18) console.log('Adult');

const favorite = Number(prompt("What's your favorite number ?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23) {
    console.log("23 is an amazing number");
}
else if(favorite === 7) {
    console.log("7 is an amazing number");
}
else if(favorite === 10) {
    console.log("10 is an amaaing number");
}
else {
    console.log("Not in my options");
} */

/*
//Logical Operators
const hasDriverLicense = true; //A
const hasGoodVision = true; //B

//console.log(hasDriverLicense && hasGoodVision);
//console.log(hasDriverLicense || hasGoodVision)
//console.log(!hasGoodVision , !hasDriverLicense);

const isTired = false

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Eligible to drive");
}
else{
    console.log("Someone has to drive");
}
*/

/*
//Switch Statement
const day = prompt("Enter a day to know your schedule");

switch(day) {
    case 'monday':
        console.log("Planning");
        break;
    
    case 'tuesday' :
        console.log("Elaborating");
        break;
    
    case 'wednesday' :
        console.log("Describing");
        break;

    case 'thursday' :
    case 'friday' :
        console.log("Completion");
        break;

        default:
        console.log("Not a valid day");    
        break;
}
*/

/*
//Statements and Expressions 
3+4; // expression
true && false // expression

if(23 > 10) {
    const str = '23 is bigger' //it is an statement which returns no value
}
*/

/*Ternary Operator
const age = 16;
age>=18 ? console.log("Eligible to drive") : console.log("Not eligible to drive");

const wine = age>=18 ? "wine" : "water" ;
console.log(wine);
console.log(`I like to drink ${wine}`);
console.log(`I like to drink ${age>=18 ? "wine" : "water"}`); // Using template literals */