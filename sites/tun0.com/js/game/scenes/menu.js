"use strict";

var menuState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0x000000);
        graphics.drawRect(0, 0, 1280, 720);
        
        game_data.main_menu["menu_entry"] = 0;
        game_data.main_menu["menu_items"] = [];
                
        game_data.main_menu["menu_items"].push(game.add.text(640, 360 - 100, "New Game", { font: "20px immortal", fill: "#f0dc00", align: "center" }));
        game_data.main_menu["menu_items"].push(game.add.text(640, 360 - 70, "Load Game", { font: "20px immortal", fill: "#ffffff", align: "center" }));
        game_data.main_menu["menu_items"].push(game.add.text(640, 360 - 40, "Credits", { font: "20px immortal", fill: "#ffffff", align: "center" }));
        
        game_data.main_menu["menu_items"][0].anchor.set(0.5, 0.5);
        game_data.main_menu["menu_items"][1].anchor.set(0.5, 0.5);
        game_data.main_menu["menu_items"][2].anchor.set(0.5, 0.5);
        
        game_data["music"] = game.add.audio("title_loop");
        game_data["music"].loop = true;
        game_data["music"].volume = 0.5;
        
        game_data["menu_change_sound"] = game.add.audio("menu_change");
        
        game.sound.setDecodedCallback(game_data["music"], start_music, this);
        
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
    game_data["music"].play();
};

function menu_up () {
    game_data.main_menu["menu_entry"] = game_data.main_menu["menu_entry"] - 1;
    game_data["menu_change_sound"].play();
    update_menu();
};

function menu_down () {
    game_data.main_menu["menu_entry"] = game_data.main_menu["menu_entry"] + 1;
    game_data["menu_change_sound"].play();
    update_menu();
};

function update_menu() {
    
    if (game_data.main_menu["menu_entry"] < 0) {
        game_data.main_menu["menu_entry"] = 2;
    }
    else if (game_data.main_menu["menu_entry"] > 2) {
        game_data.main_menu["menu_entry"] = 0;
    };
    
    for (var i = 0; i < game_data.main_menu["menu_items"].length; i++) {
        if (i == game_data.main_menu["menu_entry"]) {
            game_data.main_menu["menu_items"][i].addColor("#f0dc00", 0);
        }
        else {
            game_data.main_menu["menu_items"][i].addColor("#ffffff", 0);
        };
    };
};

function menu_enter() {
    
    this.camera.fade("#000000");
    game_data["music"].loop = false;
    game_data["music"].stop();
    
    if (game_data.main_menu["menu_entry"] == 0) {
        game.stateTransition.to("initial");
    }
    else if (game_data.main_menu["menu_entry"] == 2) {
        game.stateTransition.to("credits");
    };
};
