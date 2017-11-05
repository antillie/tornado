"use strict";

function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
};

function make_objects(scene_name, object_list) {
    for (var i = 0; i < object_list.length; i++) {
        game_data[scene_name]["objects"][object_list[i].properties.id] = game.add.sprite(object_list[i].x, object_list[i].y, null)
        console.log(object_list[i])
        game_data[scene_name]["objects"][object_list[i].properties.id].enableBody = true;
        game.physics.arcade.enable(game_data[scene_name]["objects"][object_list[i].properties.id]);
    };
};
