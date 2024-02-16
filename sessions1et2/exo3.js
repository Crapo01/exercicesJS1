main();
function main() {
    alert("exo3");
    let numberA = Number(prompt("type number A"));
    let numberB = Number(prompt("type number B"));
    console.log(`${typeof (numberA)}: ${numberA} and ${typeof (numberB)}: ${numberB}`)
    //  edge case :number = Nan
    if (numberA < numberB) {
        console.log("le nombre le plus grand est: " + numberB)
    }
    if (numberA > numberB) {
        console.log("le nombre le plus grand est: " + numberA)
    }
    if (numberA === numberB) {
        console.log(numberA + " and " + numberB + " are equals")
    }
    /*!!! typeof returns a str
    
    if (typeof(numberA) !== "number" || typeof(numberB) !== "number"){
        console.log(typeof(numberA)+" "+typeof(numberB))
        console.log(numberA+" "+numberB+" cannot be compared!!!")
    }
    ALWAYS TRUE but can be Nan
    */

    if (isNaN(numberA) || isNaN(numberB)) {
        console.log(typeof (numberA) + " " + typeof (numberB))
        console.log(numberA + " and " + numberB + " cannot be compared!!!")
    }
}
