"use strict";

var music;

var menuState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        this.entry1 = game.add.text(game.world.centerX, game.world.centerY - 100, "New Game", { font: "20px immortal", fill: "#f0dc00", align: "center" });
        this.entry2 = game.add.text(game.world.centerX, game.world.centerY - 70, "Load Game", { font: "20px immortal", fill: "#ffffff", align: "center" });
        this.entry3 = game.add.text(game.world.centerX, game.world.centerY - 40, "Credits", { font: "20px immortal", fill: "#ffffff", align: "center" });
        
        this.entry1.anchor.set(0.5, 0.5);
        this.entry2.anchor.set(0.5, 0.5);
        this.entry3.anchor.set(0.5, 0.5);
        
        music = game.add.audio("title_loop");
        
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
