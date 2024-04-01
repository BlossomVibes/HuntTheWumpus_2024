import {ActionFormData, MessageFormData, ModalFormData} from "@minecraft/server-ui";
  import {world, system, DisplaySlotId} from "@minecraft/server";

var playerList = world.getAllPlayers();

var player = playerList[0];

var amberRunes;
var amberRuneCount = 25;
var goldRunes;
var goldRuneCount = 0;
var diamondRunes;
var diamondRuneCount = 0;
var curDimension = world.getDimension("overworld");
var rngNumber = 0;
var amberBlock = world.getDimension("overworld").getBlock({x: -27, y: -56, z: 2});
var amberPermutation = amberBlock.permutation;

function IniltializeScore () {

    amberRunes = world.scoreboard.getObjective("amber");
    if (!amberRunes) {
        amberRunes = world.scoreboard.addObjective("amber", "amber runes : ");
    }
    amberRunes.setScore(player, 25);
    amberRuneCount = 25;

    goldRunes = world.scoreboard.getObjective("gold");
    if (!goldRunes) {
        goldRunes = world.scoreboard.addObjective("gold", "gold runes : ");
    }
    diamondRunes = world.scoreboard.getObjective("diamond");

    if (!diamondRunes) {
        diamondRunes = world.scoreboard.addObjective("diamond", "diamond runes : ");
    }
}

function OpenAmberCrate () {
    rngNumber = Math.ceil(Math.random() * 100);

    var amberGiveAmount = 0; // rolls randomly the amoutn of amber runes the player gains.
    var goldGiveAmount = 0;
    // first, roll for gold

    if (rngNumber <= 5) {
        goldGiveAmount = 1;
    }
    rngNumber = Math.ceil(Math.random() * 100);

    // now, roll for amber

    if (rngNumber <= 10) {
        amberGiveAmount = 25;
    }
    else if (rngNumber <= 30) {
        amberGiveAmount = 20;
    }
    else if (rngNumber <= 55) {
        amberGiveAmount = 15;
    }
    else if (rngNumber <= 80) {
        amberGiveAmount = 10;
    }
    else {
        amberGiveAmount = 5;
    }

    world.sendMessage("You Gained " + amberGiveAmount.toString() + " Amber Runes!");
    world.sendMessage("You Gained " + goldGiveAmount.toString() + " Gold Runes!");

    amberRuneCount += amberGiveAmount;
    goldRuneCount += goldGiveAmount;

    amberRunes.setScore(player, amberRuneCount);
    goldRunes.setScore(player, goldRuneCount);
}


function openShop () {
   // Scoreboard.addObjective("amberRunes", "amberRunes");
    let shop = new ActionFormData();
    shop.title("Wumpus Item Shop");
    shop.body("Pick An Item Type");
    shop.button("Armor", "textures/items/iron_chestplate");
    shop.button("Weapons", "textures/items/iron_sword");
    shop.button("Perks", "textures/items/apple");
    shop.button("Support Items", "textures/items/iron_ingot");
    let weaponsShop = new ActionFormData();
    weaponsShop.title("Weapons");
    weaponsShop.body("Pick A Weapon");
    weaponsShop.button("Swords", "textures/items/iron_sword");
    weaponsShop.button("Iron Sword : 6 attack damage, cost: 20 amber runes", "textures/items/iron_axe");
    weaponsShop.button("Bows", "textures/items/bow");
    weaponsShop.button("Mythical", "textures/items/trident");
    let armorShop = new ActionFormData();
    armorShop.title("Armor");
    armorShop.body("Pick An Item Type");
    armorShop.button("Helmets", "textures/items/iron_helmet");
    armorShop.button("Chestplates", "textures/items/iron_chestplate");
    armorShop.button("Leggings", "textures/items/iron_leggings");
    armorShop.button("Boots", "textures/items/iron_boots");
    let perkShop = new ActionFormData();
    perkShop.title("Perks");
    perkShop.body("Pick A Perk");
    perkShop.button("Health Boost", "textures/particles/heart");
    perkShop.button("Damage Boost", "textures/items/iron_sword");
    perkShop.button("Reaper Of The Dead", "textures/items/wither_skeleton_skull");
    perkShop.button("Spirit Of The Phoenix", "textures/items/totem_of_undying");
    let supportShop = new ActionFormData();
    supportShop.title("Wumpus Item Shop");
    supportShop.body("Pick An Item");
    supportShop.button("Bat Repellent", "textures/items/iron_hoe");
    supportShop.button("Pit Repellent", "textures/items/potion_of_levetation");
    supportShop.button("Speedo", "textures/items/potion_of_speed");
    supportShop.button("Healing Wand", "textures/items/stick");

    shop.show(player).then((response) => {
        // The code when the player responds to/closes the form
        
        if (response.canceled) {
            return;
        }
        var curResponse = response.selection;
        if (curResponse == 0) {
            armorShop.show(player).then(r => {
                // The code when the player responds to/closes the form

                
            }).catch((e) => {
                console.error(e, e.stack);
            });
        }
        else if (curResponse == 1) {
            weaponsShop.show(player).then(r => {
                // The code when the player responds to/closes the form

                curResponse = r.selection;

                if (curResponse == 1) {
                    if (amberRuneCount >= 20) {
                        amberRuneCount -= 20;

                        amberRunes.setScore(player, amberRuneCount);

                        world.sendMessage("Bought Iron Sword!");

                        curDimension.runCommand("give @p iron_sword");
                    }
                    else {
                        world.sendMessage("Not Enough Money, you brokester");
                    }
                }
            }).catch((e) => {
                console.error(e, e.stack);
            });
        }
        else if (curResponse == 2) {
            perkShop.show(player).then(r => {
                // The code when the player responds to/closes the form

                curResponse = r.selection;

                if (curResponse == 0) {
                    if (amberRuneCount >= 15) {
                        amberRuneCount -= 15;

                        world.sendMessage("Bought Health Perk");

                        amberRunes.setScore(player, amberRuneCount);

                        curDimension.runCommand("effect @p health_boost 100000 0");
                    }
                }
            }).catch((e) => {
                console.error(e, e.stack);
            });
        }
        else {
            supportShop.show(player).then(r => {
                // The code when the player responds to/closes the form
            }).catch((e) => {
                console.error(e, e.stack);
            });
        }

    }).catch((e) => {
        console.error(e, e.stack);
    });
} 
world.beforeEvents.itemUse.subscribe(event => {
    if (event.itemStack.typeId === "minecraft:stick" && event.itemStack.nameTag === "Shop Opener") {
        system.run(openShop);
    };
});
world.afterEvents.playerBreakBlock.subscribe(event => {
    if (event.brokenBlockPermutation.matches("myname:amber_crate")) {
        system.run(OpenAmberCrate);
    };
});
function mainTick () {

    system.run(mainTick);
}
system.run(IniltializeScore);
//system.run(mainTick);
//system.run(openShop);
