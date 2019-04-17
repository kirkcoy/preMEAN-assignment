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
        console.log("Bzz bzzzzz bzzz bzzz");
    }
};
var owl = { 
    character : "Owl", 
    greet : function(){
        console.log("Owllllll");
    }
};
var robin = { 
    character : "Robin", 
    greet : function(){
        console.log("Hooood");
    }
};
var rabbit = { 
    character : "Rabbit", 
    greet : function(){
        console.log("Roggger");
    }
};
var gopher = { 
    character : "Gopher", 
    greet : function(){
        console.log("Golfffff");
    }
};
var kanga = { 
    character : "Kanga", 
    greet : function(){
        console.log("Roooooo");
    }
};
var eeyore = { 
    character : "Eeyore", 
    greet : function(){
        console.log("Yoreeeee");
    }
};
var heffalumps = { 
    character : "Heffalumps", 
    greet : function(){
        console.log("Lumppppps");
    }
};

tigger.north = pooh;
piglet.north = owl;
piglet.east = pooh;
pooh.north = robin;
pooh.east = bees;
pooh.south = tigger;
pooh.west = piglet;
bees.north = rabbit;
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
    location : null,
    honey : false,
    mission : null
}

function pickUp(){
    if(player.location.character == "Bees"){
        player.honey = true;
        console.log("You've gathered some honey!")
    } else {
        console.log("There is no honey at this location.")
    }
    
}

function mission(){
    let locationMissions = [tigger,piglet,pooh,owl,robin,rabbit,gopher,kanga,eeyore,heffalumps];
    player.location = locationMissions[Math.floor(Math.random()*10)];
    player.mission = player.location.character;
    console.log(player.location.character + " is looking for honey! Can you help?");
}

function drop(){
    if(player.honey){
        if(player.mission == player.location.character){
            player.honey = false;
            console.log("Congratulation! You delivered the honey to " + player.mission);
        } else {
            console.log("Oops, not the right destination. Move to " + player.mission + " place!");
        }
    } else {
        console.log("No honey yet!");
    }
}

function move(direction){
    if(player.location[direction]){
        player.location = player.location[direction];
        console.log("You are now at " + player.location.character + "'s house");
        console.log(player.location.greet())
    } else {
        console.log("You may not go that way!");
    }
}

function start(){
    mission();
}

start();

// move("north");
// move("east");
// move("south");
// move("west");