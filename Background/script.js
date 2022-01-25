var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body =document.getElementById("bg");
console.log(color1);
console.log(color2);
function setgradient(){

   body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
}
color1.addEventListener("input",setgradient);
 //console.log(color1.value);
  
color2.addEventListener("input",getgradient);
