let myList = document.getElementById("list");
let myBtn = document.getElementById("myBtn");
let myClr = document.getElementById("myBtnClr");
let myInput = document.getElementById("task");

function addTask(text,checked) {
    let myItem = document.createElement("div");
    let myLi = document.createElement("li");
    let myCheckbox = document.createElement("INPUT");
    let myDelete = document.createElement("span");
    let myLis = document.querySelectorAll("li");
    myCheckbox.setAttribute("type", "checkbox");
    myCheckbox.setAttribute("onclick","setLocalData()");
    
    myItem.style.display = "flex";
    myItem.style.justifyContent = "center";
    myItem.style.fontSize = "2em"
    myLi.style.listStyle = "none";
    myLi.style.width= "50%";
    myLi.style.textAlign = "center";
    myLi.innerHTML = text;
    myLi.setAttribute("ondblclick","rename(this)");
    myDelete.innerHTML = "X";
    myList.appendChild(myItem);    
    myItem.appendChild(myCheckbox);
    myItem.appendChild(myLi);
    myItem.appendChild(myDelete);
    myDelete.setAttribute("onclick","del(this)");

    

    myCheckbox.checked= checked;
    
    addLocalData();
    

    
}

function clr() {
    window.localStorage.clear();
    while (myList.firstChild) {
        myList.removeChild(myList.lastChild);
      }
}

function del(e) {
    console.log("deleted");
    e.parentNode.remove();
    setLocalData();
}

function rename(element) {
    let newText= newTask();
    if (newText)
    element.innerHTML = newText;
    setLocalData();
}


function setLocalData() {
    console.log("updated storage");
    let myLis = document.querySelectorAll("li");
    window.localStorage.clear();
    myLis.forEach((e,i)=>{
        let dataSet = {"text": e.innerHTML , "check": e.previousElementSibling.checked , "set": "set" };
        window.localStorage.setItem(i,JSON.stringify(dataSet));        
    })
}

function addLocalData() {
    console.log("added item on local storage");
    let myLis = document.querySelectorAll("li");
    let myMod = (myLis[myLis.length-1]);
    let dataSet = {"text": myMod.innerHTML , "check": myMod.previousElementSibling.checked , "set": "add" };
    console.log((myLis.length-1)+dataSet);
    window.localStorage.setItem(myLis.length-1,JSON.stringify(dataSet));    
    };

function newTask() {
    let text = prompt("modifiez la tache:");
    if (text){
        regEx = /^[0-9a-zA-Z '.-]*$/
        
        if (regEx.test(text)) {
            return(text);
        }
        
    }
    
}

    // let k=0;
    // console.log("init saved tasks");
    // do while (window.localStorage.key(k)) {
    //     console.log("check key:"+k);
    //     addTask(window.localStorage.getItem(k));
    //     k+=1;
    // }


myBtn.addEventListener("click",()=>{
    let text = myInput.value;
    if (text){
        regEx = /^[0-9a-zA-Z '.-]*$/
        
        if (regEx.test(text)) {
            addTask(text,false);
            myInput.value="";
            console.log("ok");
        }
    }
    
});

document.body.onload= function initData(){
    let k=0;
    let e;
    console.log("init saved tasks");
    while (window.localStorage.key(k)) {
        console.log("check key:"+k);
        e=JSON.parse(window.localStorage.getItem(k));
        console.log(e);
        addTask(e.text,e.check);
        k+=1;
    }
    // setLocalData();
};