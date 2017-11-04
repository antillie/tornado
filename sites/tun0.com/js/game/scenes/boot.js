"use strict";

var bootState = {
    
    preload: function () {
        game.load.image('game_logo', '/images/site_icon.png');
        //game.load.onFileComplete.add(update_progress_bar, this);
        game.load.start();
    },
    
    loadUpdate: function () {
        return;
    },
    
    create: function () {
        return;
    },
    
    update: function () {
        game.state.start("load");
    },
    
    shutdown: function () {
        return;
    }
};

//function update_progress_bar (progress, cacheID, success, files_loaded, total_files) {
//    console.log(progress)
//    console.log(cacheID)
//    console.log(success)
//    console.log(files_loaded)
//    console.log(total_files)
//};
