"use strict";

function run_game() {
    game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser_box', { preload: preload, create: create });
};

function preload () {
    game.load.image('logo', '/images/phaser.png');
};

function create () {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
};
