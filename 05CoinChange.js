/*

Coin Change
Objectives:
Write a function that creates and returns an object.
Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

Example: coinChange(312) returns 

{dollars: 3, dimes: 1, pennies: 2}
Example: coinChange(78) returns 

{quarters: 3, pennies: 3}
BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.

Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns

{dollars: 3, quarters: 2, nickels: 1}


*/

function coinChange(cents){
    let coins = [
        ["dollars",0],
        ["quarters",0],
        ["dimes",0],
        ["nickels",0],
        ["pennies",0],
    ];
    let results = {};
    while(cents > 0){
        if(cents >= 100){
            coins[0][1] += 1;
            cents-=100;  
        } else if(cents >= 25){
            coins[1][1] += 1;
            cents-=25;   
        } else if(cents >= 10){
            coins[2][1] += 1;
            cents-=10;
        } else if(cents >= 5){
            coins[3][1] += 1;
            cents-=5;
        } else {
            coins[4][1] += cents;
           cents-=cents;
        }
    }
    for(let j = 0; j < coins.length; j++){
        if(coins[j][1] !== 0){
            results[coins[j][0]] = coins[j][1];
        }
    }
    return results;
}
console.log(coinChange(312));
console.log(coinChange(78));

// Or
function coinChange2(cents){
    let coins = [
        ["dollars",100],
        ["quarters",25],
        ["dimes",10],
        ["nickels",5],
        ["pennies",1],
    ];
    let results = {};
    for(let i = 0; i < coins.length; i++){
        results[coins[i][0]] = Math.floor(cents/coins[i][1])
        cents = cents % coins[i][1];
    }
    for(coin in results){
        if(results[coin] === 0){
            delete results[coin];
        }
    }
    return results;
}
console.log(coinChange2(312));
console.log(coinChange2(78));

// Bonus
function coinChange3(cents){
    let sumCoins = 0
    let coins = {
        "dollars":100,
        "quarters":25,
        "dimes":10,
        "nickels":5,
        "pennies":1
    };
    let results = {};
    for(coin in coins){
      for(cent in cents){
        if(coin == cent){
            sumCoins += coins[coin] * cents[cent];
        }
      }
    }
    while(sumCoins > 0){
        if(sumCoins>=100){
            results.dollars = Math.floor(sumCoins/100);
            sumCoins = sumCoins % 100;
        } else if(sumCoins>=25){
            results.quarters = Math.floor(sumCoins/25);
            sumCoins = sumCoins % 25;
        } else if(sumCoins>=10){
            results.dimes = Math.floor(sumCoins/10);
            sumCoins = sumCoins % 10;
        } else if(sumCoins>=5){
            results.nickels = Math.floor(sumCoins/5);
            sumCoins = sumCoins % 5;
        } else{
            results.pennies = sumCoins
            sumCoins = sumCoins % 1;
        }
    }
    return results;
}
console.log(coinChange3({dollars: 2, dimes: 15, pennies: 5})); 