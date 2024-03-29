import {ActionFormData, MessageFormData, ModalFormData} from "@minecraft/server-ui";
  import {world, system, DisplaySlotId} from "@minecraft/server";

var playerList = world.getAllPlayers();

var player = playerList[0];

var amberRunes;
var amberRuneCount = 25;
var curDimension = world.getDimension("overworld");

function IniltializeScore () {

    amberRunes = world.scoreboard.getObjective("amber");
    if (!amberRunes) {
        amberRunes = world.scoreboard.addObjective("amber", "amber runes : ");
    }
    amberRunes.setScore(player, 25);
    amberRuneCount = 25;
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
function mainTick () {

    system.run(mainTick);
}
system.run(IniltializeScore);
//system.run(mainTick);
//system.run(openShop);
