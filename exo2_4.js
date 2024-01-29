main();
function main() {
alert("Exercice 4 - Tri de tableau :");

let tableau = [10,9,8,7,6,2];

 //code de guru!! 
//   sorted =tableau.sort();
//   console.log(sorted);

function trierTableau(tab){
    console.log(tableau);
    let temp = 0;
    let sorted=true;
    for (let index = 0; index < tab.length; index++) {
        if (tab[index+1] <tab[index]){
            temp=tab[index];
            tab[index]=tab[index+1];
            tab[index+1]=temp;
            sorted = false 
            console.log(`index switch: ${tab}`);           
        }
        
    }
    if (!sorted) trierTableau(tab);
    return(tab);
}

tableau=trierTableau(tableau)
console.log(`tableau trié: ${tableau}`);
}