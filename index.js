//exports.log = function() {
//    console.log("It works!");
//}

function makeDropDown(element) {
    element.classList.add("dropdown-untoggled");
    element.querySelector("button").addEventListener("click", () => {
        if (element.classList.contains("dropdown-untoggled")) {
            element.classList.remove("dropdown-untoggled");
            element.classList.add("dropdown-toggled");
        } else {
            element.classList.remove("dropdown-toggled");
            element.classList.add("dropdown-untoggled");
        }
    });
}

makeDropDown(document.querySelector(".Me"));