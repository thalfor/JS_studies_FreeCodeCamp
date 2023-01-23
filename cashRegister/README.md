# Cash Register Basics

This was a [FreeCodeCamp](https://www.freecodecamp.org/) JS Project [(link)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register) that was required to complete the course [Javascript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/).

## Project

in this project the user will input an array having the Product's Price, how much the Client gave, the array that is how much of each value the Cash Register has:

    checkCashRegister(
        19.5,
        20,
        [
            ["PENNY", 1.01],
            ["NICKEL", 2.05],
            ["DIME", 3.1],
            ["QUARTER", 4.25],
            ["ONE", 90],
            ["FIVE", 55],
            ["TEN", 20],
            ["TWENTY", 60],
            ["ONE HUNDRED", 100]
        ]
    )

it is our job to check if if it's necessary the return some amount of money and if so we have to check if it's possible to do it with our chash register amount. To return we need to check from the highest to lowest change possible. This is what we need to return:

    status: "OPEN",
    change: [
        ["QUARTER", 0.5]
    ]

- if it's possible to return and we have the change (that is not the total amount of our cash register) we print "OPEN"
- if it's impossible, we do not have the amount required we print "INSUFFICIENT_FUNDS"
- if it's possible to return and we have the change and it is the total amount of our cash register we print "CLOSED"
