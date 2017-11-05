"use strict";

var worldState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        game_data["music"] = game.add.audio("worldmap");
        game_data["music"].loop = true;
        game_data["music"].volume = 0.6;
        
        this.map = this.game.add.tilemap("init_world_map");
        this.map.addTilesetImage("overworld", "overworld");
        this.map.addTilesetImage("desert", "desert");
        
        this.layer1 = this.map.createLayer("Base");
        this.layer2 = this.map.createLayer("Features");
        this.layer3 = this.map.createLayer("Overfeatures");
        
        game_data.init_world_map["objects"] = new Object();
        make_objects("init_world_map", this.map.objects["Meta"]);
        
        //this.map.setCollisionBetween(1, 2000, true, "Tile Layer 2");
        //this.map.setCollisionBetween(1, 2000, true, "Tile Layer 3");
        this.layer1.resizeWorld();
        
        game_data.player["sprite"] = game.add.sprite(game_data.init_world_map["x"], game_data.init_world_map["y"], "player");
        game.physics.arcade.enable(game_data.player["sprite"]);
        game_data.player["sprite"].body.collideWorldBounds = true;
        
        game_data.player["sprite"].animations.add("walk_up", game_data.player["up_frames"]);
        game_data.player["sprite"].animations.add("walk_down", game_data.player["down_frames"]);
        game_data.player["sprite"].animations.add("walk_left", game_data.player["left_frames"]);
        game_data.player["sprite"].animations.add("walk_right", game_data.player["right_frames"]);
        
        //this.campfire = game.add.sprite(250, 500, "campfire")
        //game.physics.arcade.enable(this.campfire);
        //this.campfire.body.immovable = true;
        //this.campfire.animations.add("burn")
        //this.campfire.animations.play("burn", 6, true);
        
        this.keyESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.keyESC.onDown.add(exit_game, this);
        
        this.keyUP = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.keyDOWN = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keyLEFT = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.keyRIGHT = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
        game.sound.setDecodedCallback(game_data["music"], start_music, this);
        
        game.camera.follow(game_data.player["sprite"]);
        game.camera.deadzone = new Phaser.Rectangle(160, 90, 960, 500);
    },
    
    update: function () {
        
        //this.game.physics.arcade.collide(game_data.player["sprite"], this.layer2);
        //this.game.physics.arcade.collide(game_data.player["sprite"], this.layer3);
        //this.game.physics.arcade.collide(game_data.player["sprite"], this.campfire);
        
        if (checkOverlap(game_data.player["sprite"], game_data.init_world_map.objects["grass_area"])) {
            console.log("hotspot hit")
        };
        
        game_data.player["sprite"].body.velocity.x = 0;
        game_data.player["sprite"].body.velocity.y = 0;
        
        if (this.keyUP.isDown || this.keyW.isDown) {
            game_data.player["sprite"].body.velocity.y = game_data.player["sprite"].body.velocity.y - 180;
            game_data.player["last_direction"] = "up";
        };
        if (this.keyDOWN.isDown || this.keyS.isDown) {
            game_data.player["sprite"].body.velocity.y = game_data.player["sprite"].body.velocity.y + 180;
            game_data.player["last_direction"] = "down";
        };
        if (this.keyLEFT.isDown || this.keyA.isDown) {
            game_data.player["sprite"].body.velocity.x = game_data.player["sprite"].body.velocity.x - 180;
            game_data.player["last_direction"] = "left";
        };
        if (this.keyRIGHT.isDown || this.keyD.isDown) {
            game_data.player["sprite"].body.velocity.x = game_data.player["sprite"].body.velocity.x + 180;
            game_data.player["last_direction"] = "right";
        };
        if (game_data.player["sprite"].body.velocity.x == 0 && game_data.player["sprite"].body.velocity.y == 0) {
            game_data.player["sprite"].animations.stop();
            
            if (game_data.player["last_direction"] == "up") {
                game_data.player["sprite"].frame = 12;
            }
            else if (game_data.player["last_direction"] == "down") {
                game_data.player["sprite"].frame = 0;
            }
            else if (game_data.player["last_direction"] == "left") {
                game_data.player["sprite"].frame = 4;
            }
            else if (game_data.player["last_direction"] == "right") {
                game_data.player["sprite"].frame = 8;
            };
        }
        else {
            if (game_data.player["sprite"].body.velocity.y < 0) {
                game_data.player["sprite"].animations.play("walk_up", 5, true);
            }
            else if (game_data.player["sprite"].body.velocity.y > 0) {
                game_data.player["sprite"].animations.play("walk_down", 5, true);
            }
            else if (game_data.player["sprite"].body.velocity.x < 0) {
                game_data.player["sprite"].animations.play("walk_left", 5, true);
            }
            else if (game_data.player["sprite"].body.velocity.x > 0) {
                game_data.player["sprite"].animations.play("walk_right", 5, true);
            };
            game_data.initial["x"] = game_data.player["sprite"].world.x;
            game_data.initial["y"] = game_data.player["sprite"].world.y;
        };
    },
    
    shutdown: function () {
        return;
    }
};

//function start_music () {
//    game_data["music"].play();
//};

//function exit_game() {
//    game_data["music"].loop = false;
//    game_data["music"].stop();
//    game.stateTransition.to("menu");
//};

//function world_exit() {
//    console.log("called")
//};
