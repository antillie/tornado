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
        var entry2 = game.add.text(game.world.centerX, game.world.centerY - 70, "Load Game", { font: "20px immortal", fill: "#ffffff", align: "center" });
        var entry3 = game.add.text(game.world.centerX, game.world.centerY - 40, "Credits", { font: "20px immortal", fill: "#ffffff", align: "center" });
        
        entry1.anchor.set(0.5, 0.5)
        entry2.anchor.set(0.5, 0.5)
        entry3.anchor.set(0.5, 0.5)
        
    },
    
    update: function () {
        return;
    },
    
    shutdown: function () {
        return;
    }
};
