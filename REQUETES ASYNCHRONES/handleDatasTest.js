function main() {
    // blueprint pour stocker 3 données dans un objet animecharacter
    class AnimeCharacter{
        constructor(name,age,films){
            this.name = name;
            this.age = age;
            this.films = films;
        }
    }
    // Target main element
    const main = document.getElementById("main");
    const fetchPromise = fetch("https://ghibliapi.vercel.app/people");
    // fetch teste si l'API fonctionne et est accessible
    
    // Loading Placeholder appends un <p> as a child of main a la place des données en attendant la promise
    main.innerHTML = "<p>Loading...";
    
    
    console.log(fetchPromise);
    // retourne une response "pending"
    // car la reponse est juste promise mais pas encore accessible
    
    // .then va trigger quand la promise aura retourné une reponse"fulfilled ou rejected"
    fetchPromise
    .then(response => {
        // retourne une response "fulfilled/rejected"
        // pas de données finales accessibles juste si l'API fulfill or reject la request 
        console.log(response);
        
        // si la reponse est rejected ou si on throw une erreur ici, l'execution saute direct au prochain catch
        if (!response.ok) throw new Error("Reason of error: not OK");
        return(response.json());
    })
    // recupere le return(response.json()); et le passe dans peoples
    .then(peoples=>{
        console.log(peoples);
        // test de stockage recup dans localstorage
        console.log("stocke peoples dans localData");
        window.localStorage.setItem("peoples",JSON.stringify(peoples))
        let localData=JSON.parse(window.localStorage.getItem("peoples"));
        console.log("peoples recuperé depuis localData:");
        console.log(localData);
        // ok marche bien
        // recuperation des noms+age+gender uniquement
        let charactersShortData = peoples.map(person => new AnimeCharacter(person.name,person.age,person.films));
        let charactersShortList = peoples.map(person =>`- ${person.name}\n"${person.age}"\n"${person.films}"`).join("\n");
        let charactersName = peoples.map(person =>person.name).join("\n");        
        console.log(charactersShortData);
        console.log(charactersShortList);
        console.log(charactersName);
        // Append names to main element
        main.innerHTML = listOfNames(peoples);
    });
    // listOfNames interpolate some markup in order to show that each person belongs to a list item. Our listOfNames will return an unordered list of all our names. We will finally assign this listOfNames to our main.innerHTML element.
    function listOfNames(peoples) {
        const names = peoples.map(person => `<li>${person.name}</li>`).join("\n");
        return `<ul>${names}</ul>`
      }
    
}
main();
