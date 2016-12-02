//site.js
(function () {

 

var ele = $("#username");
ele.text("Kevin B. Archibald");

var main = $("main");

main.on("mouseenter", function () {
    main.style.backgroundColor = "#888";
});

    main.on("mouseleave", function () {
        main.style.backgroundColor = "";
    });
})(); 

