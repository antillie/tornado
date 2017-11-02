"use strict";

function run_game() {
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser_box', { preload: preload, create: create, update: update });
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
