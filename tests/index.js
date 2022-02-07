const assert = require("assert");
const myModule = require("../index");
assert.strictEqual(myModule.add(1, 2), 3);
console.log("ok");

console.time('factorial')
const result = myModule.factorial(15)
console.log('factorial result: ', result)
console.timeEnd('factorial')
