let myButton = document.getElementById("button1");
console.log(myButton);
myButton.onclick = function (button) {
    document.querySelector("textarea").innerHTML="HELLO WORLD !";
}