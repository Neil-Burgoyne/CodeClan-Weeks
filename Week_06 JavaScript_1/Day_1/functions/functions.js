// Function Declaration
function sayHello(name = 'World') { //  default parameter
    return `Hello ${name}!`
}

//console.log('sayHello message:', sayHello); // referencing a function
//console.log('sayHello message:', sayHello()); // invoking a function
console.log('sayHello message:', sayHello('Neil')); // argument

// Function Expression

var add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

console.log('1 + 3 with add:', add(1, 3));

// Arrow Function

var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

console.log('multiply 2 by 5:', multiply(2, 5));
// -> multiply 2 by 5: 10

// Implicit Return

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log('multiply 2 by 5:', multiply(2, 5));

// Task 1

function calculateTotal(numbers) {
    var total = 0;
    for (var number of numbers) {
        total += number;
    }
    return total;
}

var sum = calculateTotal([10, 40, 200, 50]);
console.log('sum of array of numbers:', sum);

// Task 1

var objectHasKey = function (object, searchString) {
    for (var key in object) {
        if (searchString === key) {
            return true;
        }
    }
    return false;
}

var person = {
    name: 'Neil',
    age: 30
};

var keyIsFound = objectHasKey(person, 'name');
var keyNotFound = objectHasKey(person, 'email');

console.log('keyIsFound - should be true:', keyIsFound);
console.log('keyNotFound - should be false:', keyNotFound);

(function() {
    console.log('Hi!');
})()