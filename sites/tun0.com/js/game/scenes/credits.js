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
        
        credits_items.push(game.add.text(300, game.world.centerY - 100, "Main Programming: George Markeloff", { font: "22px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(300, game.world.centerY - 70, "Title Music - Enchanted Festival, By: Matthew Pablo", { font: "22px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(300, game.world.centerY - 40, "Credits Music - Her Violet Eyes, By: tgfcoder", { font: "22px immortal", fill: "#ffffff", align: "center" }));
        
        for (var i = 0; i < credits_items.length; i++) {
            credits_items[i].anchor.set(0.0, 0.0);
        };
        
        
        music = game.add.audio("credits_loop");
        
        
        game.sound.setDecodedCallback(music, start_music, this);
        
        
        
    },
    
    update: function () {
        return;
    },
    
    shutdown: function () {
        return;
    }
};

function start_music () {
    music.loopFull(0.6);
};
