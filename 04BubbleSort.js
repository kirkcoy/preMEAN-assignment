/*

Bubble Sort
Objectives:
Familiarity with nested loops.
Familiarity with a classic sorting algorithm.
Google CEO Eric Schmidt once asked Senator Barack Obama what the best way to sort a million 32-bit integers would be. Obama responded with,

"I think the bubble sort would be the wrong way to go."
Maybe it isn't the most efficient sort out there, but there are times when it is an appropriate choice!

This gif demonstrates how it works to sort an array of numbers:

It's called Bubble Sort because we can imagine we are sliding a bubble along the array. 

The bubble encompasses two neighboring values. 
If the larger number is to the left, we swap those values. 
Then we slide the bubble over one position. 
Once the bubble reaches the end of the array, we know that the largest value is in its proper position. 
We can then repeat the process for all the values except for the last value, since we know that it is already in place. 
And then we'll do it again, and again, and again, until we know all values are in their proper positions.

*/

function bubbleSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([6,5,3,1,8,7,2,4]));

/*

BONUS 1: Imagine you had to watch the gif above sort an array with 8000 elements - 1000x more elements than it currently has. How long would that take? Would it take 1000 times longer? No, much much worse! It would take 1000^2 times longer, or 1,000,000 times longer! But what if the array was already sorted, or very close to sorted? Bubble sort has the advantage that we may simultaneously detect whether the array is already sorted as we're sorting. If so, we may terminate the algorithm early. This is known as a fast exit. Implement a fast exit in your bubble sort.

*/

function bubbleSortBonus(arr){
    let state = true;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                state = false;
            }
        }
        if(state){
            return arr;
        } else {
            state = true;
        }
    }
    return arr;
}
console.log(bubbleSortBonus([6,5,3,1,8,7,2,4]));
console.log(bubbleSortBonus([7,2,3,7,6,7,8]));

// Classify each of the following functions according to their Big O Time complexity:

// O(n)
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

// O(1)
function findNth(arr, n){
    console.log(arr[n]);
}

// O(n)
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

// O(n^2)
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}