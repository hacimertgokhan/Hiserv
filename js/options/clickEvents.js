let checkbox = document.getElementById("$checkbox");
let __checkBox = true; 

checkbox.addEventListener("click", () => {
    console.log(__checkBox)
    if(__checkBox) {
        __checkBox = false;
        checkbox.innerHTML = '<i class="fa-solid fa-check fa-xs"></i>';
    } else {
        __checkBox = true;
        checkbox.innerHTML = '<i class="fa-solid fa-xmark fa-xs"></i>';
    }
})

let directory = document.getElementById("directory");
directory.addEventListener("click" , async () => {
    const dirHandle = await window.showDirectoryPicker();
    console.log(dirHandle.name)
    let pathValue = dirHandle.name;
    getVal()
});



async function getVal() {
    let __dict = "C:\\Program Files"
    try {
        fs.writeFile("hiserv-config.json", __dict);
    } catch(e) {
        console.log(e)
    }
}

checkbox.addEventListener("click", () => {
    console.log(__checkBox)
    if(__checkBox) {
        __checkBox = false;
        checkbox.innerHTML = '<i class="fa-solid fa-check fa-xs"></i>';
    } else {
        __checkBox = true;
        checkbox.innerHTML = '<i class="fa-solid fa-xmark fa-xs"></i>';
    }
})