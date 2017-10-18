//This is my JS file//
var guestsNumberOne = 0;
var guestsNumberTwo = 0;
var guestsNumberThree = 0;
var guestsNumberFour = 0;

//JS for Room One//
function addGuestOne() {
  if ((guestsNumberOne < 3) && (window.event.keyCode == 13)) {
    guestsNumberOne++;
    var guestName = document.getElementById('addOne').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var element = document.getElementById('listOne');
    element.appendChild(newListItem);
    }
  }
function checkOutOne() {
  var number = document.getElementById('dropdownListOne').value;
  var parent = document.getElementById('listOne');
  var child = document.getElementsByTagName('li');
  parent.removeChild(parent.childNodes[number-1]);
  document.getElementById('dropdownListOne').selectedIndex = "0";
  guestsNumberOne--;
}

//JS for Room Two//
function addGuestTwo() {
  if ((guestsNumberTwo < 3) && (window.event.keyCode == 13)) {
    guestsNumberTwo++;
    var guestName = document.getElementById('addTwo').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var element = document.getElementById('listTwo');
    element.appendChild(newListItem);
  }
}
function checkOutTwo() {
  var number = document.getElementById('dropdownListTwo').value;
  var parent = document.getElementById('listTwo');
  var child = document.getElementsByTagName('li');
  parent.removeChild(parent.childNodes[number-1]);
  document.getElementById('dropdownListTwo').selectedIndex = "0";
  guestsNumberTwo--;
}

//JS for Room Three//
function addGuestThree() {
  if ((guestsNumberThree < 3) && (window.event.keyCode == 13)) {
    guestsNumberThree++;
    var guestName = document.getElementById('addThree').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var element = document.getElementById('listThree');
    element.appendChild(newListItem);
  }
}
function checkOutThree() {
  var number = document.getElementById('dropdownListThree').value;
  var parent = document.getElementById('listThree');
  var child = document.getElementsByTagName('li');
  parent.removeChild(parent.childNodes[number-1]);
  document.getElementById('dropdownListThree').selectedIndex = "0";
  guestsNumberThree--;
}

//JS for Room Four//
function addGuestFour() {
  if ((guestsNumberFour < 3) && (window.event.keyCode == 13)) {
    guestsNumberFour++;
    var guestName = document.getElementById('addFour').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var element = document.getElementById('listFour');
    element.appendChild(newListItem);
  }
}
function checkOutFour() {
  var number = document.getElementById('dropdownListFour').value;
  var parent = document.getElementById('listFour');
  var child = document.getElementsByTagName('li');
  parent.removeChild(parent.childNodes[number-1]);
  document.getElementById('dropdownListFour').selectedIndex = "0";
  guestsNumberThree--;
}