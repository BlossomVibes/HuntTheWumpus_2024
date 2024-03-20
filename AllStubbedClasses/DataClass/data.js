var fly = {
  tile_size: 60,

  /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    color   [required] - any javascript compatible color variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */

  keys: [
    { id: 0, color: "#100", solid: 0 },
    { id: 1, color: "#977", solid: 0 },
    { id: 2, color: "#000", solid: 1, friction: { x: 0.9, y: 0.3 } },
    {
      id: 3,
      color: "#77F",
      friction: { x: 0.9, y: 0.9 },
      gravity: { x: 0, y: 0.1 },
      jump: 1,
      fore: 1,
    },
    { id: 4, color: "#d0a", jump: 1 },
    { id: 5, color: "#d0a", solid: 1, bounce: 1.2 },
    { id: 6, color: "#001122", solid: 1, bounce: 0 },
    { id: 7, color: "#70F", solid: 0, script: "change_color" },
    { id: 8, color: "#0099ff", solid: 0, script: "next_level" },
    { id: 9, color: "#0099ff", solid: 0, script: "top" },
    { id: 10, color: "#0099ff", solid: 0, script: "top_left" },
    { id: 11, color: "#0099ff", solid: 0, script: "top_right" },
    { id: 12, color: "#0099ff", solid: 0, script: "bottom" },
    { id: 13, color: "#0099ff", solid: 0, script: "bottom_left" },
    { id: 14, color: "#0099ff", solid: 0, script: "bottom_right" },
    { id: 15, color: "#884400", solid: 0, script: "chest" },
    { id: 16, color: "#ff0", solid: 0, script: "shop" }
  ],

  /* An array representing the map tiles. Each number corresponds to a key */
  data: [
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 9, 9, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, a, 1, 1, 1, 1, 1, 1, b, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, a, 1, 1, 1, 1, 1, 1, b, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0],
    [6, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 6, 6],
    [6, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 6, 6],
    [0, 0, 0, 0, 0, 6, d, 1, 1, f, f, 1, 1, e, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, d, 1, 1, 1, 1, 1, 1, e, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, c, c, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
  ],

  /* Default gravity of the map */

  gravity: {
    x: 0,
    y: 0,
  },

  fly: true,

  /* Velocity limits */

  vel_limit: {
    x: 5,
    y: 5,
  },

  /* Movement speed when the key is pressed */

  movement_speed: {
    jump: 9,
    left: 1,
    right: 1,
  },

  /* The coordinates at which the player spawns and the color of the player */

  player: {
    x: 9.5,
    y: 10,
    color: "#FF9900",
  },

  /* scripts refered to by the "script" variable in the tile keys */

  scripts: {
    /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
    change_color:
      'game.player.color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
    /* you could load a new map variable here */
    next_level: "",
    top: 'currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[0];reset(9.5, 14.4);',
    top_right:
      'currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[1];reset(6.6, 12.5);',
    bottom_right:
      'currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[2];reset(6.6, 7.5);',
    bottom:
      'currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[3];reset(9.5, 6.6);',
    bottom_left:
      'currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[4];reset(12.4, 7.5);',
    top_left:
      'currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[5];reset(12.4, 12.5);',
    chest: "newChest()",
    shop: "buyShop()"
  },
};

var pit = {
    tile_size: 45,

    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    color   [required] - any javascript compatible color variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    
    keys: [
        { id: 0, color: "#000", solid: 0 },
    { id: 1, color: "#000", solid: 0},
    { id: 2, color: "#000", solid: 1, friction: {x: 0.9, y: 0.3} },
    {
      id: 3,
      color: "#77F",
      friction: { x: 0.9, y: 0.9 },
      gravity: { x: 0, y: 0.1 },
      jump: 1,
      fore: 1
    },
    { id: 4, color: "#d0a", jump: 1 },
    { id: 5, color: "#d0a", solid: 1, bounce: 1.2 },
    { id: 6, color: "#000", solid: 1, bounce: 0 },
    { id: 7, color: "#70F", solid: 0, script: "change_color" },
    { id: 8, color: "#0099ff", solid: 0, script: "next_level" },
    { id: 9, color: "#f00000", solid: 0, script: "death" },
    {id: 10,color: '#977',solid: 1},
    {id: 11,color: '#808',solid: 0,script: 'unlock'},
    {id: 12,color: '#977',solid: 0,script: 'lock'},
    {id: 13,color: '#977',solid: 0, script: 'fast'},
    {id: 14,color: '#F0F',solid: 0, script: 'superfast'},
    {id: 15,color: '#F0F',solid: 0, script: 'slow'},
    {id: 16,color: '#f00000',solid: 0, script: 'unlock'}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: [  
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,9,1,1,1,1,1,9,1,1,1,1,1,1,2,1,1,1,1,1,1,9,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,1,2,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,9,1,1,2,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,9,1,1,9,1,1,9,1,1,1,1,a,1,c,1,1,1,1,1,1,9,1,1,9,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,a,1,c,1,1,9,9,9,9,9,9,9,9,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,b,1,1,1,1,1,2,2,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,9,2,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,d,d,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,2,2,2,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,9,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,9,2,2,9,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,9,9,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,9,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,1,2,2,2,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9,2,9,1,1,1,1,1,1,9,1,1,1,1,1,9,9,1,1,1,1,1,2],
      [2,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9,2,9,1,1,1,2,2,2,2,2,2,1,1,1,9,9,1,1,1,1,1,2],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,2],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,2,2,2,2,2,2]
      
    ],

    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.3
    },
  
    fly: x,
    
    /* Velocity limits */

    vel_limit: {
        x: 40,
        y: 20
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 12,
        left: 1,
        right: 1
    },
    
    /* The coordinates at which the player spawns and the color of the player */

    player: {
        x: 1.5,
        y: 5,
        color: '#FF9900'
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        change_color: 'game.player.color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
        /* you could load a new map variable here */
        next_level: 'alert("You successfully escaped the pit"); alert("At the pit\'s exit, you find 20 Amber Runes and 2 arrows that must have been left by a previous hunter. Nice!"); currentPlayerRoom = startingRoom; reset(9.5, 10); gold+=20; totalArrows+=2; gravity = 0; platform = true; updateRoom();',
        death: 'confirm("You touched lava and burned to ashes! The wumpus successfully turned you into his meal."); death()',
        unlock: 'game.current_map.keys[10].solid = 0;game.current_map.keys[10].color = "#F0F";',
        lock: 'game.current_map.keys[10].solid = 1;game.current_map.keys[10].color = "#000";',
        fast: 'alert("So I see you\'ve discovered the bottomless pit of the wumpus."); alert("Well, now that you\'re here, it\'s not going to be an easy way out."); alert("In order to continue your run, you must climb out of the bit, but if you touch lava once, it\'s game over. Good luck!"); game.current_map.keys[1].color = "#977";',
      superfast: 'game.current_map.gravity.x = 2.6',
        slow: 'game.current_map.gravity.x = 0.5',
      no_exit: 'alert("This is a challenge! You can\'t complete it so easy. (Hint: You have to go back)"); game.current_map.keys[17].solid = 0',
    }
};

function death(){
   document.write('<button onclick="window.location = window.location">Replay</button><br><br>Score: '+(parseInt(gold)+parseInt(gRunes)*30+parseInt(totalArrows)*6))
}
