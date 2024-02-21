var currentPlayerRoom = Math.ceil(Math.random() * 30);
var wumpusRoom = Math.ceil(Math.random() * 30);
var totalArrows = 0;
var gold = 0;
var batRooms = [];
var pitRooms = [];
var chestRooms = [];
var chestOpenedRooms = [];
console.log(wumpusRoom);
var adjRooms = [
  "type: JSON",
  "21 22 2 11 10 30",
  "22 3 13 12 11 1",
  "23 24 4 13 2 22",
  "24 5 15 14 13 3",
  "25 26 6 15 4 24",
  "26 7 17 16 15 5",
  "27 28 8 17 6 26",
  "28 9 19 18 17 7",
  "29 30 10 19 8 28",
  "30 1 11 20 19 9",
  "1 2 12 21 20 10",
  "2 13 23 22 21 11",
  "3 4 14 23 12 2",
  "4 15 25 24 23 13",
  "5 6 16 25 14 4",
  "6 17 27 26 25 15",
  "7 8 18 27 16 6",
  "8 19 29 28 27 17",
  "9 10 20 29 18 8",
  "10 11 21 30 29 19",
  "11 12 22 1 30 20",
  "12 23 3 2 1 21",
  "13 14 24 3 22 12",
  "14 25 5 4 3 23",
  "15 16 26 5 24 14",
  "16 27 7 6 5 25",
  "17 18 28 7 26 16",
  "18 29 9 8 7 27",
  "19 20 30 9 28 18",
  "20 21 1 10 9 29",
];
var lockedRooms = [
  "type: JSON",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
var suggestedRoom = currentPlayerRoom;
while (currentPlayerRoom == wumpusRoom) {
  wumpusRoom = Math.ceil(Math.random() * 30);
}
for (let i = 1; i <= 30; i++) {
  if (lockedRooms[i] != "") {
    if (lockedRooms[i].split("x").length != 3) {
      for (let j = 0; j < 6; j++) {
        if (
          lockedRooms[parseInt(adjRooms[i].split(" ")[j])].split("x").length !=
          3
        ) {
          if (Math.random() > 0.7) {
            lockedRooms[i] = lockedRooms[i] + adjRooms[i].split(" ")[j] + "x";
            lockedRooms[j] = lockedRooms[j] + i + "x";
            //k++;
          }
        }
      }
    }
  } else {
    let k = 0;
    for (let j = 0; j < 6; j++) {
      if (k < 2) {
        if (Math.random() > 0.35) {
          lockedRooms[i] = lockedRooms[i] + adjRooms[i].split(" ")[j] + "x";
          k++;
        }
      }
    }
  }
}
console.log(lockedRooms);
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
    top: 'if(confirm("Move to the room above?")){currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[0];reset(9.5, 14.4);} else{reset(9.5, 10)}',
    top_right:
      'if(confirm("Move to the room top-right?")){currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[1];reset(6.6, 12.5);} else{reset(9.5, 10)}',
    bottom_right:
      'if(confirm("Move to the room bottom-right?")){currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[2];reset(6.6, 7.5);}else{reset(9.5, 10)}',
    bottom:
      'if(confirm("Move to the room below?")){currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[3];reset(9.5, 6.6);}else{reset(9.5, 10)}',
    bottom_left:
      'if(confirm("Move to the room bottom-left?")){currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[4];reset(12.4, 7.5);}else{reset(9.5, 10)}',
    top_left:
      'if(confirm("Move to the room top-left?")){currentPlayerRoom = adjRooms[currentPlayerRoom].split(" ")[5];reset(12.4, 12.5);}else{reset(9.5, 10)}',
    chest: "",
  },
};

/* Clarity engine */

var Clarity = function () {
  this.alert_errors = false;
  this.log_info = true;
  this.tile_size = 16;
  this.limit_viewport = false;
  this.jump_switch = 0;

  this.viewport = {
    x: 200,
    y: 200,
  };

  this.camera = {
    x: 0,
    y: 0,
  };

  this.key = {
    left: false,
    right: false,
    up: false,
    down: false,
  };

  this.player = {
    loc: {
      x: 0,
      y: 0,
    },

    vel: {
      x: 0,
      y: 0,
    },

    can_jump: true,
  };

  window.onkeydown = this.keydown.bind(this);
  window.onkeyup = this.keyup.bind(this);
};

Clarity.prototype.error = function (message) {
  if (this.alert_errors) alert(message);
  if (this.log_info) console.log(message);
};

Clarity.prototype.log = function (message) {
  if (this.log_info) console.log(message);
};

Clarity.prototype.set_viewport = function (x, y) {
  this.viewport.x = x;
  this.viewport.y = y;
};

Clarity.prototype.keydown = function (e) {
  var _this = this;

  switch (e.keyCode) {
    case 37:
      _this.key.left = true;
      break;
    case 38:
      _this.key.up = true;
      break;
    case 39:
      _this.key.right = true;
      break;
    case 40:
      _this.key.down = true;
      break;
  }
};

Clarity.prototype.keyup = function (e) {
  var _this = this;

  switch (e.keyCode) {
    case 37:
      _this.key.left = false;
      break;
    case 38:
      _this.key.up = false;
      break;
    case 39:
      _this.key.right = false;
      break;
    case 40:
      _this.key.down = false;
      break;
  }
};

Clarity.prototype.load_map = function (map) {
  this.key.down = true;
  this.key.up = true;
  this.key.right = true;
  this.key.left = true;

  this.key.down = false;
  this.key.up = false;
  this.key.right = false;
  this.key.left = false;

  if (
    typeof map === "undefined" ||
    typeof map.data === "undefined" ||
    typeof map.keys === "undefined"
  ) {
    this.error("Error: Invalid map data!");

    return false;
  }

  this.current_map = map;

  this.current_map.background = map.background || "#333";
  this.current_map.gravity = map.gravity || { x: 0, y: 0 };
  this.tile_size = map.tile_size || 16;

  var _this = this;

  this.current_map.width = 0;
  this.current_map.height = 0;

  map.keys.forEach(function (key) {
    map.data.forEach(function (row, y) {
      _this.current_map.height = Math.max(_this.current_map.height, y);

      row.forEach(function (tile, x) {
        _this.current_map.width = Math.max(_this.current_map.width, x);

        if (tile == key.id) _this.current_map.data[y][x] = key;
      });
    });
  });

  this.current_map.width_p = this.current_map.width * this.tile_size;
  this.current_map.height_p = this.current_map.height * this.tile_size;

  this.player.loc.x = map.player.x * this.tile_size || 0;
  this.player.loc.y = map.player.y * this.tile_size || 0;
  this.player.color = map.player.color || "#000";

  this.key.left = false;
  this.key.up = false;
  this.key.right = false;

  this.camera = {
    x: 0,
    y: 0,
  };

  this.player.vel = {
    x: 0,
    y: 0,
  };

  this.log("Successfully loaded map data.");

  return true;
};

Clarity.prototype.get_tile = function (x, y) {
  return this.current_map.data[y] && this.current_map.data[y][x]
    ? this.current_map.data[y][x]
    : 0;
};

Clarity.prototype.draw_tile = function (x, y, tile, context) {
  if (!tile || !tile.color) return;

  context.fillStyle = tile.color;
  context.fillRect(x, y, this.tile_size, this.tile_size);
};

Clarity.prototype.draw_map = function (context, fore) {
  for (var y = 0; y < this.current_map.data.length; y++) {
    for (var x = 0; x < this.current_map.data[y].length; x++) {
      if (
        (!fore && !this.current_map.data[y][x].fore) ||
        (fore && this.current_map.data[y][x].fore)
      ) {
        var t_x = x * this.tile_size - this.camera.x;
        var t_y = y * this.tile_size - this.camera.y;

        if (
          t_x < -this.tile_size ||
          t_y < -this.tile_size ||
          t_x > this.viewport.x ||
          t_y > this.viewport.y
        )
          continue;

        this.draw_tile(t_x, t_y, this.current_map.data[y][x], context);
      }
    }
  }

  if (!fore) this.draw_map(context, true);
};

Clarity.prototype.move_player = function () {
  var tX = this.player.loc.x + this.player.vel.x;
  var tY = this.player.loc.y + this.player.vel.y;

  var offset = Math.round(this.tile_size / 2 - 1);

  var tile = this.get_tile(
    Math.round(this.player.loc.x / this.tile_size),
    Math.round(this.player.loc.y / this.tile_size)
  );

  if (tile.gravity) {
    this.player.vel.x += tile.gravity.x;
    this.player.vel.y += tile.gravity.y;
  } else {
    this.player.vel.x += this.current_map.gravity.x;
    this.player.vel.y += this.current_map.gravity.y;
  }

  if (tile.friction) {
    this.player.vel.x *= tile.friction.x;
    this.player.vel.y *= tile.friction.y;
  }

  if (this.key.down == true) {
    this.current_map.gravity.y = 1;
  } else {
    this.current_map.gravity.y = 0;
  }

  if (!this.key.up && !this.key.down) {
    this.player.vel.y *= 0.9;
  }

  var t_y_up = Math.floor(tY / this.tile_size);
  var t_y_down = Math.ceil(tY / this.tile_size);
  var y_near1 = Math.round((this.player.loc.y - offset) / this.tile_size);
  var y_near2 = Math.round((this.player.loc.y + offset) / this.tile_size);

  var t_x_left = Math.floor(tX / this.tile_size);
  var t_x_right = Math.ceil(tX / this.tile_size);
  var x_near1 = Math.round((this.player.loc.x - offset) / this.tile_size);
  var x_near2 = Math.round((this.player.loc.x + offset) / this.tile_size);

  var top1 = this.get_tile(x_near1, t_y_up);
  var top2 = this.get_tile(x_near2, t_y_up);
  var bottom1 = this.get_tile(x_near1, t_y_down);
  var bottom2 = this.get_tile(x_near2, t_y_down);
  var left1 = this.get_tile(t_x_left, y_near1);
  var left2 = this.get_tile(t_x_left, y_near2);
  var right1 = this.get_tile(t_x_right, y_near1);
  var right2 = this.get_tile(t_x_right, y_near2);

  if (tile.jump && this.jump_switch > 15) {
    this.player.can_jump = true;

    this.jump_switch = 0;
  } else this.jump_switch++;

  this.player.vel.x = Math.min(
    Math.max(this.player.vel.x, -this.current_map.vel_limit.x),
    this.current_map.vel_limit.x
  );
  this.player.vel.y = Math.min(
    Math.max(this.player.vel.y, -this.current_map.vel_limit.y),
    this.current_map.vel_limit.y
  );

  this.player.loc.x += this.player.vel.x;
  this.player.loc.y += this.player.vel.y;

  this.player.vel.x *= 0.9;

  if (left1.solid || left2.solid || right1.solid || right2.solid) {
    /* fix overlap */

    while (
      this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near1)
        .solid ||
      this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near2)
        .solid
    )
      this.player.loc.x += 0.1;

    while (
      this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near1)
        .solid ||
      this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near2)
        .solid
    )
      this.player.loc.x -= 0.1;

    /* tile bounce */

    var bounce = 0;

    if (left1.solid && left1.bounce > bounce) bounce = left1.bounce;
    if (left2.solid && left2.bounce > bounce) bounce = left2.bounce;
    if (right1.solid && right1.bounce > bounce) bounce = right1.bounce;
    if (right2.solid && right2.bounce > bounce) bounce = right2.bounce;

    this.player.vel.x *= -bounce || 0;
  }

  if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {
    /* fix overlap */

    while (
      this.get_tile(x_near1, Math.floor(this.player.loc.y / this.tile_size))
        .solid ||
      this.get_tile(x_near2, Math.floor(this.player.loc.y / this.tile_size))
        .solid
    )
      this.player.loc.y += 0.1;

    while (
      this.get_tile(x_near1, Math.ceil(this.player.loc.y / this.tile_size))
        .solid ||
      this.get_tile(x_near2, Math.ceil(this.player.loc.y / this.tile_size))
        .solid
    )
      this.player.loc.y -= 0.1;

    /* tile bounce */

    var bounce = 0;

    if (top1.solid && top1.bounce > bounce) bounce = top1.bounce;
    if (top2.solid && top2.bounce > bounce) bounce = top2.bounce;
    if (bottom1.solid && bottom1.bounce > bounce) bounce = bottom1.bounce;
    if (bottom2.solid && bottom2.bounce > bounce) bounce = bottom2.bounce;

    this.player.vel.y *= -bounce || 0;

    if ((bottom1.solid || bottom2.solid) && !tile.jump) {
      this.player.on_floor = true;
      this.player.can_jump = true;
    }
  }

  // adjust camera

  var c_x = Math.round(this.player.loc.x - this.viewport.x / 2);
  var c_y = Math.round(this.player.loc.y - this.viewport.y / 2);
  var x_dif = Math.abs(c_x - this.camera.x);
  var y_dif = Math.abs(c_y - this.camera.y);

  if (x_dif > 5) {
    var mag = Math.round(Math.max(1, x_dif * 0.1));

    if (c_x != this.camera.x) {
      this.camera.x += c_x > this.camera.x ? mag : -mag;

      if (this.limit_viewport) {
        this.camera.x = Math.min(
          this.current_map.width_p - this.viewport.x + this.tile_size,
          this.camera.x
        );

        this.camera.x = Math.max(0, this.camera.x);
      }
    }
  }

  if (y_dif > 5) {
    var mag = Math.round(Math.max(1, y_dif * 0.1));

    if (c_y != this.camera.y) {
      this.camera.y += c_y > this.camera.y ? mag : -mag;

      if (this.limit_viewport) {
        this.camera.y = Math.min(
          this.current_map.height_p - this.viewport.y + this.tile_size,
          this.camera.y
        );

        this.camera.y = Math.max(0, this.camera.y);
      }
    }
  }

  if (this.last_tile != tile.id && tile.script) {
    eval(this.current_map.scripts[tile.script]);
  }

  this.last_tile = tile.id;
};

Clarity.prototype.update_player = function () {
  if (this.key.left) {
    if (this.player.vel.x > -this.current_map.vel_limit.x)
      this.player.vel.x -= this.current_map.movement_speed.left;
  }

  if (this.key.up) {
    if (
      this.player.can_jump &&
      this.player.vel.y > -this.current_map.vel_limit.y
    ) {
      this.player.vel.y -= this.current_map.movement_speed.jump;
      this.player.can_jump = this.current_map.fly;
    }
  }

  if (this.key.right) {
    if (this.player.vel.x < this.current_map.vel_limit.x)
      this.player.vel.x += this.current_map.movement_speed.left;
  }

  this.move_player();
};

Clarity.prototype.draw_player = function (context) {
  context.fillStyle = this.player.color;

  context.beginPath();

  context.arc(
    this.player.loc.x + this.tile_size / 2 - this.camera.x,
    this.player.loc.y + this.tile_size / 2 - this.camera.y,
    this.tile_size / 2 - 1,
    0,
    Math.PI * 2
  );

  context.fill();
};

Clarity.prototype.update = function () {
  this.update_player();
};

Clarity.prototype.draw = function (context) {
  this.draw_map(context, false);
  this.draw_player(context);
};

/* Setup of the engine */

window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };

var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

var game = new Clarity();
game.set_viewport(canvas.width, canvas.height);
game.load_map(fly);

/* Limit the viewport to the confines of the map */
game.limit_viewport = true;

var Loop = function () {
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  game.update();
  game.draw(ctx);

  window.requestAnimFrame(Loop);
};

Loop();

if (chestRooms.indexOf(currentPlayerRoom) > -1) {
  console.log("Chest Room");
  fly.keys[f].color = "#884400";
  fly.keys[f].script = "chest";
} else {
  fly.keys[f].color = "#977";
  fly.keys[f].script = "";
}

function updateRoom(x) {
  if (x == "hide") {
    document.getElementById("room").innerHTML = "???";
    document.getElementById("wRoom").innerHTML = wumpusRoom;
    document.getElementById("arrows").innerHTML = totalArrows;
    document.getElementById("gold").innerHTML = gold;
  } else {
    document.getElementById("room").innerHTML = currentPlayerRoom;
    document.getElementById("wRoom").innerHTML = wumpusRoom;
    document.getElementById("arrows").innerHTML = totalArrows;
    document.getElementById("gold").innerHTML = gold;
  }
}

function reset(x, y) {
  game.current_map.player.x = x;
  game.current_map.player.y = y;
  game.camera.x = 0;
  game.camera.y = 100;
  game.load_map(fly);
  if (x != 9.5 || y != 10) {
    fly.keys[9].color = "#001122";
    fly.keys[a].color = "#001122";
    fly.keys[b].color = "#001122";
    fly.keys[c].color = "#001122";
    fly.keys[d].color = "#001122";
    fly.keys[e].color = "#001122";
    fly.keys[1].color = "#100";
    fly.keys[f].color = "#000";
  }
  updateRoom();
  setTimeout(function h() {
    fly.keys[9].color = "#0099ff";
    fly.keys[a].color = "#0099ff";
    fly.keys[b].color = "#0099ff";
    fly.keys[c].color = "#0099ff";
    fly.keys[d].color = "#0099ff";
    fly.keys[e].color = "#0099ff";
    fly.keys[1].color = "#977";
    if (chestRooms.indexOf(currentPlayerRoom) > -1) {
      console.log("Chest Room");
      fly.keys[f].color = "#884400";
      fly.keys[f].script = "chest";
    } else {
      console.log(
        chestRooms +
          ", " +
          currentPlayerRoom +
          ", " +
          chestRooms.indexOf(currentPlayerRoom)
      );
      fly.keys[f].color = "#977";
      fly.keys[f].script = "";
    }
  }, 600);

  if (currentPlayerRoom == wumpusRoom) {
    alert("You walked into the same room as the Wumpus");
    alert("You have been attacked and consumed by the Wumpus!");
    window.location = "about:blank";
  } else if (!wumpusIsClose()) {
    if (x != 9.5 || y != 10) {
      wumpusRoom = parseInt(
        adjRooms[wumpusRoom].split(" ")[Math.floor(Math.random() * 6)]
      );
      text("", document.getElementById("wumpus"));
    }
  } else {
    setTimeout(function h() {
      text("<h2>You smell a wumpus</h2>", document.getElementById("wumpus"));
    }, 1000);
  }

  if (inBatRoom()) {
    alert("Carried away by bats!");
    game.current_map.player.x = 9.5;
    game.current_map.player.y = 10;
    game.camera.x = 0;
    game.camera.y = 100;
    game.load_map(fly);
    currentPlayerRoom = Math.ceil(Math.random() * 30);
    updateRoom("hide");
  } else if (!batsAreClose()) {
    text("", document.getElementById("bat"));
  } else {
    setTimeout(function h() {
      text(
        "<h2>You hear the sound of flapping</h2>",
        document.getElementById("bat")
      );
    }, 1000);
  }

  if (inPitRoom()) {
    alert("You have fallen into a pit");
    alert(
      "This mock version doesn't support the 3d imaging required to recreate this animation so this is just a placeholder for the actual pit, so right now, you will just be teleported on top of the wumpus >:)"
    );
    alert("You walked into the same room as the Wumpus");
    alert("You have been attacked and consumed by the Wumpus!");
    window.location = "about:blank";
  } else if (!pitIsClose()) {
    text("", document.getElementById("pit"));
  } else {
    setTimeout(function h() {
      text("<h2>You feel a breeze</h2>", document.getElementById("pit"));
    }, 1000);
  }
}

function wumpusIsClose() {
  for (let i = 0; i < 6; i++) {
    if (parseInt(adjRooms[currentPlayerRoom].split(" ")[i]) == wumpusRoom) {
      return true;
    }
  }
  return false;
}

function inBatRoom() {
  for (let i = 0; i < 5; i++) {
    if (parseInt(batRooms[i]) == currentPlayerRoom) {
      return true;
    }
  }
  return false;
}

function batsAreClose() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      if (parseInt(adjRooms[currentPlayerRoom].split(" ")[i]) == batRooms[j]) {
        return true;
      }
    }
  }
  return false;
}

function pitIsClose() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      if (parseInt(adjRooms[currentPlayerRoom].split(" ")[i]) == pitRooms[j]) {
        return true;
      }
    }
  }
  return false;
}

function inPitRoom() {
  for (let i = 0; i < 3; i++) {
    if (parseInt(pitRooms[i]) == currentPlayerRoom) {
      return true;
    }
  }
  return false;
}

function text(x, y) {
  y.innerHTML = x;
}

function finish() {
  let done = getCookie("thechallenge");
  if (done == 0) {
    document.cookie = "thechallenge=false";
    document.cookie =
      "stars=" + parseInt(parseInt(getCookie("stars")) * 1 + 17);
    document.cookie =
      "skill=" + parseInt(parseInt(getCookie("skill")) * 1 + 15);
  } else {
    document.cookie =
      "skill=" + parseInt(parseInt(getCookie("skill")) * 1 + 15);
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}

document.onkeypress = function (eventKeyName) {
  eventKeyName = eventKeyName || window.event;
  if (eventKeyName.keyCode == 13) {
    console.log("You have pressed enter key");
  } else {
    if (String.fromCharCode(eventKeyName.keyCode) == "w") {
      shoot(0);
    } else if (String.fromCharCode(eventKeyName.keyCode) == "e") {
      shoot(1);
    } else if (String.fromCharCode(eventKeyName.keyCode) == "d") {
      shoot(2);
    } else if (String.fromCharCode(eventKeyName.keyCode) == "s") {
      shoot(3);
    } else if (String.fromCharCode(eventKeyName.keyCode) == "a") {
      shoot(4);
    } else if (String.fromCharCode(eventKeyName.keyCode) == "q") {
      shoot(5);
    }
  }
};

function shoot(x) {
  var room = adjRooms[currentPlayerRoom].split(" ")[x];
  if (totalArrows <= 0) {
    alert("Sorry, you do not possess any arrows");
  } else if (
    confirm("Are you sure you want to shoot into Room " + room + "?")
  ) {
    if (wumpusRoom == room) {
      alert("Congratulations! You have shot the wumpus and won the game!");
    } else {
      alert(
        "The arrow you shot did not hit the wumpus. As a result, the wumpus has moved to a different room"
      );
      wumpusRoom == (currentPlayerRoom + 15) % 30;
      totalArrows--;
      updateRoom();
    }
  }
}

reset(9.5, 10);
