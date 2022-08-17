var isNavOptionsVisible = false;

//                          DOM

var attentionDiv = document.getElementById("importantInfo"),
    x = 0,
    y = 0,
    mousedown = false;

var scroll = document.getElementById("scrollToTop");
var burger = document.getElementById("nav-icons-moblie-burger");
var options = document.getElementById("nav-options");
var bars = document.querySelectorAll(".bar");

function toggleBurger(e) {
    bars.forEach((bar) => bar.classList.toggle("x"));
}

scroll.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

burger.addEventListener("click", toggleBurger);

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

//                           Drag

attentionDiv.addEventListener("mousedown", (e) => {
    mousedown = true;

    x = attentionDiv.offsetLeft - e.clientX;
    y = attentionDiv.offsetTop - e.clientY;
});
attentionDiv.addEventListener("mousemove", (e) => {
    if (mousedown) {
        attentionDiv.style.left = e.clientX + x + "px";
        attentionDiv.style.top = e.clientY + y + "px";
    }
});

attentionDiv.addEventListener("mouseup", (e) => {
    mousedown = false;
});

// var elem = document.querySelector(".wrapper"),
//     div = document.querySelector(".move"),
//     x = 0,
//     y = 0,
//     mousedown = false;

// // div event mousedown
// div.addEventListener(
//     "mousedown",
//     function (e) {
//         // mouse state set to true
//         mousedown = true;
//         // subtract offset
//         x = div.offsetLeft - e.clientX;
//         y = div.offsetTop - e.clientY;
//     },
//     true
// );

// // div event mouseup
// div.addEventListener(
//     "mouseup",
//     function (e) {
//         // mouse state set to false
//         mousedown = false;
//     },
//     true
// );

// // element mousemove to stop
// elem.addEventListener(
//     "mousemove",
//     function (e) {
//         // Is mouse pressed
//         if (mousedown) {
//             // Now we calculate the difference upwards
//             div.style.left = e.clientX + x + "px";
//             div.style.top = e.clientY + y + "px";
//         }
//     },
//     true
// );
