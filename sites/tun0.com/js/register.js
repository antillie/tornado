"use strict";

var captcha_checked = false;

function create_user() {
    
    var pwd = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd2").value;
    var name = document.getElementById("usr").value;
    
    if (name.length < 3) {
        display_error("name_short_error");
        return;
    };
    if (pwd != pwd2) {        
        display_error("match_error");
        return;
    };
    if (pwd.length < 10) {
        display_error("pw_short_error");
        return;
    };
    if (!captcha_checked) {
        display_error("captcha_error");
        return;
    };
    
    var request_object = new Object();
    request_object.user = document.getElementById("usr").value;
    request_object.password = document.getElementById("pwd").value;
    request_object.captcha = $("#g-recaptcha-response").val();
    api_call("/register", request_object, process_register);
};

function process_register(api_response) {
    
    var data = JSON.parse(api_response);
    
    if (data["success"]) {
        send_to_page("");
    }
    else {
        display_error("name_error");
        grecaptcha.reset();
    };
};

function recaptcha_checked() {
    captcha_checked = true;
};
