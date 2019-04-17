var tigger = { 
    character : "Tigger", 
    greet : function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};
var piglet = { 
    character : "Piglet", 
    greet : function(){
        console.log("Oh d-d-d-d-dear! I wasn't expecting company!");
    }
};
var pooh = { 
    character : "Pooh", 
    greet : function(){
        console.log("Oh bother");
    }
};
var bees = { 
    character : "Bees", 
    greet : function(){
        console.log("");
    }
};
var owl = { 
    character : "Owl", 
    greet : function(){
        console.log("");
    }
};
var robin = { 
    character : "Robin", 
    greet : function(){
        console.log("");
    }
};
var rabbit = { 
    character : "Rabbit", 
    greet : function(){
        console.log("");
    }
};
var gopher = { 
    character : "Gopher", 
    greet : function(){
        console.log("");
    }
};
var kanga = { 
    character : "Kanga", 
    greet : function(){
        console.log("");
    }
};
var eeyore = { 
    character : "Eeyore", 
    greet : function(){
        console.log("");
    }
};
var heffalumps = { 
    character : "Heffalumps", 
    greet : function(){
        console.log("");
    }
};

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
    location : pooh
}

function move(direction){
    if(player.location[direction]){
        player.location = player.location[direction]
        console.log("You are now at " + player.location.character + "'s house");
        console.log(player.location.greet())
    } else {
        console.log("You may not got that way!");
    }
}

move("south");
move("north");
move("west");