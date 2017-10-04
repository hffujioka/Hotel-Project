//This is my JS file//
var guestsNumberOne = 0;
var guestsNumberTwo = 0;
var guestsNumberThree = 0;
var guestsNumberFour = 0;

//JS for Room One//
function addGuestOne() {
  if ((guestsNumberOne<=2) && (window.event.keyCode == 13)) {
    guestsNumberOne++;
    var guestName = document.getElementById('addOne').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var position = document.getElementsByTagName('ol')[0];
    position.appendChild(newListItem);
    }
  }
function checkOutOne() {
  var removeGuest = document.getElementById('removeOne').value;
  var removeItem = document.getElementsByTagName('li')[removeGuest-1];
  var containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
  guestsNumberOne--;
}

//JS for Room Two//
function addGuestTwo() {
  if ((guestsNumberTwo <= 2) && (window.event.keyCode == 13)) {
    guestsNumberTwo++;
    var guestName = document.getElementById('addTwo').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var position = document.getElementsByTagName('ol')[1];
    position.appendChild(newListItem);
  }
}
function checkOutTwo() {
  var removeGuest = document.getElementById('removeTwo').value;
  var removeItem = document.getElementsByTagName('li')[removeGuest-1];
  var containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
  guestsNumberTwo--;
}

//JS for Room Three//
function addGuestThree() {
  if ((guestsNumberThree <= 2) && (window.event.keyCode == 13)) {
    guestsNumberThree++;
    var guestName = document.getElementById('addThree').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var position = document.getElementsByTagName('ol')[2];
    position.appendChild(newListItem);
  }
}
function checkOutThree() {
  var removeGuest = document.getElementById('removeThree').value;
  var removeItem = document.getElementsByTagName('li')[removeGuest-1];
  var containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
  guestsNumberThree--;
}

//JS for Room Four//
function addGuestFour() {
  if ((guestsNumberFour <= 2) && (window.event.keyCode == 13)) {
    guestsNumberFour++;
    var guestName = document.getElementById('addFour').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var position = document.getElementsByTagName('ol')[3];
    position.appendChild(newListItem);
  }
}
function checkOutFour() {
  var removeGuest = document.getElementById('removeFour').value;
  var removeItem = document.getElementsByTagName('li')[removeGuest-1];
  var containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
  guestsNumberFour--;
}