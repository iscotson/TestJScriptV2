
******************
JScript

if ( 10 > 3 ) 
{
	// do this
}
else // "otherwise"
{
    // do this code instead
}



//An example of an if/else statement with modulo in the condition



if( 16 % 4 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

// Check if the user is ready to play!

confirm ("I am ready to play");
var age = prompt("what's your age") ;
if (age < 13)
   {
      console.log("your to young, but you can play on")
   }
else
    {
      console.log("play on dude")
    }
  //  
console.log("You are at a Metallica concert, and you hear this lyric 'Lace my shoes off, start racing.'");
    
console.log("Suddenly, Fred stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Metallica on stage?");
//
if (userAnswer === "yes")
   {
      console.log("You and Fred start racing. It's neck and neck! You win by a shoelace!")
   }
else
    {
      console.log("Oh no! Fred shakes his head and sings 'I set a pace, so I can race without pacing.'")
    }
  //  
  var feedback =  prompt("rate this game out of 10");
  //
  if (feedback > 8)
   {
      console.log("Thank you! We should race at the next concert!")
   }
else
    {
      console.log("I'll keep practicing coding and racing.")
    }
  //  
  
  
  
  // This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(9);

// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Ian");


// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(6);
console.log(newNumber);

// Write your function starting on line 3
// for passing mutiple parms
var perimeterBox = function(length, width) {
    return (length * 2) + (width * 2);
};
perimeterBox(3,9);

var nameString = function (name) {
//    console.log("Great to see you," + " " + name);
    return "Hi, I am" + " " + name;
};

// On line 11, call the greeting function!
var hello = nameString("Ian");
console.log(hello);


// Write your function below. 
// Don't forget to call your function!

var sleepCheck = function (numHours) {
    if (numHours >= 8) 
    { 
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else
    {
        return "Get some more shut eye!";
    }
}
//
sleepCheck(10);
sleepCheck(5);
sleepCheck(8);


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);
//
if (computerChoice <= 0.33)
   {
      computerChoice = "rock"
   }
else
    if (computerChoice > 0.33 && computerChoice <= 0.66)
   {
      computerChoice = "paper"
   }
    else
    {
       computerChoice = "scissors"
    }
console.log(computerChoice);
  //  

  
  
  
  var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
            return "The result is a tie!";
        }
};


var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    } 
    else 
        if(choice1 === "rock") {
	       if(choice2 === "scissors") { 
	            return "rock wins!";
            }
	       else
	       {
	            return "paper wins!";
            }
        }
};



var compare = function(choice1, choice2) {
    if(choice1 === choice2) 
    {
        return "The result is a tie!";
    } 
    else 
        if(choice1 === "rock") 
        {
	       if(choice2 === "scissors") 
	       { 
	            return "rock wins!";
            }
	       else
	       {
	            return "paper wins!";
            }
        }
        else
             if(choice1 === "paper") 
             { 
	            if(choice2 === "rock") 
	            { 
	               return "paper wins!";
                }
            }()
	            else
	        {
	                return "scissors wins!";
            }

};






var userChoice = prompt("Do you choose rock, paper or scissors?");     
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

compare(userChoice,computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) 
    {
        return "The result is a tie!";
    } 
    else 
        if(choice1 === "rock") 
        {
	       if(choice2 === "scissors") 
	       { 
	            return "rock wins!";
            }
	       else
	       {
	            return "paper wins!";
            }
        }
        else
             if(choice1 === "paper") 
             { 
	            if(choice2 === "rock") 
	            { 
	               return "paper wins!";
                }   
	            else
	            {
	                return "scissors wins!";
                }
             }
            else
                if(choice1 === "scissors") 
                 { 
	                if(choice2 === "rock") 
	                { 
	                 return "rock wins!";
                    }
	                else
	                {
	                 return "scissors wins!";
                    } 
                 }
            
};



// Example of a for loop:

for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}


// Edit this for loop!

for (var i = 5; i < 51; i+=5) {
	console.log(i);
}

for (var i = 10; i >= 0; i--) {
	console.log(i);
}

// ARRAY

var junk  = ["hello", "World", 12, 25];
	console.log(junk);


// Let's print out every element of an array using a for loop

var cities = ["Melbourne", "Paris", "London", "Florence"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}


/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}


var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


var understand = true;

while(understand === true) {
	console.log("I'm learning while loops!");
	understand = false;
}


var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}


//Remember to set your condition outside the loop!

var counter = 1
var loop = function(){
	while(counter < 4){
		//Your code goes here!
		console.log("I'm looping!");
		counter++
	}
};

loop();

//Remember to make your condition true outside the loop!
var condition = true;
var soloLoop = function(){

  //Your code goes here!
	while(condition){
		//Your code goes here!
		console.log("Looped once!");
	    condition = false;
	};
};

soloLoop();

var getToDaChoppa = function(){
  // Write your do/while loop here!
 var condition = false; 
  do {
    // The thing to do at least once!
		console.log("Looped once!");
    } while(condition);
};

getToDaChoppa();


var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    /*do this*/
    if (youHit) {
        console.log("You hit the dragon and did damage!");
    } else {
    console.log("The dragon burninates you! You're toast."); 
    }
    slaying = false;
}

// Even test
var isEven = function(number) {
  // Your code goes here!
  
  if ( number % 2 === 0 ) {
	return true;
}
else // "otherwise"
{
    return false;
}
  //
};

var isEven = function(number) {
  // Your code goes here!
  
  if ( number % 2 === 0 ) 
  {
	return true; }
else if (isNaN(number)) {
    return " not a number"; }
else {
    return false; }
  //
};

// Case (switch) statment
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

var answer = prompt("best car?", "Type your choice here");

switch(answer) {
  case 'Golf':
    console.log("not bad, but needs to be GTI");
    break;
  // Add your code here!
  case '86':
    console.log("not bad, but needs new wheels");
    break;
  case 'MX5':
    console.log("not bad, but no back seat");
    break;
  default:
    console.log("Huh! I'm not sure what " + answer + " is. How does a ferrari sound?");    
}

// Logical operators (and/or/not)

// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}


// Declare your variables here!

var tired = true
var bored = false

var nap = function() {
  // Add your if/else statement here!
  // Complete lines 3 and 4!
if(tired || bored) {
    return true;
} else {
    return false
}

};

var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}




var user = prompt("What car do you like?").toUpperCase();

switch(user) {
    case 'MINI':
        // do stuff
        var model = prompt("Nice! Soft Top(YES/NO)?").toUpperCase();
        var colour = prompt("British racing green (YES/NO)?").toUpperCase();
        if (model === 'YES' || colour === 'YES') {
         console.log("at least 2 out of 3! nice work!"); 
        } else {
         console.log("wrong model AND wrong colour!");   
        }
    break;
    case 'GOLF':
        // do stuff
        var model = prompt("Nice! Soft Top(YES/NO)?").toUpperCase();
        var colour = prompt("Black (YES/NO)?").toUpperCase();
        if (model === 'YES' || colour === 'YES') {
         console.log("at least 2 out of 3! nice work!"); 
        } else {
         console.log("wrong model AND wrong colour!");   
        }
    break;
    case 'MX5':
        // do stuff
        var model = prompt("Nice! Soft Top(YES/NO)?").toUpperCase();
        var colour = prompt("Black (YES/NO)?").toUpperCase();
        if (model === 'YES' && colour === 'YES') {
         console.log("3 out of 3! nice work!"); 
        } else {
         console.log("wrong model or wrong colour!");   
        }
    break;
    
    default:
    // do default
}

// ARRAYS

var list = ["Ian", "Adele", "Nick", "Joseph"];

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages[2]);
	
var newArray = [[1, 1, 1], [1, 1,1 ], [1, 1, 1]];

// OBJECTS

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();



var me = {
    name:  'Ian',
    age:  29,
};

var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};
var emptyObj = {};

var myObj = new Object();
myObj["name"] = "Charlie";
myObj.name = "Charlie";

var me = new Object();
me.name = "Ian";
me.age = 29;

var object1 = new Object();
object1.name = "Ian";
object1.age = 29;

var object2 = new Object();
object2.car = "Kia";
object2.colour = "Red";

var object3 = new Object();
object3.friend1 = "Garry";
object3.age = 39;

var newObj = {}
var newArray = [ [1, newObj, "ian"], [7] ];

var newArray = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: newArray,
  // Add your code here!
  
};

var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");


for (var counter = 1; counter < 21; counter++) {
	if(counter % 3 === 0 && counter % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        if(counter % 3 === 0) 
        {
        console.log("Fizz");
        } else {
            if(counter % 5 === 0) 
            {
                console.log("Buzz"); 
            } else {
        	    console.log(counter); 
            }
        }
    }
}


var movie = prompt("Movie?", "Type your choice here");

var getReview = function (movie) {

switch(movie) {
    case 'Toy Story 2':
        return "Great story. Mean prospector.";
    break;
    case "Finding Nemo":
        return "Cool animation, and funny turtles.";
    break;
    case "The Lion King":
        return "Great songs.";
    break;   
    default:
        return "I don't know!";
    };   
};

// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
    species: "beagle",
    age: 10
    };
// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;


// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product

var multiply = function (x, y) {
  return x * y;
};
multiply(3,2);



// Similarly, a method is just like a function associated with an object.
// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20
bob.setAge(20);

var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50);

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;
// here, update Susan's age to 35 using the method
susan.setAge(35);

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth) {
  this.width = newWidth;
}; 

// here change the width to 8 and height to 6 using our new methods
rectangle.setWidth(8);
rectangle.setHeight(6);

var square1 = new Object();
square1.sideLength = 6;
square1.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square1.calcArea = function() {
  return this.sideLength * this.sideLength ;
};

var p = square1.calcPerimeter();
var a = square1.calcArea();

function Person(name,age) {
  this.name = name;
  this.age = age;
}


// CUSTOM CONSTRUCTORS
// But this approach of adding in properties one at a time for every object is tedious! 
// Instead of always using the boring Object constructor, we can make our own constructors.

// This way we can set the properties for an object right when it is created. 
// So instead of using the Object constructor which is empty and has no properties, 
// we can make our own constructors which have properties.

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);


function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, color, breed, size) {
    this.age = age;
    this.color = color;
    this.breed = breed;
    this.size = size;
}


function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}
var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);



// CONTRUCTORS WITH METHODS
// =========================
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return (this.height * 2) + (this.width * 2);
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");


// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}
// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);

// Our Person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
}


// Passing object into functions
// =============================

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice,billy)

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.age
    }   else {
        return person2.age;
    }
};   
// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    
     this.perimeter = function() {
        return 2 * Math.PI * this.radius;
    };
};

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

// 2 objects, into an array, and print to console.
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];
console.log(mary.phoneNumber)

// 2 objects create function to print out
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson function added here

var printPerson = function (person) {
    console.log(person.firstName + " " + person.lastName);
}
printPerson(contacts[0]);
printPerson(contacts[1]);

// Listing thru using for loop.


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var counter = 0; counter < contactsLength; counter++) {
      printPerson(contacts[counter]);
    };
};
list;


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName) {
   var contactsLength = contacts.length;
   for (var i = 0; i < contactsLength; i++) {
	    if (lastName === contacts[i].lastName)
	    {
		printPerson(contacts[i]);
        }
   }    
}

search("Jones")


/*Create an add function
passing approp parms*/
function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };   
};



add("JOhn", "Smith", "john.smith@example.com", "(123) 111-2222");

list();

/* An Objective Review
Let's review the basics of objects covered in our previous lesson on objects. 
Recall we can create objects using either literal notation or constructor notation.

Literal notation creates a single object. Literal notation uses curly brackets { } and 
the object's default properties are defined within the brackets using property:value notation.
Constructor notation involves defining an object constructor. 
And like defining a function, we use the function keyword. You can think of this constructor 
as a "template" from which you can create multiple objects. To create a new object from a constructor, we use the new keyword.
*/

