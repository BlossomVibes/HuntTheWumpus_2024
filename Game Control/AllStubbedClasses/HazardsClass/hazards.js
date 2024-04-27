function reset(x, y){
  game.current_map.player.x = x;
  game.current_map.player.y = y;
  game.camera.x = 0;
  game.camera.y = 100;
  game.load_map(fly);
  if (x != 9.5 || y != 10) {
    animation = false;
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
    animation = true;
    fly.keys[9].color = "#0099ff";
    fly.keys[a].color = "#0099ff";
    fly.keys[b].color = "#0099ff";
    fly.keys[c].color = "#0099ff";
    fly.keys[d].color = "#0099ff";
    fly.keys[e].color = "#0099ff";
  }, 600);
  if (currentPlayerRoom == wumpusRoom) {
    alert("You walked into the same room as the Wumpus");
    alert("You have been attacked and consumed by the Wumpus!");
    death();
  } else if (!wumpusIsClose()) {
    text("", document.getElementById("wumpus"));

} else {
    setTimeout(function h() {
      text("<h2>You smell a wumpus</h2>", document.getElementById("wumpus"));
    }, 1000);
  }

  if (inBatRoom()) {
      text(
        "<h2>Carried away by bats!</h2>",
        document.getElementById("bat")
      );
    setTimeout(function h() {
      text(
        "<h2></h2>",
        document.getElementById("bat")
      );
    }, 950);
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
    game.load_map(pit);
    gravity = 0.3;
    platform = false;
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
