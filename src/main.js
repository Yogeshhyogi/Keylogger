'use strict';



const Keyboard = require('./index');

const keycodes = require('./keycodes');



const keyboard = new Keyboard();



// Listen for key events

keyboard.on('keydown', event => {

  const keyId = keycodes[event.keyCode];

  console.log(`Key Pressed: ${keyId}`);

});



// Handle errors

keyboard.on('error', err => {

  console.error(`Error: ${err.message}`);

});