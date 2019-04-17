var user1 = {
    name: "Kermit",
    email: "kermit@sesame.org",
    friend: {
        name: "Miss Piggy",
        email: "piggy@sesame.org"
    }
}
console.log(user1.name);
console.log(user1.email);
console.log(user1.friend.name);
console.log(user1.friend.email);

console.log(user1["name"]);
console.log(user1["email"]);
console.log(user1["friend"]["name"]);
console.log(user1["friend"]["email"]);