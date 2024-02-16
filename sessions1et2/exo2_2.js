 main();
function main() {
alert("Exercice 2 - Recherche d'un élément dans un tableau :");

let array=[2,4,6,8,10];
let searched = 11;
let found = false;

array.forEach(element => {
    if (element === searched) found =true;
});


console.log(`le chiffre ${searched} est il present dans l'array ${array}? ${found} `);

searched = 6;
found =false;
array.map(num => {
    if (num === searched) found =true;
});
console.log(`le chiffre ${searched} est il present dans l'array ${array}? ${found} `);

};