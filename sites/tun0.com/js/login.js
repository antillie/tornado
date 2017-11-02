"use strict";

function do_login() {
    var request_object = new Object();
    request_object.user = document.getElementById("usr").value;
    request_object.password = document.getElementById("pwd").value;
    request_object.captcha = $("#g-recaptcha-response").val()
    api_call("/login", request_object, process_login)
};

function process_login(api_response) {
    
    var data = JSON.parse(api_response)
    console.log(data)
    
    if (data["login"]) {
        console.log("sucess")
        send_to_page("");
    }
    else {
        console.log("failure")
    };

};
