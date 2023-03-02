const assert = require('assert')

assert.equal(true, false)

assert.equal(1, '1')

assert.equal([], ![])

assert.strictEqual(1, '1')

const firstArray = [1, 2, 3]
const secondArray = firstArray
assert.strictEqual(firstArray, secondArray)

assert.deepStrictEqual([1, 2, 3], [1, 2, 3])