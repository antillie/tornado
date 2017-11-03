"use strict";

function run_game() {
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser_box');
    
    $.getScript("/js/game/scenes/boot.js");
    $.getScript("/js/game/scenes/load.js");
    
    game.state.add("boot", bootState);
    game.state.add("load", loadState);
    
    game.state.start("boot");
};

// https://github.com/kiswa/phaser-template/blob/master/src/js/init.js
// https://github.com/MattMcFarland/phaser-menu-system
// http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement
// http://www.html5gamedevs.com/topic/4225-how-do-you-use-a-webfont-in-phaser-exactly/
