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

function getCookie(cname, returnVal) {
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
  return returnVal;
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
    } else if (String.fromCharCode(eventKeyName.keyCode) == "b") {
      buyShop();
    }
  }
};

