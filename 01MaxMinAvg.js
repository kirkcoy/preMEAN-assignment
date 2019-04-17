/*

Max, min, and average
Objectives:

Iterate over an array
Construct a string
Use the return statement
Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

*/

function maxMinAvg(arr){
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    let str = `The minimum is ${min}, the maximum is ${max}, and the average is ${sum/arr.length}.`;
    return str
}
console.log(maxMinAvg([1,-2,9,4]));
