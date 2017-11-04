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
        credits_items.push(game.add.text(50, initial_y + 230, "https://twitter.com/tgfcoder", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        
        
        credits_items.push(game.add.text(50, initial_y + 300, "Battle Theme - A Wild Creature Appears, By: Aaron Parsons", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 330, "http://opengameart.org/content/a-wild-creature-appears", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 400, "Boss Theme - Battle of the Void, By: Marcelo Fernandez", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 430, "http://opengameart.org/content/battle-of-the-void", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 500, "Forest Theme - Forest, By: syncopika", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 530, "https://greenbearmusic.bandcamp.com/track/forest", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 560, "http://opengameart.org/content/forest", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 600, "Town Theme - Plesant Creek, By: Matthew Pablo", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 630, "http://www.matthewpablo.com", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 700, "Combat System Design: George Markeloff", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 800, "Character Class Design: George Markeloff", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 900, "Story: George Markeloff", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1000, "Dialog: George Markeloff", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1100, "Wood Tileset: Jetrel, Daniel Cook, Bertram and Zabin", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1130, "http://opengameart.org/content/2d-lost-garden-tileset-transition-to-jetrels-wood-tileset", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1200, "Snow Tilset: Daniel Cook, Jetrel, yd, and Zabin.", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1230, "http://opengameart.org/content/2d-lost-garden-zelda-style-tiles-winter-theme-with-additions", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1300, "Mountain Landscape Tileset: Daniel Cook, Jetrel, Bertram, Zabin, Saphy", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1330, "http://opengameart.org/content/2d-lost-garden-zelda-style-tiles-resized-to-32x32-with-additions", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1400, "Most audio and art assets licensed under CC-BY or CC-BY-SA", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1430, "https://creativecommons.org/licenses/by/4.0/", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1460, "https://creativecommons.org/licenses/by-sa/4.0/", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1500, "Window Icon: MrReynevan2", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1530, "http://opengameart.org/content/simple-shield", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1600, "General GUI Sound Effects: Lokif", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1630, "http://opengameart.org/content/gui-sound-effects", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1700, "Forest Battle Background (resized): Tamara Ramsay", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1730, "http://vectorgurl.com/", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1760, "http://opengameart.org/content/forest-background-art", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1800, 'Screen Reset "Thwump" sound: Arthur', { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1830, "http://opengameart.org/content/sci-fi-shwop-1", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1900, "Fonts used under Larabie Fonts Freeware Fonts EULA.", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 1930, "https://tun0.com/fonts/fonts_license.html", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2000, "Character sprites created with Mack's sprite generator", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2030, "http://www.geocities.jp/kurororo4/looseleaf/", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2100, "Animated campfire by Zabin and Jetrel", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2130, "http://opengameart.org/content/camp-fire-animation-for-rpgs-finished", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2200, "Snow Battle Background (resized): Delfos", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2230, "http://opengameart.org/content/artic-landscape-background", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2300, "World Map Tileset: MrBeast", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2330, "http://opengameart.org/users/mrbeast", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2400, "World Map Theme - World Map, By: Aaron Krogh", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2430, "http://aaronkrogh.tumblr.com/", { font: "19px immortal", fill: "#0064ff", align: "center" }));
        credits_items.push(game.add.text(50, initial_y + 2500, "Built with the Generic RPG engine written by George Markeloff.", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        
        
        
        credits_items.push(game.add.text(game.world.centerX, initial_y + 3000, "Thanks for playing!", { font: "30px immortal", fill: "#ffffff", align: "center" }));
        
        
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
        
        
        if (scroll_amount > -1140) {
            
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
