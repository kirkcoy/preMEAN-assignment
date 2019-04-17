/*

User languages and interests
Objectives:
Familiarity with moving through JavaScript objects to find relevant data.
Essential practice for when we need to sift through data we get from an API.
Notice that in the code snippet below, we have an array of users. Each user is an object. Each user has the key languages, which is associated with an array of strings. Each user also has the key interests, which is associated with an object. There are varying keys within this interests object, and each of those keys is associated with an array of strings.

users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]
Write a function called userLanguages that accepts an array of users, such as the one shown above. Return a string that lists all the users by first name and last name and the languages that each user knows. Make the string as nicely formatted as possible so that it is easy to read.

Example: userLanguages(users) returns

Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL. 
Winnie the Pooh knows Python, Swift, and Java. 
Arthur Dent knows JavaScript, HTML, and Go.
BONUS: Adjust the userLanguages function to also include what each user's interests are.

Example: userLanguages(users) returns

Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL.
Kermit is also interested in guitar, flute, tap, salsa, Black Mirror, and Stranger Things.
Winnie the Pooh knows Python, Swift, and Java. 
Winnie is also interested in honey, honeycomb, honeysuckle, and Heffalumps.
Arthur Dent knows JavaScript, HTML, and Go.
Arthur is also interested in stars, planets, improbability, tea, and yellow bulldozers.copy


*/
let users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
];

function userLanguages(users){
    let str = "";
    for(let i = 0; i < users.length; i++){
        str += users[i].fname + " " + users[i].lname + " knows ";
        for(let j = 0; j < users[i].languages.length; j++){
            if(j == users[i].languages.length-1){
                str += "and " + users[i].languages[j] + ".";
            } else {
                str += users[i].languages[j] + ", ";
            }
        }
        str += '\n';
    }
    return str;
}
console.log(userLanguages(users));

// Bonus
function userLanguages2(users){
    let str = "";
    for(let i = 0; i < users.length; i++){
        str += users[i].fname + " " + users[i].lname + " knows ";
        for(let j = 0; j < users[i].languages.length; j++){
            if(j == users[i].languages.length-1){
                str += "and " + users[i].languages[j] + "." ;
            } else {
                str += users[i].languages[j] + ", ";
            }
        }
        str += '\n';
        str += users[i].fname + " is also interested in ";
        let interestsArr = Object.values(users[i].interests);
        for(let k = 0; k < interestsArr.length; k++){
            for(let l = 0; l < interestsArr[k].length; l++){
                if(k == interestsArr.length-1 && l == interestsArr[k].length-1){
                    str += "and " + interestsArr[k][l] + ".";
                } else {
                    str += interestsArr[k][l] + ", ";
                }
            }
        }
        str += '\n';
    }
    return str;
}
console.log(userLanguages2(users));