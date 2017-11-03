"use strict";

var menuState = {
    
    preload: function () {
        return;
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        
        var entry1 = game.add.text(game.world.centerX, game.world.centerY - 100, "New Game", { font: "20px immortal", fill: "#f0dc00", align: "center" });
        text.anchor.set(0.5, 0.5)
        
    },
    
    update: function () {
        return;
    },
    
    shutdown: function () {
        return;
    }
};
