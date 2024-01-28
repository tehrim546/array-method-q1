"use strict";
//Use the filter method to get an array of even numbers from a given array. Utilize a lambda function as the filtering condition.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = numbersArray.filter((number) => number % 2 === 0);
console.log("Original Array:", numbersArray);
console.log("Even Numbers Array:", evenNumbersArray);
