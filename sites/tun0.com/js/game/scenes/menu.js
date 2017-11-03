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
        
        this.keyUP = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.keyUP.onDown.add(menu_up, this);
        
        this.keyDOWN = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keyDOWN.onDown.add(menu_down, this);
        
    },
    
    update: function () {
        return;
    },
    
    shutdown: function () {
        return;
    }
};

function start_music () {
    return
    //music.loopFull(0.6);
    
};

function menu_up () {
    music.loopFull(0.6);
};

function menu_down () {
    console.log("down arrow")
};
