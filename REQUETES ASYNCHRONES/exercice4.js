function main() {
    class User{
        constructor(name,email,id,address){
            this.name = name;
            this.email = email;
            this.id = id;
            this.address = address;
        }
    }

    
    const urlUsers = "https://jsonplaceholder.typicode.com/users"
    // compteur de tentatives
    let attemptCount=1;
    // nbre de co qui doivent echouer
    let failedCo=2;
    //Max de retry avant erreur de co
    let attemptMax=3;
    async function getDatasWithFetch(url) {
        
        try{
            if (attemptCount<=failedCo) throw new Error("simulated 500 retry");
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            let users = new Array();
            data.forEach(user => {users.push(new User(user.name,user.email,user.id,user.address));
            });
            console.log(users);    
    
        }
    
        catch(error){
            
            if (attemptCount<= attemptMax){
                setTimeout(()=>{getDatasWithFetch(url);
                console.log(`try #${attemptCount}`);
                attemptCount++;
            },1000);
            } else throw new Error("Max retry attempt reached cannot connect to: ",url);
        }        
    }
    
    
    getDatasWithFetch(urlUsers);    
    console.log("End of script ex 4 here");
}
main();