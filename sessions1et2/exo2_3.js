main();
function main() {
alert("Exercice 3 - Création et manipulation d'objets :");

let person = {
    firstName : "alice" ,
    lastName : "Smith" ,
    age : 25
}


function afficherPersonne(obj){
    console.log(`Prenom: ${obj.firstName}, Nom: ${obj.lastName}, Age: ${obj.age}`)
}

afficherPersonne(person)
}