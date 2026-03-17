// javascript can change all the html element in the page
// javascript can change all the html attribute in the page
// javascript can change all the css style in the page (incline styling)
// javascript can remove existing html element and attribute 
// javascript can react to the all existing html event in the page
// javascript can create a new html event in the page 
let x=document.getElementById("demo").getAttribute("id");
x.innerHTML="          ";
let y=document.getElementsByTagName("demo");
y[0].innerHTML=" ";
let z=document.getElementsByClassName("demo");   //(represented by .)
document.querySelector("  ");     //(represented by #)
document.querySelectorAll("  ");
let a=document.getElementById("demo").setAttribute("class","democlass");


let x=document.getElementById("demo").style.color="blue";    //style
let b=document.createElement('h2');                          // create
let par=document.getElementsByTagName("body");
par[0].append(b);


