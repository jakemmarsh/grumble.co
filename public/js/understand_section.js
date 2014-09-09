'use strict';

var $ = require('jquery');
require('jquery-scrollspy');

module.exports = function() {

  var $section = $('section.understand');
  var $imac = $('.understand-imac');

  $imac.scrollspy({

    min: $section.offset().top - 300,
    max: $section.offset().top + $section.height(),

    onEnter: function() {
      $imac.addClass('visible');
    }

    // onLeave: function() {
    //   $imac.removeClass('visible');
    // }

  });

};