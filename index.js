var isNavOptionsVisible = false;

//                          DOM

var burger = document.getElementById("nav-icons-moblie-burger");
var options = document.getElementById("nav-options");

burger.addEventListener("click", () => {
    if (!isNavOptionsVisible) {
        options.classList.remove("hideOptionsActive");
        options.classList.add("showOptionsActive");
        isNavOptionsVisible = true;
    } else {
        options.classList.remove("showOptionsActive");
        options.classList.add("hideOptionsActive");
        isNavOptionsVisible = false;
    }
});
