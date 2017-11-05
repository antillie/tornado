"use strict";

var game_data = new Object();

game_data["music"] = null;
game_data["menu_change_sound"] = null;

game_data["main_menu"] = new Object();
game_data.main_menu["menu_entry"] = 0;
game_data.main_menu["menu_items"] = [];

game_data["credits_screen"] = new Object();
game_data.credits_screen["credits_items"] = [];
game_data.credits_screen["scroll_amount"] = 0;

game_data["player"] = new Object();
game_data.player["sprite"] = null;
game_data.player["last_direction"] = "down";
