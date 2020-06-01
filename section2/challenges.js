// CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1
// CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1 - CHALLENGE #1

// BMI = mass/height*height ---> kg/metters

/*
let johnMass = 92;

let markMass = 78;
let johnHeight = 1.95;
let markHeight = 1.69;

let MarkBMI = markMass / (markHeight * markHeight);
let JohnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = MarkBMI > JohnBMI;
console.log("JohnBMI:", JohnBMI);
console.log("MarkBMI", MarkBMI);




if(MarkBMI > JohnBMI) {
    console.log("Is Mark's BMI higher than John's?:", markHigherBMI);
} else if (JohnBMI > MarkBMI) {
    console.log("Is John's BMI higher than Mark's?:", markHigherBMI);
} else {
    console.log("Both of you are the same:" );
}
*/

// CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2
// CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2 - CHALLENGE #2

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws. */
/*
let JohnTeamAverage = (3 + 4 + 5) / 3;
let MikeTeamAverage = (3 + 4 + 5) / 3;
let MaryTeamAverage = (3 + 4 + 5) / 3;
let highestAverageScore;
if (JohnTeamAverage > MikeTeamAverage && JohnTeamAverage > MaryTeamAverage) {
    highestAverageScore = JohnTeamAverage;
    console.log("The Winner Team is: Jhon's Team!!!");
    console.log("With an highest Average Score of: ",highestAverageScore);
} else if(MikeTeamAverage > JohnTeamAverage && MikeTeamAverage > MaryTeamAverage) {
    highestAverageScore = MikeTeamAverage;
    console.log("The Winner Team is: Mike's Team!!!");
    console.log("With an highest Average Score of: ", highestAverageScore);
} else if(MaryTeamAverage > JohnTeamAverage && MaryTeamAverage > MikeTeamAverage) {
    highestAverageScore = MaryTeamAverage;
    console.log("The Winner Team is: Mary's Team!!!");
    console.log("With an highest Average Score of: ",highestAverageScore);
} else {
    console.log("Both of you are the same: Both teams are Winners!!!" );
}

 */

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

/*
let bills = [124, 48, 268];
let percentage;
let finalPaidAmount;
let percentages = [];
function tipCalculator(bill) {
    if (bill < 50) {
        percentage = bill * .2;
        percentages[1] = percentage;
        finalPaidAmount = bill + percentage;
    } else if (bill >= 50 && bill <= 200) {
        percentage = bill * .15;
        percentages[0] = percentage;
        finalPaidAmount = bill + percentage;
    } else if (bill > 200) {
        percentage = bill * .1;
        percentages[2] = percentage;
        finalPaidAmount = bill + percentage;
    }
    return finalPaidAmount;
}

console.log("Total Amount for Bill#1: ",tipCalculator(bills[0]));
console.log("Total Amount for Bill#2: ",tipCalculator(bills[1]));
console.log("Total Amount for Bill#3: ",tipCalculator(bills[2]));
console.log("Tip applied is 15% so you have: " +percentages[0]);
console.log("Tip applied is 20% so you have: " +percentages[1]);
console.log("Tip applied is 10% so you have: " +percentages[2]);

let totolAmount = [tipCalculator(bills[0]),
                tipCalculator(bills[1]),
                tipCalculator(bills[2])];

let tips = [
    percentages[0],
    percentages[1],
    percentages[2]
];

console.log("Tips:", tips);
console.log("Totol Amount:", totolAmount);
*/

/*****************************
 * CODING CHALLENGE 4
 */
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

/*
let John = {
    fullName: "John Grass",
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
let Mark = {
    fullName: "Mark Knight",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
console.log("John BMI: ", John.calcBMI());
console.log("Mark BMI: ", Mark.calcBMI());

if (John.calcBMI() > Mark.calcBMI()) {
    console.log(John.fullName +" has the higher BMI: "+John.bmi);
} else if (Mark.calcBMI() > John.calcBMI()) {
    console.log(Mark.fullName +" has the higher BMI: "+Mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array,
and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array,
divide it by the number of elements in it (that's how you calculate the average)

7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

1. Create an object with an array for the bill values
 */

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i]  = bill + bill * percentage;
        }
    }
};
var mark = {
    fullName: 'Mark Smith',
    bills: [77, 375, 110, 45],
    tipCalculator: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = bill * .2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = bill * .15;
            } else {
                percentage = bill * .25;
            }
            this.tips[i] = percentage;
            this.finalValues[i]  = percentage + bill;
        }
        return this.finalValues;
    }
};
john.tipCalculator();
mark.tipCalculator();
console.log(john);
console.log(mark);

function averageTip(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i]
    }
    return sum / tips.length;
}
john.average = averageTip(john.tips);
mark.average = averageTip(mark.tips);
console.log("john.average:", john);
console.log("mark.average:", mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}

 */
