/*

Braces Valid
Objectives:
Exercise those logic muscles!
Use data structures (arrays, objects) effectively to complete the challenge.
Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

HINT: Keep in mind that you may use arrays and objects to keep your information organized!

Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

*/

function bracesValid(braces){
    let arr = [];
    let dictBraces = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    for(let i = 0; i < braces.length; i++){
       
        if(braces[i] == ")" || braces[i] == "]" || braces[i] == "}"){
            if(arr[arr.length-1] == dictBraces[braces[i]]){
                arr.pop();
            } else {
                return false;
            }
        } else if(braces[i] == "(" || braces[i] == "[" || braces[i] == "{"){
            arr.push(braces[i]);
        }
    }
    if (arr.length === 0) {
        return true
    } else { 
        return false; 
    }
}
console.log(bracesValid("{(A})"));
console.log(bracesValid("{{(B)}}["));
console.log(bracesValid("}{(C)}}["));
console.log(bracesValid("{{(D)}}[D]"));