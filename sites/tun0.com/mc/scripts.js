// Friends don't let friends write bad javascript.
"use strict";

var refresh_players = null;
var refresh_cpu = null;

function main() {
    mc_query();
    check_cpu();
};

function mc_query() {
    var request_object = new Object();
    api_call("/mc/mc_query", request_object, process_query);
    clearTimeout(refresh_players);
    refresh_players = setTimeout(mc_query, 300000);
};

function process_query(api_response) {
    
    status_panel.classList.remove("panel-success");
    status_panel.classList.remove("panel-danger");
    
    var data = JSON.parse(api_response);
    data = data["mc_query"];
    
    var up_down = document.getElementById("up_down");
    var player_count = document.getElementById("player_count");
    var status_panel = document.getElementById("status_panel");
    
    if (data["up"]) {
        
        up_down.innerHTML = "Up";
        player_count.innerHTML = data["online"];
        
        var player_list = document.getElementById("player_list");
        
        var player_html = "<ul class='final-p'>";
        
        for (var i = 0; i < data["players"].length; i++) {
            player_html = player_html + "<li>" + data["players"][i] + "</li>";
        };
        
        player_html = player_html + "</ul>";
        player_list.innerHTML = player_html;
        
        status_panel.classList.add("panel-success");
    }
    else {
        up_down.innerHTML = "Down";
        player_count.innerHTML = "0";
        status_panel.classList.add("panel-danger");
    };
};

function check_cpu() {
    var request_object = new Object();
    api_call("/mc/cpu_usage", request_object, process_cpu);
    clearTimeout(refresh_cpu);
    refresh_cpu = setTimeout(check_cpu, 30000);
};

function process_cpu(api_response) {
    
    var data = JSON.parse(api_response);
    var cpu_display = document.getElementById("cpu_display");
    
    if (data["success"]) {
        
        var max_cpu = 0;
        
        for (var i = 0; i < data["cpu_usage"].length; i++) {
            if (data["cpu_usage"][i] > max_cpu) {
                max_cpu = Math.round(data["cpu_usage"][i]);
            };
        };
        max_cpu = max_cpu + "%";
        cpu_display.innerHTML = max_cpu;
        
    }
    else {
        cpu_display.innerHTML = "??";
    };
};
