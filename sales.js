"use strict";
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];



const regions = [
    [1540, 1130, 1580, 1105],
    [2010, 1168, 2305, 4102],
    [2450, 1847, 2710, 2391],
    [1845, 1491, 1284, 1575],
    [2120, 1767, 1599, 3888]
];

let userInput = parseInt(prompt("Enter Region number (1-5): "));

if (userInput >= 1 && userInput <= 5) {
    let sum = 0;
    let region = regions[userInput - 1];
    for (let i = 0; i < region.length; i++) {
        sum += region[i];
    }
    document.write(`<p><b>Region ${userInput}:</b> ${region} <b>Total:</b> ${sum}</p>`);
} else {
    document.write("Invalid region number");
}