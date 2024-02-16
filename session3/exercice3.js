let myItems =document.querySelectorAll("li");

myItems.forEach((i)=> i.addEventListener("click",changeStyle));

function deleteItem(item){
    let liItem=item.parentNode;
    liItem.parentNode.removeChild(liItem)
};

function changeStyle() {
    this.style.fontSize= "large";
    this.style.color= "green";
}

