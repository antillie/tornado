"use strict";

function run_game() {
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser_box');
    game.state.add("boot", bootState);
    game.state.add("load", loadState);
    
    game.state.start("boot");
};

var bootState = {
    
    preload: function () {
        this.ready = false;
        game.load.image('logo', '/images/phaser.png');
        game.load.image('game_logo', '/images/site_icon.png');
        game.load.audio("title_loop", "/sound/music/enchantedfestivalloop.mp3")
        game.load.onFileComplete.add(update_progress_bar, this);
        game.load.onComplete.add(this.load_complete, this);
        
        this.preloadBar = game.add.graphics(0, 50);
        this.preloadBar.lineStyle(3, 0xffffff, 1);
        this.preloadBar.moveTo(0, 0);
        this.preloadBar.lineTo(game.width, 0);
        this.preloadBar.scale.x = 0;
        
        game.load.start();
    },
    
    loadUpdate: function () {
        this.preloadBar.scale.x = game.load.progress * 0.01;
        return;
    },
    
    load_complete: function () {
        this.ready = true;
    };
    
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        return;
    },
    
    update: function () {
        if (this.ready) {
            game.state.start("load");
        };
    },
    
    shutdown: function () {
        return;
    }
};

var loadState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
    
};

function update_progress_bar (progress, cacheID, success, files_loaded, total_files) {
    
    console.log(progress)
    console.log(cacheID)
    console.log(success)
    console.log(files_loaded)
    console.log(total_files)
    
    // Another file has just loaded, so update the size of my progress bar graphic here
};

// https://github.com/kiswa/phaser-template/blob/master/src/js/init.js
// https://github.com/MattMcFarland/phaser-menu-system
// http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement
// http://www.html5gamedevs.com/topic/4225-how-do-you-use-a-webfont-in-phaser-exactly/````````````````````
