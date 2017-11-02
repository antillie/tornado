"use strict";

var captcha_checked = false;

function do_login() {
    
    var pwd = document.getElementById("pwd").value;
    var name = document.getElementById("usr").value;
    
    if (!captcha_checked) {
        display_error("captcha_error");
        return;
    };
    
    var request_object = new Object();
    request_object.user = name;
    request_object.password = pwd;
    request_object.captcha = $("#g-recaptcha-response").val();
    api_call("/login", request_object, process_login);
};

function process_login(api_response) {
    
    var data = JSON.parse(api_response)
    
    if (data["login"]) {
        send_to_page("");
    }
    else {
        display_error("login_error");
        grecaptcha.reset();
        captcha_checked = false;
    };
};

function recaptcha_checked() {
    captcha_checked = true;
};
