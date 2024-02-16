main();
function main() {
    alert("Exercice 8 - Calcul de la moyenne des notes :");

    let tableau = [2, 2, 10, 2];





    function moy() {
        let result=0
        tableau.forEach(element => {
            result += element;            
        });       
        
        let moyenne = result / tableau.length;
        return (moyenne);
    }

    let moyenne = moy();
    console.log(`la moyenne du tableau ${tableau} est: ${moyenne}`);
}