main();
function main() {
    
    alert("exo9");
    let count = 10
    let step =setInterval(function() {
        if (count > 0){
            console.log(count);
        } else{
            console.log("Compte à rebours terminé !");
            clearInterval(step);
        }  
        count -=1;    
    }, 1000);
    
}