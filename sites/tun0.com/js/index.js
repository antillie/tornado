"use strict";

var game = null;

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
        run_game();
    };
};

function run_game() {
    
    game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game_container', { preload: preload, create: create });
    
};




function preload () {

    game.load.image('logo', '/hellophaser/phaser.png');

}

function create () {

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

}
