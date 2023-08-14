let checkbox = document.getElementById("$checkbox");
let __checkBox = false; 

checkbox.addEventListener("click", () => {
    if(__checkBox) {
        __checkBox = false;
        checkbox.innerHTML = '<i class="fa-solid fa-check fa-xs"></i>';
    } else {
        __checkBox = true;
        checkbox.innerHTML = '<i class="fa-solid fa-xmark fa-xs"></i>';
    }
})