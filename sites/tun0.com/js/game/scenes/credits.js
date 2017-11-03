"use strict";

var music;
var credits_items = [];

var creditsState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        credits_items.push(game.add.text(300, game.world.centerY - 100, "Main Programming: George Markeloff", { font: "24px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(300, game.world.centerY - 60, "Title Music - Enchanted Festival, By: Matthew Pablo", { font: "24px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(300, game.world.centerY - 20, "Credits Music - Her Violet Eyes, By: tgfcoder", { font: "24px immortal", fill: "#ffffff", align: "center" }));
        
        for (var i = 0; i < credits_items.length; i++) {
            credits_items[i].anchor.set(0.0, 0.0);
        };
        
        
        music = game.add.audio("credits_loop");
        music.loop = true;
        music.volume = 0.6;
        
        game.sound.setDecodedCallback(music, start_music, this);
        
        this.keyESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.keyESC.onDown.add(exit_credits, this);
        
        
    },
    
    update: function () {
        return;
    },
    
    shutdown: function () {
        return;
    }
};

function start_music () {
    music.play();
};

function exit_credits() {
    music.loop = false;
    music.stop();
    game.state.start("menu");
};
