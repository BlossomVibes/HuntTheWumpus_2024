import {ActionFormData, MessageFormData, ModalFormData} from "@minecraft/server-ui";
  import {world, system} from "@minecraft/server";

var playerList = world.getAllPlayers();

var player = playerList[0];

function openShop () {
    let shop = new ActionFormData();
    shop.title("Wumpus Item Shop");
    shop.body("Pick An Item Type");
    shop.button("Armor", "textures/items/iron_chestplate");
    shop.button("Weapons", "textures/items/iron_sword");
    shop.button("Perks", "textures/items/apple");
    shop.button("Support Items", "textures/items/iron_ingot");
    let weaponsShop = new ActionFormData();
    weaponsShop.title("Wumpus Item Shop");
    weaponsShop.body("Pick An Item Type");
    weaponsShop.button("Armor", "textures/items/iron_chestplate");
    weaponsShop.button("Weapons", "textures/items/iron_sword");
    weaponsShop.button("Perks", "textures/items/apple");
    weaponsShop.button("Support Items", "textures/items/iron_ingot");
    let armorShop = new ActionFormData();
    armorShop.title("Wumpus Item Shop");
    armorShop.body("Pick An Item Type");
    armorShop.button("Armor", "textures/items/iron_chestplate");
    armorShop.button("Weapons", "textures/items/iron_sword");
    armorShop.button("Perks", "textures/items/apple");
    armorShop.button("Support Items", "textures/items/iron_ingot");
    let perksShop = new ActionFormData();
    perkShop.title("Wumpus Item Shop");
    perkShop.body("Pick An Item Type");
    perkShop.button("Armor", "textures/items/iron_chestplate");
    perkShop.button("Weapons", "textures/items/iron_sword");
    perkShop.button("Perks", "textures/items/apple");
    perkShop.button("Support Items", "textures/items/iron_ingot");
    let supportShop = new ActionFormData();
    supportShop.title("Wumpus Item Shop");
    supportShop.body("Pick An Item Type");
    supportShop.button("Armor", "textures/items/iron_chestplate");
    supportShop.button("Weapons", "textures/items/iron_sword");
    supportShop.button("Perks", "textures/items/apple");
    supportShop.button("Support Items", "textures/items/iron_ingot");

    shop.show(player).then(r => {
        // The code when the player responds to/closes the form
        

    }).catch((e) => {
        console.error(e, e.stack);
    });
} 

system.run(openShop);