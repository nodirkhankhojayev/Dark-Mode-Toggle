const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");

inputEl.checked  = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else {
       bodyEl.style.background = "white";
    }
}
inputEl.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}