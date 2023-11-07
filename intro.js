console.log('Hello')

const firstName = 'Shattuck'
let age = 35
let isCool = true

let capstoneName = null //intentionally absent of value
let newTattoo = undefined //unintentionally absent of value

// this is a comment. May be personal information. Or code we do not want yet
// ctrl / will turn a whole line into & out of a comment
/*
This is a longer note to ourself.

*/

console.log(firstName)
console.log(`Hello ${firstName}, you have festered ${age} years on this hunk of rock`)
/* when using back ticks you can use ${} to reference variable values
and they get placed in the strings
*/

// -----------------------------------MATH--------------------------
let x = 40
let y = 10
let z = 7 + 8
let sum = x - (y * z)
console.log(sum)
// --------------------------CONDITIONAL LOGIC-----------------------
if (x > y) {
    console.log('x is greater than y')

} else {
    console.log('You are a moron if you thought x was greater')
}
if (isCool) {
    console.log('Like a Pimp')
} else {
    console.log('Gay!')
}

if (firstName === "Shattuck") {
    console.log('Hail thee Master')
} else {
    console.log('Get thee hence Satan')
}
