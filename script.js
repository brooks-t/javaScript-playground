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



