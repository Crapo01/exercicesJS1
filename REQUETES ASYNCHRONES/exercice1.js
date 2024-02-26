function simplePromise() {
    return(new Promise((resolve, reject) => {
        setTimeout(()=>resolve("done"),2000)
    }))
}
function brokenPromise() {
    return(new Promise((resolve, reject) => {
        setTimeout(()=>reject("Error detected"),3000)
    }))
}

simplePromise()
.then((value)=>console.log(`ex1 ${value} after 2 seconds!!!`))
.catch((error)=>console.log(`ex1 ${error} after 2 seconds!!!`))

brokenPromise()
.then((value)=>console.log(`ex1 ${value} after 3 seconds!!!`))
.catch((error)=>console.log(`ex1 ${error} after 3 seconds!!!`))
console.log("End of script ex1 is here");
