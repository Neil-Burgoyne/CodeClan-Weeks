const Person = function (name, pet) {
    this.name = name;
    this.pet = pet;
}

Person.prototype.greet = function () {
    console.log(`Hi! My name is ${this.name}`);
}

Person.prototype.feedPet = function () {
    const message = `${this.name} fed ${this.pet.name} a ${food}`;
    console.log(message);
    this.pet.eat(food);
}

module.exports = Person;