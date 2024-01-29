main();
function main() {
alert("Exercice 5 - Gestion de liste de tâches :");

let taches = [];

 

function ajoutTache(){
    let tache=prompt("entrez une nouvelle tache: ");
    taches.push(tache);    
}

ajoutTache();
ajoutTache();
console.log(`taches à faire: ${taches}`);
}