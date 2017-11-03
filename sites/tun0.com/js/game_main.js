"use strict";

function run_game() {
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser_box');
    game.state.add("boot", bootState);
    game.state.add("load", loadState);
    
    game.state.start("boot");
};

var bootState = {
    
    preload: function () {
        game.load.image('logo', '/images/phaser.png');
        game.load.start()
    }
    
    loadUpdate: function () {
        return;
    }
    
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE)
        return;
    }
    
    update: function () {
        game.state.start("load");
    }
    
    shutdown: function () {
        return;
    }
};

var loadState = {
    
    create: function () {
        
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
    
};

// https://github.com/kiswa/phaser-template/blob/master/src/js/init.js
// https://github.com/MattMcFarland/phaser-menu-system
// http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement
// http://www.html5gamedevs.com/topic/4225-how-do-you-use-a-webfont-in-phaser-exactly/````````````````````
