console.log(`-----------------------------------`);
console.log("Assign values to variables and log them to the console:");

var catName = "Gibbs";
var catAge = 10;

console.log(`${catName} is ${catAge} years old.`);

console.log(`---------------------------------`);
console.log(`Primitive datatypes checked using 'typeof' operator:`)

var myUndefined;
var myString = "Hello World";
var myNumberInt = 69;
var myNumberDecimal = 69.69;
var myBooleanTrue = true;
var myBooleanFalse = false;
var myArray = [1,2,3,4,5];
var myNull = null;
var myZero = 0;
var myDate = Date();
var myNaN = NaN;

console.log(typeof myUndefined);
console.log(typeof myString);
console.log(typeof myNumberInt);
console.log(typeof myNumberDecimal);
console.log(typeof myBooleanTrue);
console.log(typeof myBooleanFalse);
console.log(typeof myArray);
console.log(typeof myNull);
console.log(typeof myZero);
console.log(typeof myDate);
console.log(myDate);
console.log(typeof myNaN);

console.log(`---------------------------------`);
console.log(`Arithmetic operators in action:`);

var myA = 100;
var myB = 25;
var myC = "10";

console.log(`var myA = ${myA}, var myB = ${myB}, and var myC = ${myC}.`);
console.log(`myA is a ${typeof myA}, myB is a ${typeof myB}, and myC is a ${typeof myC}.`);
console.log(`myA + myB = ${myA + myB}`);
console.log(`myA + myC = ${myA + myC}`);
var myAC = myA + myC;
console.log(`myAC = ${myAC}`);
console.log(`myAC data type is ${typeof myAC}`);

console.log(`---------------------------------`);
console.log(`Iterating over an Array`);

var kittyArray = ["Gibbs", "Deckster", "Harry Catnip Jr", "Jayda", "Shiva", "Bahamut", "Jackson"];

console.log(kittyArray);
console.log(`kittyArray length: ${kittyArray.length}`);

for (i=0; i < kittyArray.length; i++) {
    console.log(`Index ${i}: ${kittyArray[i]}`);
}

console.log(`---------------------------------`);
console.log(`Finding the longest string in an array`);

var longestName = "";
for (i=0; i < kittyArray.length; i++) {
    if (kittyArray[i].length > longestName.length) {
        longestName = kittyArray[i];
    }
}

console.log(`${longestName} is the longest name!`);

console.log(`---------------------------------`);
console.log(`Evaluating expressions in variables`);

var price = 100;
var expression1 = (price < 100);
var expression2 = (price > 100);

if(expression1) {
    console.log("True");
} else if (!expression1) {
    console.log("False");
}

console.log(`---------------------------------`);
console.log(`FUNCTIONS`);
console.log(`---------------------------------`);

function declareHelloKitty() {
    console.log("This function says: Hello, Kitty!");
}

declareHelloKitty();

var helloKittyExpression = function() {
    console.log("This is a function expression that says: Hello, Kitty!");
}

helloKittyExpression();

function declareHelloKittyAgain(x,y,z) {
    console.log(`Hello kitty. My kitty parameter values are ${x}, ${y}, and ${z}`);
}

declareHelloKittyAgain("Deckster", "Gibbs", "Wendel");

var expressHelloKittyAgain = function(x,y,z) {
    console.log(`I will now express my Hello's to ${x}, ${y}, and ${z}`);
}

expressHelloKittyAgain("Jada", "Henry", "Catnip");

function areTheyEqual(x,y) {
    if (x===y) {
        console.log(`They are equal in type and value`);
    } else if (x==y) {
        console.log(`They are equal in value`);
    } else {
        console.log(`They are not equal`);
    }
}
var expressAreTheyEqual = function(x,y) {
    if (x===y) {
        console.log(`They are equal in type and value`);
    } else if (x==y) {
        console.log(`They are equal in value`);
    } else {
        console.log(`They are not equal`);
    }
}

areTheyEqual(10,10);
expressAreTheyEqual(10, true);

console.log(`---------------------------------`);
console.log(`METHODS`);
console.log(`---------------------------------`);

var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

console.log(planets);

console.log(planets.pop());
console.log(planets);

console.log(planets.push("Klendathu"));
console.log(planets);

console.log(planets.shift());
console.log(planets);

console.log(planets.unshift("Mercury"));
console.log(planets);

planets[planets.length] = "Pluto";
console.log(planets);

var spaceDust = constellations.concat(planets);
console.log(constellations);
console.log(planets);
console.log(spaceDust);

console.log(planets.splice(3, 0, "Sol", "Pav"));
console.log(planets);

console.log(planets.splice(3,2,"Alpha", "Beta", "Delta"));
console.log(planets);

console.log(planets.splice(3,1));
console.log(planets);

console.log(planets.slice(2));
console.log(planets);

var newPlanets = planets.slice(2);
console.log(newPlanets);

var newSpaceDust = spaceDust.slice(2,6);
console.log(newSpaceDust);
console.log(spaceDust);

console.log(spaceDust);
console.log(spaceDust.sort());
console.log(spaceDust);

console.log(newSpaceDust.toString());
console.log(newSpaceDust);

var stringSpaceDust = newSpaceDust.toString();
console.log(`I am a newly converted string: ${stringSpaceDust}.`);

console.log(`================================================`);
console.log(spaceDust);
console.log(spaceDust.reverse());
console.log(spaceDust);

console.log(`---------------------------`);
console.log(`Remember that the sort() method sorts values as strings which works well for stuff like Apple vs Banana, but not so much for numeric values`);

var points = [40, 100, 1, 5, 25, 10];
console.log(points);

console.log(points.sort());
console.log(points);

console.log(points.sort(function(a,b){return a - b}));
console.log(points);

console.log(points.sort(function(a,b){return b - a}));
console.log(points);

console.log(`RANDOM SORT: ${points.sort(function(){return 0.5 - Math.random()})}`);
console.log(`------------------------------------------`)
console.log(points);
console.log(points.sort(function(a,b){return a - b}));
console.log(`${points[0]} is the lowest value`);
console.log(`${points[points.length-1]} is the highest value`);
console.log(`-------------------------------------------`)

console.log(`-------------------------------------------\nOBJECTS\n-------------------------------------------`);

var catObject = {
    name: "Deckster",
    age: 12,
    weight: 15,
    alive: false,
    favFood: "Shreds",
    owners: [
        "Brooks",
        "Hannah"
    ],
    meowFunc: function() {
        console.log("Meow!")
    },
    thisFunc: function() {
        console.log(this);
    },
    foodFunc: function() {
        console.log(this.favFood);
    }
};

console.log(catObject);
console.log(catObject.name);
console.log(catObject.age);
console.log(catObject.alive);
console.log(catObject.owners[0]);
catObject.meowFunc();

catObject.furColor = "Black";
catObject.lastName = "Tiffany";

console.log(catObject);

if (catObject.owners.includes("Brooks")) {
    console.log(`Yes! Brooks is an owner!`);
}

console.log(this);
catObject.thisFunc();
catObject.foodFunc();
