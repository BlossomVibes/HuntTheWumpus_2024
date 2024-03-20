import {world, system, BlockPermutation} from "@minecraft/server";

var currentPlayerRoom = Math.ceil(Math.random() * 30);
var wumpusRoom = Math.ceil(Math.random() * 30);
var totalArrows = 0;
var gold = 0;
var batRooms = [];
var pitRooms = [];
var chestRooms = [];
var chestOpenedRooms = [];
console.log(wumpusRoom);
var curMap = [[37, 37, 38,37, 37, 38,37, 37, 38,37, 37, 38,37, 37, 38,37, 37, 38], [20, 51, 94], [146, 143, 282]]; // for example, this will spawn a small grid made out of bedrock, beacons, and other blocks.
// this big giant array is a list of all block ID's in minecraft, for calling via blockPermutation function.
// we have a mechanism (directly from the mock version) where you can build maps directly from a 2d array into minecraft(meaning you can build maps without having to touch minecraft at all.)
// we also have a google docs, where we can easily find what idex of thist list (1indexed list here as 0 is a blank) each block is!.
var blockTypes =  ["","minecraft:acacia_button", "minecraft:acacia_door", "minecraft:acacia_fence", "minecraft:acacia_fence_gate", "minecraft:acacia_leaves", "minecraft:acacia_log", "minecraft:acacia_planks", "minecraft:acacia_pressure_plate", "minecraft:acacia_sapling", "minecraft:acacia_sign", "minecraft:acacia_slab", "minecraft:acacia_stairs", "minecraft:acacia_trapdoor", "minecraft:acacia_wall_sign", "minecraft:acacia_wood", "minecraft:activator_rail", "minecraft:air", "minecraft:allium", "minecraft:amethyst_block", "minecraft:amethyst_cluster", "minecraft:ancient_debris", "minecraft:andesite", "minecraft:andesite_slab", "minecraft:andesite_stairs", "minecraft:andesite_wall", "minecraft:anvil", "minecraft:attached_melon_stem", "minecraft:attached_pumpkin_stem", "minecraft:azalea", "minecraft:azalea_leaves", "minecraft:azure_bluet", "minecraft:bamboo", "minecraft:bamboo_sapling", "minecraft:barrel", "minecraft:barrier", "minecraft:basalt", "minecraft:beacon", "minecraft:bedrock", "minecraft:bee_nest", "minecraft:beehive", "minecraft:beetroots", "minecraft:bell", "minecraft:big_dripleaf", "minecraft:big_dripleaf_stem", "minecraft:birch_button", "minecraft:birch_door", "minecraft:birch_fence", "minecraft:birch_fence_gate", "minecraft:birch_leaves", "minecraft:birch_log", "minecraft:birch_planks", "minecraft:birch_pressure_plate", "minecraft:birch_sapling", "minecraft:birch_sign", "minecraft:birch_slab", "minecraft:birch_stairs", "minecraft:birch_trapdoor", "minecraft:birch_wall_sign", "minecraft:birch_wood", "minecraft:black_banner", "minecraft:black_bed", "minecraft:black_candle", "minecraft:black_candle_cake", "minecraft:black_carpet", "minecraft:black_concrete", "minecraft:black_concrete_powder", "minecraft:black_glazed_terracotta", "minecraft:black_shulker_box", "minecraft:black_stained_glass", "minecraft:black_stained_glass_pane", "minecraft:black_terracotta", "minecraft:black_wall_banner", "minecraft:black_wool", "minecraft:blackstone", "minecraft:blackstone_slab", "minecraft:blackstone_stairs", "minecraft:blackstone_wall", "minecraft:blast_furnace", "minecraft:blue_banner", "minecraft:blue_bed", "minecraft:blue_candle", "minecraft:blue_candle_cake", "minecraft:blue_carpet", "minecraft:blue_concrete", "minecraft:blue_concrete_powder", "minecraft:blue_glazed_terracotta", "minecraft:blue_ice", "minecraft:blue_orchid", "minecraft:blue_shulker_box", "minecraft:blue_stained_glass", "minecraft:blue_stained_glass_pane", "minecraft:blue_terracotta", "minecraft:blue_wall_banner", "minecraft:blue_wool", "minecraft:bone_block", "minecraft:bookshelf", "minecraft:brain_coral", "minecraft:brain_coral_block", "minecraft:brain_coral_fan", "minecraft:brain_coral_wall_fan", "minecraft:brewing_stand", "minecraft:brick_slab", "minecraft:brick_stairs", "minecraft:brick_wall", "minecraft:bricks", "minecraft:brown_banner", "minecraft:brown_bed", "minecraft:brown_candle", "minecraft:brown_candle_cake", "minecraft:brown_carpet", "minecraft:brown_concrete", "minecraft:brown_concrete_powder", "minecraft:brown_glazed_terracotta", "minecraft:brown_mushroom", "minecraft:brown_mushroom_block", "minecraft:brown_shulker_box", "minecraft:brown_stained_glass", "minecraft:brown_stained_glass_pane", "minecraft:brown_terracotta", "minecraft:brown_wall_banner", "minecraft:brown_wool", "minecraft:bubble_column", "minecraft:bubble_coral", "minecraft:bubble_coral_block", "minecraft:bubble_coral_fan", "minecraft:bubble_coral_wall_fan", "minecraft:budding_amethyst", "minecraft:cactus", "minecraft:cake", "minecraft:calcite", "minecraft:campfire", "minecraft:candle", "minecraft:candle_cake", "minecraft:carrots", "minecraft:cartography_table", "minecraft:carved_pumpkin", "minecraft:cauldron", "minecraft:cave_air", "minecraft:cave_vines", "minecraft:cave_vines_plant", "minecraft:chain", "minecraft:chain_command_block", "minecraft:chest", "minecraft:chipped_anvil", "minecraft:chiseled_deepslate", "minecraft:chiseled_nether_bricks", "minecraft:chiseled_polished_blackstone", "minecraft:chiseled_quartz_block", "minecraft:chiseled_red_sandstone", "minecraft:chiseled_sandstone", "minecraft:chiseled_stone_bricks", "minecraft:chorus_flower", "minecraft:chorus_plant", "minecraft:clay", "minecraft:coal_block", "minecraft:coal_ore", "minecraft:coarse_dirt", "minecraft:cobbled_deepslate", "minecraft:cobbled_deepslate_slab", "minecraft:cobbled_deepslate_stairs", "minecraft:cobbled_deepslate_wall", "minecraft:cobblestone", "minecraft:cobblestone_slab", "minecraft:cobblestone_stairs", "minecraft:cobblestone_wall", "minecraft:cobweb", "minecraft:cocoa", "minecraft:command_block", "minecraft:comparator", "minecraft:composter", "minecraft:conduit", "minecraft:copper_block", "minecraft:copper_ore", "minecraft:cornflower", "minecraft:cracked_deepslate_bricks", "minecraft:cracked_deepslate_tiles", "minecraft:cracked_nether_bricks", "minecraft:cracked_polished_blackstone_bricks", "minecraft:cracked_stone_bricks", "minecraft:crafting_table", "minecraft:creeper_head", "minecraft:creeper_wall_head", "minecraft:crimson_button", "minecraft:crimson_door", "minecraft:crimson_fence", "minecraft:crimson_fence_gate", "minecraft:crimson_fungus", "minecraft:crimson_hyphae", "minecraft:crimson_nylium", "minecraft:crimson_planks", "minecraft:crimson_pressure_plate", "minecraft:crimson_roots", "minecraft:crimson_sign", "minecraft:crimson_slab", "minecraft:crimson_stairs", "minecraft:crimson_stem", "minecraft:crimson_trapdoor", "minecraft:crimson_wall_sign", "minecraft:crying_obsidian", "minecraft:cut_copper", "minecraft:cut_copper_slab", "minecraft:cut_copper_stairs", "minecraft:cut_red_sandstone", "minecraft:cut_red_sandstone_slab", "minecraft:cut_sandstone", "minecraft:cut_sandstone_slab", "minecraft:cyan_banner", "minecraft:cyan_bed", "minecraft:cyan_candle", "minecraft:cyan_candle_cake", "minecraft:cyan_carpet", "minecraft:cyan_concrete", "minecraft:cyan_concrete_powder", "minecraft:cyan_glazed_terracotta", "minecraft:cyan_shulker_box", "minecraft:cyan_stained_glass", "minecraft:cyan_stained_glass_pane", "minecraft:cyan_terracotta", "minecraft:cyan_wall_banner", "minecraft:cyan_wool", "minecraft:damaged_anvil", "minecraft:dandelion", "minecraft:dark_oak_button", "minecraft:dark_oak_door", "minecraft:dark_oak_fence", "minecraft:dark_oak_fence_gate", "minecraft:dark_oak_leaves", "minecraft:dark_oak_log", "minecraft:dark_oak_planks", "minecraft:dark_oak_pressure_plate", "minecraft:dark_oak_sapling", "minecraft:dark_oak_sign", "minecraft:dark_oak_slab", "minecraft:dark_oak_stairs", "minecraft:dark_oak_trapdoor", "minecraft:dark_oak_wall_sign", "minecraft:dark_oak_wood", "minecraft:dark_prismarine", "minecraft:dark_prismarine_slab", "minecraft:dark_prismarine_stairs", "minecraft:daylight_detector", "minecraft:dead_brain_coral", "minecraft:dead_brain_coral_block", "minecraft:dead_brain_coral_fan", "minecraft:dead_brain_coral_wall_fan", "minecraft:dead_bubble_coral", "minecraft:dead_bubble_coral_block", "minecraft:dead_bubble_coral_fan", "minecraft:dead_bubble_coral_wall_fan", "minecraft:dead_bush", "minecraft:dead_fire_coral", "minecraft:dead_fire_coral_block", "minecraft:dead_fire_coral_fan", "minecraft:dead_fire_coral_wall_fan", "minecraft:dead_horn_coral", "minecraft:dead_horn_coral_block", "minecraft:dead_horn_coral_fan", "minecraft:dead_horn_coral_wall_fan", "minecraft:dead_tube_coral", "minecraft:dead_tube_coral_block", "minecraft:dead_tube_coral_fan", "minecraft:dead_tube_coral_wall_fan", "minecraft:deepslate", "minecraft:deepslate_brick_slab", "minecraft:deepslate_brick_stairs", "minecraft:deepslate_brick_wall", "minecraft:deepslate_bricks", "minecraft:deepslate_coal_ore", "minecraft:deepslate_copper_ore", "minecraft:deepslate_diamond_ore", "minecraft:deepslate_emerald_ore", "minecraft:deepslate_gold_ore", "minecraft:deepslate_iron_ore", "minecraft:deepslate_lapis_ore", "minecraft:deepslate_redstone_ore", "minecraft:deepslate_tile_slab", "minecraft:deepslate_tile_stairs", "minecraft:deepslate_tile_wall", "minecraft:deepslate_tiles", "minecraft:detector_rail", "minecraft:diamond_block", "minecraft:diamond_ore", "minecraft:diorite", "minecraft:diorite_slab", "minecraft:diorite_stairs", "minecraft:diorite_wall", "minecraft:dirt", "minecraft:dirt_path", "minecraft:dispenser", "minecraft:dragon_egg", "minecraft:dragon_head", "minecraft:dragon_wall_head", "minecraft:dried_kelp_block", "minecraft:dripstone_block", "minecraft:dropper", "minecraft:emerald_block", "minecraft:emerald_ore", "minecraft:enchanting_table", "minecraft:end_gateway", "minecraft:end_portal", "minecraft:end_portal_frame", "minecraft:end_rod", "minecraft:end_stone", "minecraft:end_stone_brick_slab", "minecraft:end_stone_brick_stairs", "minecraft:end_stone_brick_wall", "minecraft:end_stone_bricks", "minecraft:ender_chest", "minecraft:exposed_copper", "minecraft:exposed_cut_copper", "minecraft:exposed_cut_copper_slab", "minecraft:exposed_cut_copper_stairs", "minecraft:farmland", "minecraft:fern", "minecraft:fire", "minecraft:fire_coral", "minecraft:fire_coral_block", "minecraft:fire_coral_fan", "minecraft:fire_coral_wall_fan", "minecraft:fletching_table", "minecraft:flower_pot", "minecraft:flowering_azalea", "minecraft:flowering_azalea_leaves", "minecraft:frogspawn", "minecraft:frosted_ice", "minecraft:furnace", "minecraft:gilded_blackstone", "minecraft:glass", "minecraft:glass_pane", "minecraft:glow_lichen", "minecraft:glowstone", "minecraft:gold_block", "minecraft:gold_ore", "minecraft:granite", "minecraft:granite_slab", "minecraft:granite_stairs", "minecraft:granite_wall", "minecraft:grass", "minecraft:grass_block", "minecraft:gravel", "minecraft:gray_banner", "minecraft:gray_bed", "minecraft:gray_candle", "minecraft:gray_candle_cake", "minecraft:gray_carpet", "minecraft:gray_concrete", "minecraft:gray_concrete_powder", "minecraft:gray_glazed_terracotta", "minecraft:gray_shulker_box", "minecraft:gray_stained_glass", "minecraft:gray_stained_glass_pane", "minecraft:gray_terracotta", "minecraft:gray_wall_banner", "minecraft:gray_wool", "minecraft:green_banner", "minecraft:green_bed", "minecraft:green_candle", "minecraft:green_candle_cake", "minecraft:green_carpet", "minecraft:green_concrete", "minecraft:green_concrete_powder", "minecraft:green_glazed_terracotta", "minecraft:green_shulker_box", "minecraft:green_stained_glass", "minecraft:green_stained_glass_pane", "minecraft:green_terracotta", "minecraft:green_wall_banner", "minecraft:green_wool", "minecraft:grindstone", "minecraft:hanging_roots", "minecraft:hay_block", "minecraft:heavy_weighted_pressure_plate", "minecraft:honey_block", "minecraft:honeycomb_block", "minecraft:hopper", "minecraft:horn_coral", "minecraft:horn_coral_block", "minecraft:horn_coral_fan", "minecraft:horn_coral_wall_fan", "minecraft:ice", "minecraft:infested_chiseled_stone_bricks", "minecraft:infested_cobblestone", "minecraft:infested_cracked_stone_bricks", "minecraft:infested_deepslate", "minecraft:infested_mossy_stone_bricks", "minecraft:infested_stone", "minecraft:infested_stone_bricks", "minecraft:iron_bars", "minecraft:iron_block", "minecraft:iron_door", "minecraft:iron_ore", "minecraft:iron_trapdoor", "minecraft:jack_o_lantern", "minecraft:jigsaw", "minecraft:jukebox", "minecraft:jungle_button", "minecraft:jungle_door", "minecraft:jungle_fence", "minecraft:jungle_fence_gate", "minecraft:jungle_leaves", "minecraft:jungle_log", "minecraft:jungle_planks", "minecraft:jungle_pressure_plate", "minecraft:jungle_sapling", "minecraft:jungle_sign", "minecraft:jungle_slab", "minecraft:jungle_stairs", "minecraft:jungle_trapdoor", "minecraft:jungle_wall_sign", "minecraft:jungle_wood", "minecraft:kelp", "minecraft:kelp_plant", "minecraft:ladder", "minecraft:lantern", "minecraft:lapis_block", "minecraft:lapis_ore", "minecraft:large_amethyst_bud", "minecraft:large_fern", "minecraft:lava", "minecraft:lava_cauldron", "minecraft:lectern", "minecraft:lever", "minecraft:light", "minecraft:light_blue_banner", "minecraft:light_blue_bed", "minecraft:light_blue_candle", "minecraft:light_blue_candle_cake", "minecraft:light_blue_carpet", "minecraft:light_blue_concrete", "minecraft:light_blue_concrete_powder", "minecraft:light_blue_glazed_terracotta", "minecraft:light_blue_shulker_box", "minecraft:light_blue_stained_glass", "minecraft:light_blue_stained_glass_pane", "minecraft:light_blue_terracotta", "minecraft:light_blue_wall_banner", "minecraft:light_blue_wool", "minecraft:light_gray_banner", "minecraft:light_gray_bed", "minecraft:light_gray_candle", "minecraft:light_gray_candle_cake", "minecraft:light_gray_carpet", "minecraft:light_gray_concrete", "minecraft:light_gray_concrete_powder", "minecraft:light_gray_glazed_terracotta", "minecraft:light_gray_shulker_box", "minecraft:light_gray_stained_glass", "minecraft:light_gray_stained_glass_pane", "minecraft:light_gray_terracotta", "minecraft:light_gray_wall_banner", "minecraft:light_gray_wool", "minecraft:light_weighted_pressure_plate", "minecraft:lightning_rod", "minecraft:lilac", "minecraft:lily_of_the_valley", "minecraft:lily_pad", "minecraft:lime_banner", "minecraft:lime_bed", "minecraft:lime_candle", "minecraft:lime_candle_cake", "minecraft:lime_carpet", "minecraft:lime_concrete", "minecraft:lime_concrete_powder", "minecraft:lime_glazed_terracotta", "minecraft:lime_shulker_box", "minecraft:lime_stained_glass", "minecraft:lime_stained_glass_pane", "minecraft:lime_terracotta", "minecraft:lime_wall_banner", "minecraft:lime_wool", "minecraft:lodestone", "minecraft:loom", "minecraft:magenta_banner", "minecraft:magenta_bed", "minecraft:magenta_candle", "minecraft:magenta_candle_cake", "minecraft:magenta_carpet", "minecraft:magenta_concrete", "minecraft:magenta_concrete_powder", "minecraft:magenta_glazed_terracotta", "minecraft:magenta_shulker_box", "minecraft:magenta_stained_glass", "minecraft:magenta_stained_glass_pane", "minecraft:magenta_terracotta", "minecraft:magenta_wall_banner", "minecraft:magenta_wool", "minecraft:magma_block", "minecraft:mangrove_button", "minecraft:mangrove_door", "minecraft:mangrove_fence", "minecraft:mangrove_fence_gate", "minecraft:mangrove_leaves", "minecraft:mangrove_log", "minecraft:mangrove_planks", "minecraft:mangrove_pressure_plate", "minecraft:mangrove_propagule", "minecraft:mangrove_roots", "minecraft:mangrove_sign", "minecraft:mangrove_slab", "minecraft:mangrove_stairs", "minecraft:mangrove_trapdoor", "minecraft:mangrove_wall_sign", "minecraft:mangrove_wood", "minecraft:medium_amethyst_bud", "minecraft:melon", "minecraft:melon_stem", "minecraft:moss_block", "minecraft:moss_carpet", "minecraft:mossy_cobblestone", "minecraft:mossy_cobblestone_slab", "minecraft:mossy_cobblestone_stairs", "minecraft:mossy_cobblestone_wall", "minecraft:mossy_stone_brick_slab", "minecraft:mossy_stone_brick_stairs", "minecraft:mossy_stone_brick_wall", "minecraft:mossy_stone_bricks", "minecraft:moving_piston", "minecraft:mud", "minecraft:mud_brick_slab", "minecraft:mud_brick_stairs", "minecraft:mud_brick_wall", "minecraft:mud_bricks", "minecraft:muddy_mangrove_roots", "minecraft:mushroom_stem", "minecraft:mycelium", "minecraft:nether_brick_fence", "minecraft:nether_brick_slab", "minecraft:nether_brick_stairs", "minecraft:nether_brick_wall", "minecraft:nether_bricks", "minecraft:nether_gold_ore", "minecraft:nether_portal", "minecraft:nether_quartz_ore", "minecraft:nether_sprouts", "minecraft:nether_wart", "minecraft:nether_wart_block", "minecraft:netherite_block", "minecraft:netherrack", "minecraft:note_block", "minecraft:oak_button", "minecraft:oak_door", "minecraft:oak_fence", "minecraft:oak_fence_gate", "minecraft:oak_leaves", "minecraft:oak_log", "minecraft:oak_planks", "minecraft:oak_pressure_plate", "minecraft:oak_sapling", "minecraft:oak_sign", "minecraft:oak_slab", "minecraft:oak_stairs", "minecraft:oak_trapdoor", "minecraft:oak_wall_sign", "minecraft:oak_wood", "minecraft:observer", "minecraft:obsidian", "minecraft:ochre_froglight", "minecraft:orange_banner", "minecraft:orange_bed", "minecraft:orange_candle", "minecraft:orange_candle_cake", "minecraft:orange_carpet", "minecraft:orange_concrete", "minecraft:orange_concrete_powder", "minecraft:orange_glazed_terracotta", "minecraft:orange_shulker_box", "minecraft:orange_stained_glass", "minecraft:orange_stained_glass_pane", "minecraft:orange_terracotta", "minecraft:orange_tulip", "minecraft:orange_wall_banner", "minecraft:orange_wool", "minecraft:oxeye_daisy", "minecraft:oxidized_copper", "minecraft:oxidized_cut_copper", "minecraft:oxidized_cut_copper_slab", "minecraft:oxidized_cut_copper_stairs", "minecraft:packed_ice", "minecraft:packed_mud", "minecraft:pearlescent_froglight", "minecraft:peony", "minecraft:petrified_oak_slab", "minecraft:pink_banner", "minecraft:pink_bed", "minecraft:pink_candle", "minecraft:pink_candle_cake", "minecraft:pink_carpet", "minecraft:pink_concrete", "minecraft:pink_concrete_powder", "minecraft:pink_glazed_terracotta", "minecraft:pink_shulker_box", "minecraft:pink_stained_glass", "minecraft:pink_stained_glass_pane", "minecraft:pink_terracotta", "minecraft:pink_tulip", "minecraft:pink_wall_banner", "minecraft:pink_wool", "minecraft:piston", "minecraft:piston_head", "minecraft:player_head", "minecraft:player_wall_head", "minecraft:podzol", "minecraft:pointed_dripstone", "minecraft:polished_andesite", "minecraft:polished_andesite_slab", "minecraft:polished_andesite_stairs", "minecraft:polished_basalt", "minecraft:polished_blackstone", "minecraft:polished_blackstone_brick_slab", "minecraft:polished_blackstone_brick_stairs", "minecraft:polished_blackstone_brick_wall", "minecraft:polished_blackstone_bricks", "minecraft:polished_blackstone_button", "minecraft:polished_blackstone_pressure_plate", "minecraft:polished_blackstone_slab", "minecraft:polished_blackstone_stairs", "minecraft:polished_blackstone_wall", "minecraft:polished_deepslate", "minecraft:polished_deepslate_slab", "minecraft:polished_deepslate_stairs", "minecraft:polished_deepslate_wall", "minecraft:polished_diorite", "minecraft:polished_diorite_slab", "minecraft:polished_diorite_stairs", "minecraft:polished_granite", "minecraft:polished_granite_slab", "minecraft:polished_granite_stairs", "minecraft:poppy", "minecraft:potatoes", "minecraft:potted_acacia_sapling", "minecraft:potted_allium", "minecraft:potted_azalea_bush", "minecraft:potted_azure_bluet", "minecraft:potted_bamboo", "minecraft:potted_birch_sapling", "minecraft:potted_blue_orchid", "minecraft:potted_brown_mushroom", "minecraft:potted_cactus", "minecraft:potted_cornflower", "minecraft:potted_crimson_fungus", "minecraft:potted_crimson_roots", "minecraft:potted_dandelion", "minecraft:potted_dark_oak_sapling", "minecraft:potted_dead_bush", "minecraft:potted_fern", "minecraft:potted_flowering_azalea_bush", "minecraft:potted_jungle_sapling", "minecraft:potted_lily_of_the_valley", "minecraft:potted_mangrove_propagule", "minecraft:potted_oak_sapling", "minecraft:potted_orange_tulip", "minecraft:potted_oxeye_daisy", "minecraft:potted_pink_tulip", "minecraft:potted_poppy", "minecraft:potted_red_mushroom", "minecraft:potted_red_tulip", "minecraft:potted_spruce_sapling", "minecraft:potted_warped_fungus", "minecraft:potted_warped_roots", "minecraft:potted_white_tulip", "minecraft:potted_wither_rose", "minecraft:powder_snow", "minecraft:powder_snow_cauldron", "minecraft:powered_rail", "minecraft:prismarine", "minecraft:prismarine_brick_slab", "minecraft:prismarine_brick_stairs", "minecraft:prismarine_bricks", "minecraft:prismarine_slab", "minecraft:prismarine_stairs", "minecraft:prismarine_wall", "minecraft:pumpkin", "minecraft:pumpkin_stem", "minecraft:purple_banner", "minecraft:purple_bed", "minecraft:purple_candle", "minecraft:purple_candle_cake", "minecraft:purple_carpet", "minecraft:purple_concrete", "minecraft:purple_concrete_powder", "minecraft:purple_glazed_terracotta", "minecraft:purple_shulker_box", "minecraft:purple_stained_glass", "minecraft:purple_stained_glass_pane", "minecraft:purple_terracotta", "minecraft:purple_wall_banner", "minecraft:purple_wool", "minecraft:purpur_block", "minecraft:purpur_pillar", "minecraft:purpur_slab", "minecraft:purpur_stairs", "minecraft:quartz_block", "minecraft:quartz_bricks", "minecraft:quartz_pillar", "minecraft:quartz_slab", "minecraft:quartz_stairs", "minecraft:rail", "minecraft:raw_copper_block", "minecraft:raw_gold_block", "minecraft:raw_iron_block", "minecraft:red_banner", "minecraft:red_bed", "minecraft:red_candle", "minecraft:red_candle_cake", "minecraft:red_carpet", "minecraft:red_concrete", "minecraft:red_concrete_powder", "minecraft:red_glazed_terracotta", "minecraft:red_mushroom", "minecraft:red_mushroom_block", "minecraft:red_nether_brick_slab", "minecraft:red_nether_brick_stairs", "minecraft:red_nether_brick_wall", "minecraft:red_nether_bricks", "minecraft:red_sand", "minecraft:red_sandstone", "minecraft:red_sandstone_slab", "minecraft:red_sandstone_stairs", "minecraft:red_sandstone_wall", "minecraft:red_shulker_box", "minecraft:red_stained_glass", "minecraft:red_stained_glass_pane", "minecraft:red_terracotta", "minecraft:red_tulip", "minecraft:red_wall_banner", "minecraft:red_wool", "minecraft:redstone_block", "minecraft:redstone_lamp", "minecraft:redstone_ore", "minecraft:redstone_torch", "minecraft:redstone_wall_torch", "minecraft:redstone_wire", "minecraft:reinforced_deepslate", "minecraft:repeater", "minecraft:repeating_command_block", "minecraft:respawn_anchor", "minecraft:rooted_dirt", "minecraft:rose_bush", "minecraft:sand", "minecraft:sandstone", "minecraft:sandstone_slab", "minecraft:sandstone_stairs", "minecraft:sandstone_wall", "minecraft:scaffolding", "minecraft:sculk", "minecraft:sculk_catalyst", "minecraft:sculk_sensor", "minecraft:sculk_shrieker", "minecraft:sculk_vein", "minecraft:sea_lantern", "minecraft:sea_pickle", "minecraft:seagrass", "minecraft:shroomlight", "minecraft:shulker_box", "minecraft:skeleton_skull", "minecraft:skeleton_wall_skull", "minecraft:slime_block", "minecraft:small_amethyst_bud", "minecraft:small_dripleaf", "minecraft:smithing_table", "minecraft:smoker", "minecraft:smooth_basalt", "minecraft:smooth_quartz", "minecraft:smooth_quartz_slab", "minecraft:smooth_quartz_stairs", "minecraft:smooth_red_sandstone", "minecraft:smooth_red_sandstone_slab", "minecraft:smooth_red_sandstone_stairs", "minecraft:smooth_sandstone", "minecraft:smooth_sandstone_slab", "minecraft:smooth_sandstone_stairs", "minecraft:smooth_stone", "minecraft:smooth_stone_slab", "minecraft:snow", "minecraft:snow_block", "minecraft:soul_campfire", "minecraft:soul_fire", "minecraft:soul_lantern", "minecraft:soul_sand", "minecraft:soul_soil", "minecraft:soul_torch", "minecraft:soul_wall_torch", "minecraft:spawner", "minecraft:sponge", "minecraft:spore_blossom", "minecraft:spruce_button", "minecraft:spruce_door", "minecraft:spruce_fence", "minecraft:spruce_fence_gate", "minecraft:spruce_leaves", "minecraft:spruce_log", "minecraft:spruce_planks", "minecraft:spruce_pressure_plate", "minecraft:spruce_sapling", "minecraft:spruce_sign", "minecraft:spruce_slab", "minecraft:spruce_stairs", "minecraft:spruce_trapdoor", "minecraft:spruce_wall_sign", "minecraft:spruce_wood", "minecraft:sticky_piston", "minecraft:stone", "minecraft:stone_brick_slab", "minecraft:stone_brick_stairs", "minecraft:stone_brick_wall", "minecraft:stone_bricks", "minecraft:stone_button", "minecraft:stone_pressure_plate", "minecraft:stone_slab", "minecraft:stone_stairs", "minecraft:stonecutter", "minecraft:stripped_acacia_log", "minecraft:stripped_acacia_wood", "minecraft:stripped_birch_log", "minecraft:stripped_birch_wood", "minecraft:stripped_crimson_hyphae", "minecraft:stripped_crimson_stem", "minecraft:stripped_dark_oak_log", "minecraft:stripped_dark_oak_wood", "minecraft:stripped_jungle_log", "minecraft:stripped_jungle_wood", "minecraft:stripped_mangrove_log", "minecraft:stripped_mangrove_wood", "minecraft:stripped_oak_log", "minecraft:stripped_oak_wood", "minecraft:stripped_spruce_log", "minecraft:stripped_spruce_wood", "minecraft:stripped_warped_hyphae", "minecraft:stripped_warped_stem", "minecraft:structure_block", "minecraft:structure_void", "minecraft:sugar_cane", "minecraft:sunflower", "minecraft:sweet_berry_bush", "minecraft:tall_grass", "minecraft:tall_seagrass", "minecraft:target", "minecraft:terracotta", "minecraft:tinted_glass", "minecraft:tnt", "minecraft:torch", "minecraft:trapped_chest", "minecraft:tripwire", "minecraft:tripwire_hook", "minecraft:tube_coral", "minecraft:tube_coral_block", "minecraft:tube_coral_fan", "minecraft:tube_coral_wall_fan", "minecraft:tuff", "minecraft:turtle_egg", "minecraft:twisting_vines", "minecraft:twisting_vines_plant", "minecraft:verdant_froglight", "minecraft:vine", "minecraft:void_air", "minecraft:wall_torch", "minecraft:warped_button", "minecraft:warped_door", "minecraft:warped_fence", "minecraft:warped_fence_gate", "minecraft:warped_fungus", "minecraft:warped_hyphae", "minecraft:warped_nylium", "minecraft:warped_planks", "minecraft:warped_pressure_plate", "minecraft:warped_roots", "minecraft:warped_sign", "minecraft:warped_slab", "minecraft:warped_stairs", "minecraft:warped_stem", "minecraft:warped_trapdoor", "minecraft:warped_wall_sign", "minecraft:warped_wart_block", "minecraft:water", "minecraft:water_cauldron", "minecraft:waxed_copper_block", "minecraft:waxed_cut_copper", "minecraft:waxed_cut_copper_slab", "minecraft:waxed_cut_copper_stairs", "minecraft:waxed_exposed_copper", "minecraft:waxed_exposed_cut_copper", "minecraft:waxed_exposed_cut_copper_slab", "minecraft:waxed_exposed_cut_copper_stairs", "minecraft:waxed_oxidized_copper", "minecraft:waxed_oxidized_cut_copper", "minecraft:waxed_oxidized_cut_copper_slab", "minecraft:waxed_oxidized_cut_copper_stairs", "minecraft:waxed_weathered_copper", "minecraft:waxed_weathered_cut_copper", "minecraft:waxed_weathered_cut_copper_slab", "minecraft:waxed_weathered_cut_copper_stairs", "minecraft:weathered_copper", "minecraft:weathered_cut_copper", "minecraft:weathered_cut_copper_slab", "minecraft:weathered_cut_copper_stairs", "minecraft:weeping_vines", "minecraft:weeping_vines_plant", "minecraft:wet_sponge", "minecraft:wheat", "minecraft:white_banner", "minecraft:white_bed", "minecraft:white_candle", "minecraft:white_candle_cake", "minecraft:white_carpet", "minecraft:white_concrete", "minecraft:white_concrete_powder", "minecraft:white_glazed_terracotta", "minecraft:white_shulker_box", "minecraft:white_stained_glass", "minecraft:white_stained_glass_pane", "minecraft:white_terracotta", "minecraft:white_tulip", "minecraft:white_wall_banner", "minecraft:white_wool", "minecraft:wither_rose", "minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_wall_skull", "minecraft:yellow_banner", "minecraft:yellow_bed", "minecraft:yellow_candle", "minecraft:yellow_candle_cake", "minecraft:yellow_carpet", "minecraft:yellow_concrete", "minecraft:yellow_concrete_powder", "minecraft:yellow_glazed_terracotta", "minecraft:yellow_shulker_box", "minecraft:yellow_stained_glass", "minecraft:yellow_stained_glass_pane", "minecraft:yellow_terracotta", "minecraft:yellow_wall_banner", "minecraft:yellow_wool", "minecraft:zombie_head", "minecraft:zombie_wall_head"];
var adjRooms = [
  [21, 22, 2, 11, 10, 30],
  [22, 3, 13, 12, 11, 1],
  [23, 24, 4, 13, 2, 22],
  [24, 5, 15, 14, 13, 3],
  [25, 26, 6, 15, 4, 24],
  [26, 7, 17, 16, 15, 5],
  [27, 28, 8 ,17, 6 ,26],
  [28, 9, 19, 18, 17, 7],
  [29, 30, 10, 19, 8, 28],
  [30, 1, 11, 20, 19, 9],
  [1 ,2, 12, 21, 20, 10],
  [2, 13, 23 ,22, 21, 11],
  [3, 4 ,14 ,23, 12, 2],
  [4 ,15 ,25, 24 ,23, 13],
  [5, 6 ,16, 25, 14, 4],
  [6, 17, 27 ,26 ,25, 15],
  [7 ,8 ,18, 27, 16, 6],
  [8, 19 ,29, 28 ,27, 17],
  [9, 10, 20, 29, 18 ,8],    
  [10, 11 ,21, 30 ,29, 19],
  [11, 12, 22, 1 ,30, 20],
  [12 ,23, 3, 2, 1 ,21],
  [13, 14 ,24, 3, 22 ,12],
  [14, 25 ,5 ,4, 3, 23],
  [15, 16 ,26 ,5 ,24, 14],
  [16 ,27, 7 ,6, 5 ,25],
  [17, 18 ,28 ,7, 26, 16],
  [18, 29 ,9 ,8, 7 ,27],
  [19, 20 ,30 ,9, 28 ,18],
  [20, 21, 1 ,10, 9, 29],
];
var lockedRooms = [[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],
[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],
[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], [],[], []];
function getPlayer() {
    const allPlayers = world.getAllPlayers();
    if (allPlayers.length === 0) {
      return undefined;
    }
  
    return allPlayers[0];
}
const player = getPlayer();
function initializeRooms () {
    var suggestedRoom = currentPlayerRoom;
    while (currentPlayerRoom == wumpusRoom) {
    wumpusRoom = Math.ceil(Math.random() * 30);
    }
    for (let i = 1; i <= 30; i++) {
        for (let j = 0; j < 7; j++) {
            lockedRooms[i].push(false);
        }
    }
    for (let i = 1; i <= 30; i++) {
        var r1 = 0;
        var r2 = 0;
        var r3 = 0;
        while (r1 == r2 || r2 == r3 || r1 == r3) {
            r1 = Math.ceil(Math.random() * 6);
            r2 = Math.ceil(Math.random() * 6);
            r3 = Math.ceil(Math.random() * 6);
        }
        lockedRooms[i][r1] = true;
        lockedRooms[i][r2] = true;
        lockedRooms[i][r3] = true;
    }
    for (let i = 0; i < 5; i++) {
    while (
        suggestedRoom == currentPlayerRoom ||
        batRooms.indexOf(suggestedRoom) > -1
    ) {
        suggestedRoom = Math.ceil(Math.random() * 30);
    }
    batRooms.push(suggestedRoom);
    }
    console.log(batRooms);
    for (let i = 0; i < 3; i++) {
    while (
        suggestedRoom == currentPlayerRoom ||
        batRooms.indexOf(suggestedRoom) > -1 ||
        pitRooms.indexOf(suggestedRoom) > -1
    ) {
        suggestedRoom = Math.ceil(Math.random() * 30);
    }
    pitRooms.push(suggestedRoom);
    }
    for (let i = 0; i < 10; i++) {
    while (
        suggestedRoom == currentPlayerRoom ||
        batRooms.indexOf(suggestedRoom) > -1 ||
        pitRooms.indexOf(suggestedRoom) > -1 ||
        chestRooms.indexOf(suggestedRoom) > -1
    ) {
        suggestedRoom = Math.ceil(Math.random() * 30);
    }
    chestRooms.push(suggestedRoom);
    }
    console.log(pitRooms);
    console.log(chestRooms);
        
    const playerLocation = player.location;
    for (let i = 1; i <= 30; i++) {
        world.sendMessage("Room: " + i.toString());
        for (let j = 1; j <= 6; j++) {
            if (lockedRooms[i][j] == false) {
                world.sendMessage();
            }
        }
        
    }
    for (let i = 1; i <= 6; i++) {
        
        world.sendMessage(lockedRooms[30][i].toString());
    }
    
}

var arenasCoordinates = [
    [60, 60, 60, 100, 100, 100],
    [],
    [],
    []
]

function generateArena (startx, starty, startz, endx, endy, endz) {
    // create the arena, grab a templete from the current arena, and grab a templete from the  
    world.sendMessage("generating");
    var block = world.getDimension("overworld").getBlock({x: 0, y : 0, z : 0});
    world.sendMessage("generating");
   // var tags = block.getTags();

   // world.sendMessage(block.getTags());
    
   let y1 = -50;

    for (let x1 = 0; x1 < curMap.length; x1++) {
            for (let z1 = 0; z1 < curMap[x1].length; z1++) {
          // world.sendMessage("generated");
                // to generate the arena, we grab a block from the world, find a type we want to block to be, and set its permutation to that block.
                var newBlock = world.getDimension ("overworld").getBlock({x: x1, y: y1, z: z1});
                const type = BlockPermutation.resolve(blockTypes[curMap[x1][z1]]);
               
                newBlock.setPermutation(type);
            }   
    }
    world.sendMessage("generated");
    // spawn mobs
}
// stubbed functions for now.
// will work on organizing into a generation class, a gamecontrol class, a wumpus class, and a player class.
function movePlayer () {
    // moves the player. Checks player location and moves player depending on where it is.
}
function InitalizeArena () {
// generates randomized arena and each node's preset room theme.
}
function CreateArena () {
// on entering a new room, generate the new room's theme.
}
function MoveIntoPit () {
// moves the player into pit.
}
function EscapePit () {
// moves the player out of the pit.
}
function BatCutscene () {
// starts the bat cutscene ingame, then moves the player to a random room.
}
function MoveWumpus () {
// moves the wumpus to an adjacent room.
}
function KillWumpus () {
// starts the endgame after the player defeats the wumpus.
}
function StartSecretTrivia () {
// when the player finds a secret discovery, starts a trivia for the player to earn buffs.
}
// the next three functions check if the player is near a bat, pit, or the wumpus.
function BatsAreClose () {

}
function PitsAreClose () {

}
function WumpusIsClose () {

}

/* Customisable map data */
let a = 10;
let b = 11;
let c = 12;
let d = 13;
let e = 14;
let f = 15;
let g = 16;
let h = 17;
let x = false;

function mainTick() {
    if (system.currentTick % 150 === 0) {
        world.sendMessage("world");
    }
    system.run(mainTick);
}
//system.run(initializeRooms);
system.run(generateArena(10, -50, 10, 40, -45, 40));
//system.run(mainTick);