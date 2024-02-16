main();
function main() {
alert("Exercice 7 - Fusion de tableaux :");

let tableau = [1,2,3,4];
let tableau2 = [5,6,7,8];



function fusionTableau(tab1,tab2){
    tab2.forEach(element => {
        tab1.push(element);
    });
    return(tab1);
}

tableau=fusionTableau(tableau,tableau2);
console.log(`tableau fusionné: ${tableau}`);
}