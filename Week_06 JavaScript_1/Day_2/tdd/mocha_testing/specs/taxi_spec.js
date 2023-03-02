const assert = require('assert')
const Taxi = require('../taxi')

describe('Taxi', function () {
    let taxi

    beforeEach(function () {
        taxi = new Taxi('Toyota', 'Prius', 'Mike')
    })

    it('should have a manufacturer', function () {
        // Arrange

        // Act

        // Assert
        const actual = taxi.manufacturer
        const expected = 'Toyota'
        assert.strictEqual(actual, expected)
    })

    it('should have a model', function () {
        assert.strictEqual(taxi.model, 'Prius')
    })

    it('should have a driver', function () {
        assert.strictEqual(taxi.driver, 'Mike')
    })

    describe('passengers', function () {
        it('should start with no passengers', function () {
            assert.deepStrictEqual(taxi.passengers, [])
        })
    })

    // Number of Passengers

    it('should be able to return the number of passengers', function () {
        assert.strictEqual(taxi.numberOfPassengers(), 0)
    })

    // Add Passenger

    it('should be able to add passenger', function () {
        taxi.addPassenger('Mike');
        assert.strictEqual(taxi.numberOfPassengers(), 1)
    })

    // Remove Passenger By Name

    it('should be able to remove a passenger by name', function () {
        taxi.addPassenger('Mike')
        taxi.addPassenger('Lucas')
        taxi.removePassengerByName('Lucas')
        assert.deepStrictEqual(taxi.passengers, ['Mike'])
    })

    // Remove All Passengers

    it('should be able to remove all passengers', function () {
        taxi.addPassenger('Mike')
        taxi.addPassenger('Lucas')
        taxi.removePassengerByName('Lucas')
        taxi.removeAllPassengers()
        assert.strictEqual(taxi.numberOfPassengers(), 0)
    })
})