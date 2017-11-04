"use strict";

var music;
var menu_change_sound;
var menu_entry;
var menu_items;

var menuState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        menu_entry = 0;
        menu_items = [];
        
        menu_items.push(game.add.text(640, 360 - 100, "New Game", { font: "20px immortal", fill: "#f0dc00", align: "center" }));
        menu_items.push(game.add.text(640, 360 - 70, "Load Game", { font: "20px immortal", fill: "#ffffff", align: "center" }));
        menu_items.push(game.add.text(640, 360 - 40, "Credits", { font: "20px immortal", fill: "#ffffff", align: "center" }));
        
        menu_items[0].anchor.set(0.5, 0.5);
        menu_items[1].anchor.set(0.5, 0.5);
        menu_items[2].anchor.set(0.5, 0.5);
        
        music = game.add.audio("title_loop");
        music.loop = true;
        music.volume = 0.6;
        
        menu_change_sound = game.add.audio("menu_change");
        
        game.sound.setDecodedCallback(music, start_music, this);
        
        this.keyUP = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.keyUP.onDown.add(menu_up, this);
        
        this.keyDOWN = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keyDOWN.onDown.add(menu_down, this);
        
        this.keyEnter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.keyEnter.onDown.add(menu_enter, this);
        
        this.keyNumEnter = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_ENTER);
        this.keyNumEnter.onDown.add(menu_enter, this);
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

function menu_up () {
    menu_entry = menu_entry - 1;
    menu_change_sound.play();
    update_menu();
};

function menu_down () {
    menu_entry = menu_entry + 1;
    menu_change_sound.play();
    update_menu();
};

function update_menu() {
    
    if (menu_entry < 0) {
        menu_entry = 2;
    }
    else if (menu_entry > 2) {
        menu_entry = 0;
    };
    
    for (var i = 0; i < menu_items.length; i++) {
        if (i == menu_entry) {
            menu_items[i].addColor("#f0dc00", 0);
        }
        else {
            menu_items[i].addColor("#ffffff", 0);
        };
    };
};

function menu_enter() {
    
    if (menu_entry == 0) {
        music.loop = false;
        music.stop();
        game.state.start("initial");
    }
    else if (menu_entry == 2) {
        music.loop = false;
        music.stop();
        game.state.start("credits");
    };
};
