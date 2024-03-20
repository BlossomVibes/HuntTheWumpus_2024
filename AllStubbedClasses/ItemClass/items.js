
if (chestRooms.indexOf(parseInt(currentPlayerRoom)) > -1) {
  console.log("Chest Room");
  fly.keys[f].color = "#884400";
  fly.keys[f].script = "chest";
} else {
  fly.keys[f].color = "#977";
  fly.keys[f].script = "";
}

if (parseInt(currentPlayerRoom) == parseInt(shopRoom)) {
  console.log("Shop Room");
  fly.keys[g].color = "#FF0";
  fly.keys[g].script = "shop";
} else {
  fly.keys[g].color = "#977";
  fly.keys[g].script = "";
}

function updateRoom(x) {
  if (x == "hide") {
    document.getElementById("room").innerHTML = "???";
    document.getElementById("wRoom").innerHTML = wumpusRoom;
    document.getElementById("sRoom").innerHTML = shopRoom;
    document.getElementById("arrows").innerHTML = totalArrows;
    document.getElementById("gold").innerHTML = gold;
  } else {
    document.getElementById("room").innerHTML = currentPlayerRoom;
    document.getElementById("wRoom").innerHTML = wumpusRoom;
    document.getElementById("sRoom").innerHTML = shopRoom;
    document.getElementById("arrows").innerHTML = totalArrows;
    document.getElementById("gold").innerHTML = gold;
  }
  if (chestRooms.indexOf(parseInt(currentPlayerRoom)) > -1) {
      console.log("Chest Room");
      fly.keys[f].color = "#884400";
      fly.keys[f].script = "chest";
    } else {
      console.log(
        chestRooms +
          ", " +
          currentPlayerRoom +
          ", " +
          chestRooms.indexOf(parseInt(currentPlayerRoom))
      );
      fly.keys[f].color = "#977";
      fly.keys[f].script = "";
    }
  
  
if (parseInt(currentPlayerRoom) == parseInt(shopRoom)) {
  console.log("Shop Room");
  fly.keys[g].color = "#FF0";
  fly.keys[g].script = "shop";
} else {
  fly.keys[g].color = "#977";
  fly.keys[g].script = "";
}
}
