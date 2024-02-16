let myClock = document.getElementById("clock");
let myClockChilds= myClock.children;
let d ;
let myDropdownChilds = Array.from(document.getElementById("myDropdown").children);
console.log(myDropdownChilds);
let timeOffset=0;
  setInterval(function () {
    d = new Date();
    let hours = (d.getHours()+timeOffset)%24;
    let minuts = "-"+d.getMinutes()+"-";
    let seconds = d.getSeconds();
      myClockChilds[0].innerHTML= hours;
      myClockChilds[1].innerHTML= minuts;
      myClockChilds[2].innerHTML= seconds;
      console.log("tic");
    }, 1000);

    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    function timeZone(element,index) {
      console.log("tz"+index)
      element.onclick = function () {
        timeOffset = (index-11);        
      };
      
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    } 
    
    
    

myDropdownChilds.forEach(timeZone);


 

    
