/* The secret number is 1809. I am restricted to numbers of 5 to 8 digits. And the value must be a multiple of the secret
value. So the random number which is the multiplier must be between 6 and 55,279 inclusive. */

var raw_random = parseInt((Math.random() * (55279 - 6 + 1)), 10) + 6
var true_random = raw_random * 1809

console.log(true_random)
