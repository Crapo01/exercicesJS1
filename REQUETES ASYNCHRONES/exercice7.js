
    
    class User{
        constructor(id,name,phone,username,website,address,company){
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.username = username;
            this.website = website;
            this.address = address;
            this.company = company;
        }

        displayUserDatas() {
            
            const dataList =
             `
             
             <li> USERNAME: ${this.username}</li>
             <li> PHONE: ${this.phone}</li>
             <li> WEBSITE: ${this.website}</li>
             <li> ID: ${this.id}</li>             
             <li> ADDRESS: ${this.address.street} ${this.address.suite} </li>
             <li> CITY: ${this.address.city}</li>
             <li> ZIPCODE: ${this.address.zipcode}</li>
             <li> GEO: lat ${this.address.geo.lat} lon ${this.address.geo.lon}</li>
             <li> COMPANY: ${this.company.name} / ${this.company.bs}</li>
             <li> ${this.company.catchphrase}</li>
             `
            return `<ul>${dataList}</ul>`
        }
    }
    class Address{
        constructor(city,geo,street,suite,zipcode){
            this.city = city;
            this.geo = geo;
            this.street = street;
            this.suite = suite;
            this.zipcode = zipcode;            
        }
    }
    class Company{
        constructor(name,catchphrase,bs){
            this.name = name;
            this.catchphrase = catchphrase;
            this.bs = bs;                        
        }
    }
    class Geo{
        constructor(lat,lon){
            this.lat = lat;
            this.lon = lon;                                    
        }
    }
    
    const myDisplay = document.getElementById("usersDisplay");
    let usersList = new Array();
    let usersNames = new Array();
    const fetchPromise = fetch(urlUsers);    
    myDisplay.innerHTML = "<p>Loading...";
    
    
    // handle fetchPromise response
    fetchPromise
    .then(response => {
        console.log(response);
        if (!response.ok) throw new Error("Reason of error: not OK");
        return response.json();
    })
    .then(users => {
        console.log(users);
        users.forEach(user => {
            addNewUser(user);
        });
        console.log(usersList);
        myDisplay.innerHTML = listOfNames()
                
    })
    
    
    .catch(error=>console.log(error));
    //################################

    
    function addNewUser(user) {
        usersNames.push(user.name);
        usersList.push(new User(user.id,user.name,user.phone,user.username,user.website,
            new Address(user.address.city,new Geo(user.address.geo.lat,user.address.geo.lng),user.address.street,user.address.suite,user.address.zipcode),
            new Company(user.company.name,user.company.catchPhrase,user.company.bs)))
    }
    function listOfNames() {
        const names = usersList.map(person => `<li type="button" onclick="getUserDatas(this.innerHTML)" class=" user btn btn-primary d-block mx-5 my-1" data-bs-toggle="modal" data-bs-target="#exampleModal">${person.name}</li>`).join("\n");
        return `<ul>${names}</ul>`
    }

    function getUserDatas(name) {
        let myTitle=document.getElementById("exampleModalLabel");
        myTitle.innerHTML = name;
        let myInfos = document.getElementById("userInfos");
        console.log(myInfos);
        let user = usersList[usersNames.findIndex(data=> data === name)];
        console.log(user);
        myInfos.innerHTML = user.displayUserDatas();
    }

    


