"use strict";

var loadState = {
    
    preload: function () {
        game.load.audio("menu_change", "/sound/menu_change.wav")
        game.load.audio("title_loop", "/sound/music/enchantedfestivalloop.mp3")
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
        
        var logo = game.add.sprite(game.world.centerX, game.world.centerY - 150, 'game_logo');
        logo.anchor.setTo(0.5, 0.5);
    }
    
};
