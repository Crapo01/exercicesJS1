
main();
function main() {
alert("exo7");
    let number = "0";
    let premier = false;
    
    do {
        isNaN(number) ? console.log("number est un NaN!!!") : console.log("number est à 0 par default");
        number =Number(prompt("type  a number"));
        console.log(number + typeof (number))
    } while (isNaN(number));
    console.log("number ok")
    
    for (let i = 3; i <= (number-1); i+=2) {
        if (number%i !== 0 && number != i){
            console.log(`${i} ne divise pas ${number}`);
            premier =true;
            
            
        }else{
            console.log(`${i} divise ${number}`);
            premier = false;
            break;
        }
    }
    
    premier ? console.log(number+" est premier"):console.log(number+" n'est pas premier")
}


    


