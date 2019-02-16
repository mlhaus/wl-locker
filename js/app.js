'use strict';
var app = app || {};

(function(module) {

  // module.showOnly = (selector) => {
  //   $('.main-section').hide();
  //   $(selector).show();
  // };

  let currentYear = (new Date()).getFullYear();
  $('#copyright-year').text(currentYear);

})(app);