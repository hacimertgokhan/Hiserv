let version = document.getElementById("$verr");
let error = document.getElementById("$verr_errorbox");

version.addEventListener("change", () => {
    let contents = version.value;
    if(contents.includes(".")) {
        error.style.display = "none"
    } else {
        error.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Version cant found.'
        error.style.display = "block"
    }
})