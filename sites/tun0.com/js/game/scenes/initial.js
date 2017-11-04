"use strict";

var music;
var menu_change_sound;
var menu_entry;
var menu_items;
var player;
var last_direction

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
        
        player = game.add.sprite(40, 100, "player");
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        
        var up_frames = [12, 13, 14, 15]
        var down_frames = [0, 1, 2, 3]
        var left_frames = [4, 5, 6 ,7]
        var right_frames = [8, 9, 10, 11]
        
        player.animations.add("walk_up", up_frames);
        player.animations.add("walk_down", down_frames);
        player.animations.add("walk_left", left_frames);
        player.animations.add("walk_right", right_frames);
        
        //player.animations.play("walk_left", 5, true);
        
        this.layer1.resizeWorld();
        
        this.keyESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.keyESC.onDown.add(exit_game, this);
        
        this.keyUP = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.keyDOWN = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keyLEFT = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.keyRIGHT = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        game.sound.setDecodedCallback(music, start_music, this);
        
        last_direction = "down";
    },
    
    update: function () {
        
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        
        if (this.keyUP.isDown) {
            //player.animations.play("walk_up", 5, true);
            player.body.velocity.y = player.body.velocity.y - 180;
            last_direction = "up";
        };
        if (this.keyDOWN.isDown) {
            //if (!player.animations._anims["walk_up"].isPlaying) {
            //    player.animations.play("walk_down", 5, true);
            //};
            player.body.velocity.y = player.body.velocity.y + 180;
            last_direction = "down";
            console.log(player.animations._anims["walk_down"].isPlaying)
        };
        if (this.keyLEFT.isDown) {
            //if (!player.animations._anims["walk_up"].isPlaying && !player.animations._anims["walk_down"].isPlaying) {
            //    player.animations.play("walk_left", 5, true);
            //};
            player.body.velocity.x = player.body.velocity.x - 180;
            last_direction = "left";
        };
        if (this.keyRIGHT.isDown) {
            //if (!player.animations._anims["walk_up"].isPlaying && !player.animations._anims["walk_down"].isPlaying && !player.animations._anims["walk_left"].isPlaying) {
            //    player.animations.play("walk_right", 5, true);
            //};
            player.body.velocity.x = player.body.velocity.x + 180;
            last_direction = "right";
        };
        if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {
            player.animations.stop();
            
            if (last_direction == "up") {
                player.frame = 12;
            }
            else if (last_direction == "down") {
                player.frame = 0;
            }
            else if (last_direction == "left") {
                player.frame = 4;
            }
            else if (last_direction == "right") {
                player.frame = 8;
            };
        }
        else {
            
            if (player.body.velocity.y < 0) {
                player.animations.play("walk_up", 5, true);
            }
            else if (player.body.velocity.y > 0) {
                player.animations.play("walk_down", 5, true);
            }
            else if (player.body.velocity.x < 0) {
                player.animations.play("walk_left", 5, true);
            }
            else if (player.body.velocity.x > 0) {
                player.animations.play("walk_right", 5, true);
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

function exit_game() {
    music.loop = false;
    music.stop();
    game.state.start("menu");
};
