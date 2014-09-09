'use strict';

var $ = require('jquery');
require('jquery-scrollspy');

module.exports = function() {

  var $section = $('section.understand');
  var $imac = $('.understand-imac');

  $imac.scrollspy({

    min: $section.offset().top,
    max: $section.offset().top + $section.height(),

    onEnter: function() {
      console.log('inside understand section');
    }

  });

};