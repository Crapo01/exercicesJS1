main();
function main() {
    alert("Exercice 10 analyse de texte");

    let texte = "JavaScript est un langage de programmation largement utilisé pour le développement web.Il est polyvalent et peut être utilisé pour créer des applications web dynamiques! Les développeurs JavaScript utilisent fréquemment des bibliothèques comme React et Angular?";
    
    let rapport = {
        caracteres: 0,
        mots: 0,
        phrases: 0,
        paragraphes: 0
    }
    
    function  statistiquesTexte(str) {       
        rapport.caracteres = str.length;
        rapport.phrases=str.match(/[.!?]/g);
        rapport.paragraphes=str.match(/[\n]/g);
        rapport.mots=str.match(/\s/g);
        console.log(str);
        console.log(rapport);
        (rapport.paragraphes === null) ? rapport.paragraphes=1 : rapport.paragraphes=rapport.paragraphes.length+1;
        console.log(
        `Contient:
        ${rapport.caracteres} caractères,
        ${rapport.mots.length} mots,
        ${rapport.phrases.length} phrases et
        ${rapport.paragraphes} paragraphes.
        `);
            
    }

    statistiquesTexte(texte);
    texte = "Le soleil brille.\n Il fait nuit!"
    statistiquesTexte(texte);
}