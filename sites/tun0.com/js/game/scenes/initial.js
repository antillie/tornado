"use strict";

var music;
var menu_change_sound;
var menu_entry;
var menu_items;

var initialState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        music = game.add.audio("forest");
        music.loop = true;
        music.volume = 0.6;
        
        this.map = this.game.add.tilemap("initial");
        this.map.addTilesetImage("mountain_landscape", "mountain_landscape");
        this.map.addTilesetImage("wood_tileset", "wood_tileset");
        
        this.layer1 = this.map.createLayer("Tile Layer 1");
        this.layer2 = this.map.createLayer("Tile Layer 2");
        this.layer3 = this.map.createLayer("Tile Layer 3");
        //this.blockedLayer = this.map.createLayer("Meta");
        //this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');
        
        var sprite = game.add.sprite(40, 100, "player");
        
        var right_frames = [0, 1, 2, 3]
        
        sprite.animations.add("walk_right", right_frames);
    
        sprite.animations.play("walk_right", 5, true);
        
        this.layer1.resizeWorld();
        
        this.keyESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.keyESC.onDown.add(exit_game, this);
        
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
    music.play();
};

function exit_game() {
    music.loop = false;
    music.stop();
    game.state.start("menu");
};
