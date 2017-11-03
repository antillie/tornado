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
        //console.log(game.load.progress)
        game.load.onFileComplete.add(updateProgressBar, this);
        game.load.start();
        //console.log(game.load.progress)
    },
    
    loadUpdate: function () {
        //console.log(game.load.progress)
        return;
    },
    
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //console.log(game.load.progress)
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
        return;
    },
    
    loadUpdate: function () {
        
        var load_progress = game.load.progress; // 0-100 as percentage of load progress
        
        return;
    },
    
    create: function () {
        
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
    
};

function updateProgressBar (progress, cacheID, success, files_loaded, total_files) {
    
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
