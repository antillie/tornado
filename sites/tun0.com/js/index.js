"use strict";

function get_user() {
    api_call("/get_user", null, show_user)
};

function show_user(api_response) {
    
    var data = JSON.parse(api_response)
    
    if (data.user == null) {
       send_to_page("login.htm");
    }
    else {
        sessionStorage.setItem("user", data.user);
    };
};
