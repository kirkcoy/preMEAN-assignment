var tigger = { character : "Tigger" };
var piglet = { character : "Piglet" }
var pooh = { character : "Pooh" };
var bees = { character : "Bees" };
var owl = { character : "Owl" };
var robin = { character : "Robin" };
var rabbit = { character : "Rabbit" };
var gopher = { character : "Gopher" };
var kanga = { character : "Kanga" };
var eeyore = { character : "Eeyore" };
var heffalumps = { character : "Heffalumps" };

tigger.north = pooh;
piglet.north = owl;
piglet.east = pooh;
pooh.north = robin;
pooh.east = bees;
pooh.south = tigger;
pooh.west = piglet;
bees.north = rabit;
bees.west = pooh;
owl.east = robin;
owl.south = piglet;
robin.north = kanga;
robin.east = rabbit;
robin.south = pooh;
robin.west = owl;
rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = robin;
gopher.west = rabbit;
kanga.north = eeyore;
kanga.south = robin;
eeyore.east = heffalumps;
eeyore.south = kanga;
heffalumps.west = eeyore;

var player = {
    location : tigger
}

function move(direction){
    if(player.location[direction]){
        player.location = player.location[direction]
        console.log("You are now at " + player.location.character + "'s house");
    } else {
        console.log("You may not got that way!");
    }
}

move("north");
move("north");
move("east");
move("east");
move("east");
move("west");