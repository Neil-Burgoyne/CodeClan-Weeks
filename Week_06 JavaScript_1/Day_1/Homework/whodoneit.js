// Episode 1:

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);

// Prints Miss Scarlet because it is defined in murder scenario

// Episode 2:

const murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mrs. Peacock';
};

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Error, constant variable assigment. Murderer is already defined 

// Episode 3:

let murderer = 'Professor Plum';

const declareMurderer = function () {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// The declare function can only been seen in the declaremurderer function.

// Episode 4:

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function () {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// All suspects - Scarlett, Plum, Mustard
// Suspect 3 - Peacock

// Episode 5: 

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function (newWeapon) {
    scenario.weapon = newWeapon;
};

const declareWeapon = function () {
    return `The weapon is the ${scenario.weapon}.`;
};

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Weapon is the Revolver

// Episode 6:

let murderer = 'Colonel Mustard';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        murderer = 'Mrs. White';
    }

    plotTwist();
};

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prints Mrs. White as the murderer

// Episode 7:

let murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function () {
            murderer = 'Miss Scarlet';
        }

        unexpectedOutcome();
    }

    plotTwist();
};

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mr. Green because of the "let" variable not getting shown outwidth that code block

// Episode 8:

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function () {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function (room) {
        if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function (murderer) {
            if (scenario.murderer === murderer) {
                scenario.weapon = 'Candle Stick';
            }
        }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
};

const declareWeapon = function () {
    return `The weapon is ${scenario.weapon}.`
};

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// The weapon is the Cadle Stick

// Episode 9:

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
};

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);

// Murderer is Professor Plum because "let murderer = "Mrs. Peacock" is blocked scoped