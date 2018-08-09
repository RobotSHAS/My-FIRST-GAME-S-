document.getElementById('CURRENT_ORE').innerHTML = localStorage.getItem('SAVED_CURRENT');

document.getElementById('BUTTON_mine').onclick = function() {
  var counter = parseInt( localStorage.getItem('SAVED_CURRENT') );

  counter = counter + 1;
  document.getElementById('CURRENT_ORE').innerHTML = counter;

localStorage.setItem('SAVED_CURRENT', counter);
};

// reset button code
// reset button resets the value to 0 and displays 0 for the ore number
document.getElementById('BUTTON_reset').onclick = function() {
localStorage.setItem('SAVED_CURRENT', 0);
  document.getElementById('CURRENT_ORE').innerHTML = 0;
};

// donate button code
document.getElementById('BUTTON_donate').onclick = function() {
  var toDonate = parseInt( localStorage.getItem('SAVED_CURRENT') );
var old = parseInt( localStorage.getItem('SAVED_DONATED') );
var newDonate = old + toDonate;

localStorage.setItem('SAVED_DONATED', newDonate);
localStorage.setItem('SAVED_CURRENT', 0);

document.getElementById('DONATED_ORE').innerHTML = newDonate;
document.getElementById('CURRENT_ORE').innerHTML = 0;

};
