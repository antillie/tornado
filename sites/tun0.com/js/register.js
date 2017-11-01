"use strict";

function create_user() {
    
    var request_object = new Object();
    request_object.user = document.getElementById("usr").value;
    request_object.password = document.getElementById("pwd").value;
    request_object.captcha = $("#g-recaptcha-response").val()
    
    api_call("/register", request_object, process_register)
};

function process_register(api_response) {
    
    var data = JSON.parse(api_response)
    console.log(data)
    
    if (data["success"]) {
        console.log("sucess")
    }
    else {
        console.log("failure")
    };

};
