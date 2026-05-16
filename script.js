let container = document.querySelector(".buttonContainer");
let body = document.querySelector("body");
let buttons = document.querySelectorAll("button");
let colors = ["#574ae2","#222A68","#654597"];

for(let i=0; i<3;i++)
{
    buttons[i].style.backgroundColor = colors[i];
} 

for(let i=0; i<3;i++)
{
    buttons[i].addEventListener("click",()=>{
        body.style.backgroundColor = colors[i];
    });
}