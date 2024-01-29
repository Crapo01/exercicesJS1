main();
function main() {
alert("Exercice 6 - Création d'objets complexes :");

let livre = {
    titre : "Harry Potter",
    auteur : "JK Rowling",
    année : 1997
};
let livre2 = {
    titre : "Le Hobbit",
    auteur : "Tolkien",
    année : 1937
};

let collection =[livre];

 

function ajoutLivre(e){    
    collection.push(e);    
}

ajoutLivre(livre2);

console.log(
    `liste de livres:
    titre: ${collection[0].titre}, Auteur: ${collection[0].auteur},Année: ${collection[0].année}
    titre: ${collection[1].titre}, Auteur: ${collection[1].auteur},Année: ${collection[1].année}
    `);
}