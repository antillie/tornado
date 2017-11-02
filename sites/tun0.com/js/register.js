"use strict";

function create_user() {
    
    var pwd = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd2").value;
    
    if (pwd != pwd2) {
        
        // display a message about the passwords not being the same
        
        return;
    };
    
    if (pwd.length < 10) {
        
        // display a message about the password being too short
        
        return;
    };
    
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
        send_to_page("");
    }
    else {
        console.log("failure")
    };

};
