const myNumbers = [1, 2, 3, 4, 5]

for (let number of myNumbers) {
    console.log(`This is number ${number}`)
}

// forEach()
myNumbers.forEach((number, index) => {
    console.log(`This is number ${number} and the index position is ${index}`)
})

// multiply array elements by 2, into a new array
const multiplyByTwo = function (numbers) {
    const result = numbers.map((number) => {
        return number * 2
    })

    // numbers.forEach((number) => {
    //     result.push(number * 2)
    // })

    return result
}

console.log(multiplyByTwo(myNumbers))


// getEvens function
const getEvens = function (numbers) {
    const result = numbers.filter((number) => {
        return number % 2 === 0
    })

    // numbers.forEach((number) => {
    //     if (number % 2 === 0) {
    //         result.push(number)
    //     }
    // });

    return result
}

console.log(getEvens(myNumbers))


// sumElements function
const sumElements = function (numbers) {
    const total = numbers.reduce((runningTotal, number) => {
        return runningTotal += number
    }, 10)

    // numbers.forEach((number) => {
    //     total += number
    // })

    return total
}

console.log(sumElements(myNumbers))


const ourOwnForEach = function (array, callback) {
    for (let element of array) {
        callback(element)
    }
}

ourOwnForEach(myNumbers, (number) => {
    console.log('The number is:', number)
})
