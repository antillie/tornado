"use strict";

var music;
var credits_items = [];
var credits_list = [
    "Main Programming: George Markeloff",
    "Title Music - Enchanted Festival, By: Matthew Pablo",


];

var creditsState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        var initial_y = 725;
        
        credits_items.push(game.add.text(50, game.world.centerY - 100, "Main Programming: George Markeloff", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, game.world.centerY - 0, "Title Music - Enchanted Festival, By: Matthew Pablo", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, game.world.centerY + 100, "Credits Music - Her Violet Eyes, By: tgfcoder", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        
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
