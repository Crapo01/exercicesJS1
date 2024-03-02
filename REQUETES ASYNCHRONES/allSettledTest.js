function main() {
    
    const urlUsers = "https://jsonplaceholder.typicode.com/users"
    const url51 = "https://hjdfkhofhio"
    const urlFbck = "https://jsonplaceholder.typicode.com/albums"
    
    let first_promise = fetchData(urlUsers);
    
    let second_promise = fetchData(url51);
    
    let third_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("TypeScript...!!");
        }, 3000);
    });
    
    async function displayResult() {
    let promise_array = [first_promise, second_promise, third_promise];
    let results = await Promise.allSettled(promise_array);
    console.log(results);
    results.forEach((result,index) =>{ if (result.status !== "fulfilled"){
            console.log(result+"fallback")
            promise_array[index]=fetch (urlFbck).then(resp=>resp.json());
            
            }else{
                console.log("fullfilled")  
            }        
        })
        results = await Promise.allSettled(promise_array);
        console.log("final:",results); 
    }
    
    function fetchData(url){
        console.log("fetch",url)
        return(fetch (url).then(resp=>resp.json()));
    }
    
    displayResult();
}
main();
