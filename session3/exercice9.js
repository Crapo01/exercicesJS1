let myImages = document.querySelectorAll("img");
let grabbedImg;
let grabbed,selected;
myImages.forEach(init);


function init(val, i) {
    console.log(val);
    val.style.width = "200px";    
    val.style.left = i * 300 + "px";
    val.style.top = 100+ i * 50 + "px"
}

function dragDrop(img) {
    console.log("dragged" + img);
    grabbedImg = img;
}
// after left mousedown
function move(e) {
    e.preventDefault();
    if (grabbed) {
        let x = e.clientX;
        let y = e.clientY;
        let offsetX= parseInt(grabbedImg.width)/2;
        let offsetY= parseInt(grabbedImg.height)/2;
        grabbedImg.style.left = x-offsetX+"px";
        grabbedImg.style.top = y-offsetY+"px";        
    }
}

window.onmousedown = (event)=>{
    console.log(event.button);
    
    if (event.button === 0){
        move(event);
        grabbed=true;
        document.getElementById("demo").innerHTML = "move mouse to relocate image" ;
        grabbedImg.style.opacity = "0.5";
    }  
    
    
    if (event.button === 1){        
        selected=true;
        grabbedImg.style.opacity= "0.5"; 
        document.getElementById("demo").innerHTML = "wheel up and down to resize" ;   
    } 
} 

window.onmousemove = function (event) { move(event) };

window.onmouseup = ()=>{
    if (grabbedImg){
        grabbedImg.style.opacity = "1";
        grabbedImg = undefined;
    }
    selected=false;
    grabbed=false;
    document.getElementById("demo").innerHTML = "left mouse to move, wheel to resize" ;
    
} 

window.onwheel = (e)=>{
    console.log("resizing wheel"+e.deltaY);
    if (selected) {
        
        let size=parseInt(grabbedImg.width);
        
        if (e.deltaY>0 && size >50)
        grabbedImg.style.width = size-10+"px";
        if (e.deltaY<0 && size <500)
        grabbedImg.style.width = size+10+"px";
    }
}

