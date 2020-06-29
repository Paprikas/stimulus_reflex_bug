// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "controllers"


document.addEventListener('stimulus-reflex:before', e => {
  alert('before');
});
document.addEventListener('stimulus-reflex:success', e => {
  alert('success');
});
document.addEventListener('stimulus-reflex:error', e => {
  alert('error');
});
document.addEventListener('stimulus-reflex:halted', e => {
  alert('halted');
});
document.addEventListener('stimulus-reflex:after', e => {
  alert('after');
});