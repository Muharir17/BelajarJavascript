var numbers = [1,2,3]
const plus3 = numbers.map(num=>num+3)
console.log(plus3)

const plus4function = num => num+4
const plus4 = numbers.map(plus4function)
console.log(plus4)