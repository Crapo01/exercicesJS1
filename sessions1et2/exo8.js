main();
function main() {
    
    alert("exo8");
    let numberToFactor = "0";
    let factorElements = [1];
    let result=1;
    
    do {
        isNaN(numberToFactor) ? console.log("numberToFactor est un NaN!!!") : console.log("numberToFactor est à 0 par default");
        numberToFactor =parseInt(prompt("type  a numberToFactor"));
        console.log(numberToFactor + typeof (numberToFactor))
    } while (isNaN(numberToFactor));
    console.log("numberToFactor ok")
    
    factorElements.length=numberToFactor+1;
    
    for (let i = 0; i < factorElements.length; i++) {
        factorElements[i]=i;
        
    }
    console.log(factorElements)
    
    for (let i = 1; i < factorElements.length; i++) {
        result = factorElements[i]*result;
        console.log(result);
        console.log(`${i} : ${factorElements[i]}: ${result}` )
        
    }
    alert("nettoyage de la console") ;
    console.clear();   
    
    console.log(`La factorielle de ${numberToFactor} est ${result}`)
    
}