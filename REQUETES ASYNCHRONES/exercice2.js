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
    const url51 = "https://hjdfkhofhio"
    
    async function getDatasWithFetch(url) {
        
        try{
            const response = await fetch(url);
            console.log(response);
            if (!response.ok) throw new Error("response not OK");
            const data = await response.json();
            let users = new Array();
            data.forEach(user => {users.push(new User(user.name,user.email,user.id,user.address));
            });
            console.log(users);    
    
        }
    
        catch(error){
            console.log(error);
        }
        finally{
            console.log(`Promise for fetch ${url} is resolved`);

        }
    }
    
    
    let p1=getDatasWithFetch(urlUsers);
    let p2=getDatasWithFetch(url51);
    
    console.log("End of script ex 2 here");
}
main();