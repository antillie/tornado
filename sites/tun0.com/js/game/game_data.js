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
game_data.player["up_frames"] = [12, 13, 14, 15];
game_data.player["down_frames"] = [0, 1, 2, 3];
game_data.player["left_frames"] = [4, 5, 6 ,7];
game_data.player["right_frames"] = [8, 9, 10, 11];

game_data["initial"] = new Object();
game_data.initial["x"] = 780;
game_data.initial["y"] = 310;
