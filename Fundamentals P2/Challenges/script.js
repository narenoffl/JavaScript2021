'use strict';

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