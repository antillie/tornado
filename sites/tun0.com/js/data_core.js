"use strict";

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    };
    return "";
};

function api_call(uri, payload, callback) {
    
    var url = "https://tun0.com/endpoints" + uri;
    var jsonString = JSON.stringify(payload);
    
    var http = new XMLHttpRequest();
    http.open("POST", url, true);
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            callback(http.responseText);
        };
    };
    http.setRequestHeader("X-XSRFToken", getCookie("_xsrf"));
    http.send(jsonString);
};

function send_to_page(page) {
    var new_url = "https://tun0.com/" + page
    window.location.replace(new_url);
};
