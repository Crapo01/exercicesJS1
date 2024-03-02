function main() {

    class CacheManager {
        constructor() {
            this.storage = window.localStorage;
        }
        checkLocalStorage(key,url) {
            
            
            if (!this.storage.getItem(key)) {
                console.log("################# set in localStorage #################");
                setLocalStorage(url, key,this);              
                
            }else{
                console.log("################# get from localStorage #####################")                
                this.key =JSON.parse(this.storage.getItem(key));
                logData();
            }
                
            
        }
    }
    async function setLocalStorage(url, key) {
        
            response=fetch(url)
            response
            .then(resp=> {
                console.log(resp);
                return (resp.json());

            })
            .then(resp=> {
                console.log("json object passed:");
                console.log(resp);
                resp=JSON.stringify(resp);                
                // set les data JSON STRINGIFIED
                window.localStorage.setItem(key, resp);                
                logData();
            })
            
            
        }
        
    


    const urlUsers = "https://jsonplaceholder.typicode.com/users"
    const urlPhotos = "https://jsonplaceholder.typicode.com/photos"

    function logData() {
        console.log("logData:");
        console.log(cacheManager.storage);        
    }

    
    let cacheManager = new CacheManager()
    cacheManager.checkLocalStorage("users",urlUsers);
    cacheManager.checkLocalStorage("photos",urlPhotos);
    console.log("End of script ex6 is here");
}
main();