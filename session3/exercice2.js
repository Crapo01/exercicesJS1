let myDiv = document.createElement('div');
console.log(myDiv);
let colorSwitch = document.getElementById("colorSelector")
console.log(colorSwitch);
document.body.appendChild(myDiv);
let myP = document.createElement("p");
myDiv.appendChild(myP);
myP.innerHTML = "Survolez moi";

function colorChange(col){
    console.log(col);
    //if (col === 1) myP.style.color= "blue";
    myP.style.color= col.style.color;
};

myP.onmouseover= ()=> colorSwitch.style.visibility ="visible";