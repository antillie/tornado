"use strict";

function get_user() {
    api_call("/get_user", null, show_user)
};

function show_user(api_response) {
    
    var data = JSON.parse(api_response)
    console.log(data)
    
};
