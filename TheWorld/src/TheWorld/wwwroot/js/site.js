//site.js
(function () {
var ele = document.getElementById("username");
ele.innerHTML = "Kevin B. Archibald";

var main = document.getElementById("main");

main.onmouseenter = function () {
    main.style.backgroundColor = "#888";
};

main.onmouseleave = function () {
    main.style.backgroundColor = "";
};
})(); 

