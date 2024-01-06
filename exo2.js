main();
function main() {
alert("exo2");

let numberA=parseInt(prompt("type number A"));
let numberB=Number(prompt("type number B"));
let result= numberA + numberB
console.log(`ADDITION: ${numberA} + ${numberB} = ${result}`)
result= numberA - numberB
console.log(`SOUSTRACTION: ${numberA} - ${numberB} = ${result}`)
result= numberA * numberB
console.log(`MULTIPLICATION: ${numberA} * ${numberB} = ${result}`)
result= numberA / numberB
console.log(`DIVISION: ${numberA} / ${numberB} = ${result}`)
}