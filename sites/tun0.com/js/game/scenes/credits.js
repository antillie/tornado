"use strict";

var music;
var credits_items;
var scroll_amount;

var creditsState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        var initial_y = 725;
        credits_items = [];
        scroll_amount = 0;
        
        credits_items.push(game.add.text(50, initial_y, "Main Programming: George Markeloff", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 100, "Title Music - Enchanted Festival, By: Matthew Pablo", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 130, "http://www.matthewpablo.com", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        
        
        
        credits_items.push(game.add.text(50, initial_y + 200, "Credits Music - Her Violet Eyes, By: tgfcoder", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        
        
        credits_items.push(game.add.text(game.world.centerX, initial_y + 700, "Thanks for playing!", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        
        
        for (var i = 0; i < credits_items.length; i++) {
            credits_items[i].anchor.set(0.0, 0.0);
        };
        credits_items[credits_items.length - 1].anchor.set(0.5, 0.5);
        
        music = game.add.audio("credits_loop");
        music.loop = true;
        music.volume = 0.6;
        
        game.sound.setDecodedCallback(music, start_music, this);
        
        this.keyESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.keyESC.onDown.add(exit_credits, this);
        
        
    },
    
    update: function () {
        
        
        if (scroll_amount > -1200) {
            
            scroll_amount = scroll_amount - 1;
            
            for (var i = 0; i < credits_items.length; i++) {
                credits_items[i].y = credits_items[i].y - 1;
            };
            
        };
        
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
