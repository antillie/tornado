"use strict";

var loadState = {
    
    preload: function () {
        game.load.audio("menu_change", "/sound/menu_change.wav")
        game.load.audio("title_loop", "/sound/music/enchantedfestivalloop.mp3")
        game.load.audio("credits_loop", "/sound/music/hervioleteyes.mp3")
        game.load.audio("forest", "/sound/music/forest.mp3")
        game.load.tilemap("initial", "/maps/initial.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.image("mountain_landscape", "/maps/tilesets/mountain_landscape.png");
        game.load.image("wood_tileset", "/maps/tilesets/wood_tileset.png");
        game.load.spritesheet('player', '/images/character.png', 32, 48);
        game.load.spritesheet('campfire', '/images/campfire.png', 64, 64);
        game.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/Pixelate.js');
        this.preloadBar = game.add.graphics(0, 500);
        this.preloadBar.lineStyle(3, 0xffffff, 1);
        this.preloadBar.moveTo(0, 0);
        this.preloadBar.lineTo(game.width, 0);
        this.preloadBar.scale.x = 0;
        game.load.start();
    },
    
    loadUpdate: function () {
        this.preloadBar.scale.x = game.load.progress * 0.01;
    },
    
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        var logo = game.add.sprite(game.world.centerX, game.world.centerY - 130, "game_logo");
        logo.anchor.setTo(0.5, 0.5);
    },
    
    update: function () {
        game.state.start("menu");
    },
    
    shutdown: function () {
        return;
    }
};
