"use strict";

function run_game() {
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser_box');
    game.state.add("boot", bootState);
    game.state.add("load", loadState);
    
    game.state.start("boot");
};

var bootState = {
    
    preload: function () {
        game.load.image('game_logo', '/images/site_icon.png');
        //game.load.onFileComplete.add(update_progress_bar, this);
        game.load.start();
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        return;
    },
    
    update: function () {
        game.state.start("load");
    },
    
    shutdown: function () {
        return;
    }
};

var loadState = {
    
    preload: function () {
        game.load.audio("menu_change", "/sound/menu_change.wav")
        game.load.audio("title_loop", "/sound/music/enchantedfestivalloop.mp3")
        this.preloadBar = game.add.graphics(0, 200);
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
        
        var logo = game.add.sprite(game.world.centerX, game.world.centerY - 200, 'game_logo');
        logo.anchor.setTo(0.5, 0.5);
    }
    
};

//function update_progress_bar (progress, cacheID, success, files_loaded, total_files) {
//    console.log(progress)
//    console.log(cacheID)
//    console.log(success)
//    console.log(files_loaded)
//    console.log(total_files)
//};

// https://github.com/kiswa/phaser-template/blob/master/src/js/init.js
// https://github.com/MattMcFarland/phaser-menu-system
// http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement
// http://www.html5gamedevs.com/topic/4225-how-do-you-use-a-webfont-in-phaser-exactly/
