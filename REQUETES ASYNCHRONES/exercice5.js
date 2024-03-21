function main() {

    class Request {
        constructor(prio, url) {
            this.prio = prio;
            this.url = url;
        }
    }
    
    let pendingPromises = new Array();    
    let queueArray = [new Array(), new Array(), new Array(), new Array(), new Array()]
    
    function pushPromise(prio, url) {
        pendingPromises.push(new Request(prio, url));
    }

    function addPromise(prio, url) {
        console.log("new promise added")
        pendingPromises.push(new Request(prio, url));
        pendingPromises.forEach(promise => {            
            queueArray[(promise.prio) - 1].push(promise)
        }); 
        sortAndRequest();       
    }

    async function getDatas(url) {
        let data, response;
        try {

            response = await fetch(url);
            console.log(" try " + url);
            console.log(response);
            data = await response.json();
            if (!response.ok) {
                throw new Error("response not OK")
            } else return (data);


        }

        catch (error) {
            console.warn(error);
            // throw:retourne la valeur error et passe la promise en rejected
            throw error
        }

    }
    
    function sortAndRequest() {
        console.log("sort prio and sending requests")
        setTimeout(()=>{
            for (let i = 4; i >= 0; i--) { 
            queueArray[i].forEach(promise=>getDatas(promise.url));
            } 
        },1000)
       
    }

    pushPromise(3, urlUsers);
    pushPromise(1, urlComments);
    pushPromise(1, urlComments);
    pushPromise(1, urlComments);
    pushPromise(4, urlPhotos);
    console.log(pendingPromises);
    addPromise(5, urlTodos);
    console.log(queueArray);
    
    console.log("End of script ex5 is here");
    
    
}
main();