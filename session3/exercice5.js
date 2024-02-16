let slides = document.getElementsByClassName("slide");
let myModal = document.getElementById("modalWindow");
//let myModalImg=myModal.firstElementChild;
console.log(slides);
let activeSlideIndex=0;
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");


function updateSlide() {
   for (let index = 0; index < slides.length; index++) {
    if (index===activeSlideIndex) slides[index].style.display = "block"; else slides[index].style.display = "none";
    
   }
}

function openModal(image) {
    
    myModal.firstElementChild.src=image.src;
    console.log(myModal.firstElementChild);
    //myModal.firstChild.src=image.src;
    console.log(myModal.firstChild);
    myModal.style.display = "block";
    myModal.firstElementChild.style.width= "50%";
}



updateSlide();



nextBtn.addEventListener("click",()=>{
    activeSlideIndex++;
    if (activeSlideIndex>slides.length-1) activeSlideIndex = 0;
    updateSlide();
});

prevBtn.addEventListener("click",()=>{
    activeSlideIndex--;
    if (activeSlideIndex<0) activeSlideIndex = slides.length-1;
    updateSlide();
});

myModal.addEventListener("click",()=>{
    myModal.style.display = "none";
});

myModal.addEventListener("wheel",()=>{
    console.log("rolled")
    let size = myModal.firstElementChild.style.width;
    console.log(myModal.firstElementChild.style.width)
    myModal.firstElementChild.style.width= "100%";
})



