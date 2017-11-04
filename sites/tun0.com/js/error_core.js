"use strict";

function display_error(error_id, auto_clear=true) {
    var error = document.getElementById(error_id);
    error.classList.remove("hide")
    error.style.opacity = 1;
    if (auto_clear) {
        setTimeout(function(){ fade(error); }, 3000);
    };
};

function fade(element) {
    var op = 1; 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.classList.add("hide")
        }
        element.style.opacity = op;
        op -= op * 0.1;
    }, 50);
};

function hide_error(error_id) {
    var error = document.getElementById(error_id);
    error.classList.add("hide")
};
