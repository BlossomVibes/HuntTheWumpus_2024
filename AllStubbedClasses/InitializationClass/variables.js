var currentPlayerRoom = getCookie("playerRoom", Math.ceil(Math.random() * 30));
var startingRoom = currentPlayerRoom
var wumpusRoom = Math.ceil(Math.random() * 30);
var totalArrows = getCookie("arrows",  0);
var gold = getCookie("gold", 0);
var gRunes = 0;
var batRooms = getCookie("batRooms", []);
var pitRooms = getCookie("pitRooms", []);
var chestRooms = getCookie("chestRooms", []);
var chestOpenedRooms = getCookie("chestOpenedRooms", []);
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
console.log(batRooms)
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

var shopRoom;
var hasBow = false;
var animation = true;
var dark = false;
var platform = true;
var gravity = 0;
while (
    suggestedRoom == currentPlayerRoom ||
    batRooms.indexOf(suggestedRoom) > -1 ||
    pitRooms.indexOf(suggestedRoom) > -1
  ) {
    suggestedRoom = Math.ceil(Math.random() * 30);
  }
  shopRoom = suggestedRoom
console.log("The shop is in Room "+shopRoom)
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
