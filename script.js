const input = document.querySelector('.elem');
const wrapper = document.querySelector('.wrapper');
let newDiv;

input.addEventListener("focus",function(){
newDiv = document.createElement('div');
newDiv.textContent = "Hello";
newDiv.style.color = "red";
wrapper.appendChild(newDiv);
});

input.addEventListener("blur", function(){
    wrapper.removeChild(newDiv);
});