"use strict";

function run_game() {
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser_box');
    game.state.add("boot", bootState);
    
    game.state.start("boot");
};

var bootState = {
    
    create: function () {
        
        //game.physics.startSystem(Phaser.Physics.ARCADE)
        game.load.image('logo', '/images/phaser.png');
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    
};

function preload () {
    game.load.image('logo', '/images/phaser.png');
};

function create () {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
};

function update() {
    return;
};

// https://github.com/kiswa/phaser-template/blob/master/src/js/init.js
// https://github.com/MattMcFarland/phaser-menu-system
