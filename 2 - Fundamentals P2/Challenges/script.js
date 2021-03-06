"use strict";

/*CHALLENGE 1
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 

//Solution

//Test 1 Data

const calcAverage = (a,b,c) => 
    (a + b + c)/3;

//console.log(calcAverage(2,3,4));

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner =  (avgDolphins, avgKoalas) => {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins ${avgDolphins} points beat Koalas ${avgKoalas} points`);
    }
    else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas ${avgKoalas} points beat Dolphins ${avgDolphins} points`);
    }
    else{
        console.log("No result");
    }
}

checkWinner(scoreDolphins,scoreKoalas);


//Test 2 Data
 scoreDolphins = calcAverage(85,54,41);
 scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas);  */

/* --------------------------------------------------------------------------------------------*/

/* Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

/*const calcTip = function(bill) {
    return bill>=50 && bill<=300 ? (15/100) * bill : (20/100) * bill;
}
const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [calcTip(bills[0])+tips[0],calcTip(bills[1])+tips[1],calcTip(bills[2])+tips[2] ]

console.log(bills, tips, total); */

/* --------------------------------------------------------------------------------------------*/

/*Challenge 3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

/* const mark = {
    firstName: 'Mark',
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2
        return this.BMI;
    }
}

mark.calcBMI();

const john = {
    firstName: 'John',
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2
        return this.BMI;
    }
}

john.calcBMI();

console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
    console.log(`Mark's ${mark.BMI} has higher BMI than John's ${john.BMI}`);
}
else if (john.BMI > mark.calcBMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
  }
 else{
     console.log("No result");
 } 
 */

// --------------------------------------------------------------------------------------//

/* Challenge 4
 Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays */

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
};

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  tips.push(calcTip(bill[i]));
  totals.push(tips + bill[i]);
}

console.log(bill, tips, totals);

//Calculating Average

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + i;
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
