// console.log("Hello World!");

var greeting = "Hello ";
// greeting = 5;

console.log(greeting + "World!");

console.log(typeof "Neil");

"no way!".toUpperCase()
"no way!".length

// Number

console.log(typeof 1.5);

// String

console.log("Don't Break");
('')
    (``)

String(5)
// -> "5"

var name = "Neil";
var day = "Monday";
console.log(`Hello ${name}, Happy ${day}`);

// Null

var myVariable = null

console.log(myVariable);

// Undefined

console.log(undefined + 1);

// Boolean
false
true

// Symbol

// Control Flow

if (1 > 0) {
    var message = "1 is greater than 0";
} else if (1 == 0) {
    var message = "1 is equal to 0";
} else {
    var message = "1 is not greater than 0";
}

console.log(message);

// Truthy & Falsy

if (null) {
    var result = "The expression evaluates to true.";
} else {
    var result = "The expression evaluates to false.";
}



console.log(3 + "hello");
console.log("Route" + 6 + 6);
console.log(6 + 6 + "Route");

// Equality
// true == false -> // false

2 == 2; // true
2 == "2"; // true
2 === "2"; // false


var mood = "angry"
var belly = "empty"
if (!mood === "angry" || belly === "empty") {
    console.log("I am HANGRY");
}
'and' ('&&')
'or' ('||')
'not' ('!')
