main();
function main() {
    alert("Exercice 9 - Filtrage de tableaux :");

    let tableau = [2, 3, 10, 2, 7, 4];
    let tableauPair = new Array
    
    function sortEvens(num) {       
        if (num % 2 === 0) tableauPair.push(num);
    }

    tableau.map(sortEvens)
    console.log(`tableau à filtrer: ${tableau}`);
    console.log(`tableau des pairs: ${tableauPair}`);
}