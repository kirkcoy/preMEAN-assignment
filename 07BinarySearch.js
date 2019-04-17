/*

Binary Search
Objectives:
Familiarity with binary search, a method of searching that greatly reduces the time needed to find a value in a sorted array.
Given an array of sorted numbers and a value (also a number), return whether the array contains that value. Return the index position of the value if it exists and -1 if it does not exist. 

Do not sequentially iterate through the array. Take advantage of the fact that the array is sorted and use a 'divide and conquer' technique. Very similar to when we are searching for a word in a dictionary (the book kind) we may: 

Start our search in the center and determine whether we need to search the back half or the front half. 
Choose a spot around the center of the half of the array we still need to search.
From here, determine which quarter of the array we still need to search. 
In this way our search is very rapidly narrowed until we find out whether the value we are searching for is in the array or not.

Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93) returns -1 and should only take about 4 iterations.

Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)returns 5.

BONUS: What is the Big O time complexity of binary search?

BONUS: If you solved this problem with recursion (if your function is calling itself), solve it without recursion. Otherwise, solve it again with recursion.

*/

function binarySearch(arr, num){
    var count = 0;
    var start = 0;
    var end = arr.length-1;
    var middle = Math.floor((end+start)/2);
    if(arr[start] == num){
        return start;
    } else if(arr[end] == num){
        return end;
    } else {
        while(arr[middle] != num && start < end){
            if(arr[middle] > num){
                end = middle - 1;
            } else if(arr[middle] < num){
                start = middle + 1;
            }
            middle = Math.floor((end+start)/2);
        }
        if(arr[middle] == num){
            return middle;
        } else {
            return -1;
        }
    }

// Or

    // switch (num){
    //     case arr[start]:
    //         return start;
    //     case arr[end]:
    //         return end;
    //     default:
    //         while(arr[middle] != num && start < end){
    //             if(arr[middle] > num){
    //                 end = middle - 1;
    //             } else if(arr[middle] < num){
    //                 start = middle +1;
    //             }
    //             middle = Math.floor((end+start)/2);
    //         }
    //         if(arr[middle] == num){
    //             console.log(middle);
    //             return middle;
    //         } else {
    //             console.log(-1);
    //             return -1;
    //         }
    // }
}

console.log(binarySearch([1,2,3,4,5,6],3)+" answer");
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93)+" answer");
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)+" answer");
console.log(binarySearch([1,2,4,5,6,7,9],8)+" answer");
console.log(binarySearch([1,2,4,5,6,7],2)+" answer");

// Bonus:Big O time complexity is O(n)
// Solve with recurssion

function bSR(array,number,start,end){
    let middle = Math.floor((end+start)/2);
    if(start < end){
        if(array[middle] == number){
            return middle;
        } else if (array[middle] > number){
            return bSR(array,number,start,end-1);
        } else if (array[middle] < number){
            return bSR(array,number,start+1,end);
        } 
    } else {
        return -1
    }
}
function binarySearchRecussion(arr,num){
    if(arr[0] == num){
        return 0;
    } else if(arr[arr.length-1] == num){
        return arr.length-1;
    } else {
        let result = bSR(arr,num,0,arr.length-1);
        return result;
    }
}
console.log(binarySearchRecussion([1,2,3,4,5,6],3)+" answer");
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93)+" answer");
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)+" answer");
console.log(binarySearch([1,2,4,5,6,7,9],8)+" answer");
console.log(binarySearch([1,2,4,5,6,7],2)+" answer");