/*

Fizz Buzz
Objectives
Use of the modulus operator
Familiarity with loops
Familiarity with conditionals
Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
Write your code and run it with several examples to ensure it is working as expected. Use the modulus operator!

Example - fizzbuzz(15) would log the following (each element on its own line):

1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
BONUS 1: Validate the user input. If the function is not passed a positive number, either throw an error or return null.

Example - fizzbuzz("fifteen") would throw the following error:

Parameter must be a positive number
BONUS 2: Rather than have the function log each element, return a nicely formatted string with all the elements. Include commas where appropriate to make it easier to read.

Example - fizzbuzz(15) would return the following string:

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, and FizzBuzz.

*/



function display(strLength,i,n,last){
    if(strLength === 0){
        return i;
    } else if(last){
        return " and " + i + ".";
    } else {
        return ", " + i;
    }
}

function fizbuzz(n){
    let str = "";
    let last = false;
    if(n/1 === n){
        for(let i = 1; i <= n; i++){
            if(i == n){
                last = true;
            }
            if(i%3 === 0 && i%5 === 0){
                console.log("FizzBuzz"); // 1st question.
                str+=display(str.length,"FizzBuzz",n,last); // Bonus 2 question.
            } else if(i%5 === 0){
                str+=display(str.length,"Fizz",n,last); // Bonus 2 question.
                console.log("Fizz"); // 1st question.
            } else if(i%3 === 0){
                str+=display(str.length,"Buzz",n,last); // Bonus 2 question.
                console.log("Buzz"); // 1st question.
            } else {
                str+=display(str.length,i,n,last); // Bonus 2 question.
                console.log(i); // 1st question.
            }
        }
    } else {
        console.log("Parameter must be a positive number."); // Bonus 1 question.
        return null; // Bonus 1 question.
    }
    return "Answer: " + str; // Bonus 2 question.
}
console.log(fizbuzz(5));
console.log(fizbuzz(10));
console.log(fizbuzz(14));
console.log(fizbuzz(15));
console.log(fizbuzz("fifteen"));


