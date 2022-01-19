
// TYPE WRITER EFFECT
var quoteArray = ["WELCOME"];
var textPosition = 0; 
var speed = 100;

typewriter = () => {
    document.querySelector("#name").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
  
    if(textPosition++ != quoteArray[0].length)
      setTimeout(typewriter, speed);
  }
  
  window.addEventListener("load", typewriter)



//DISPLAYS THE BUTTON AFTER 4 SECONDS
// document.getElementsByClassName("btn.btn-dark").style.display = "none";

// function showStuff() {
//       document.getElementsByClassName("btn.btn-dark").style.display = "inline";
//   }
  
// function myFunction() {
//       window.location = "index.html"
//   }
//   setTimeout(showStuff, 5000);
 
