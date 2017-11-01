// Friends don't let friends write bad javascript.
"use strict";

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
