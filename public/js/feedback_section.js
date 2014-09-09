'use strict';

var $ = require('jquery');
require('jquery-scrollspy');

module.exports = function() {

  var $section = $('section.feedback');
  var $iphone = $('.feedback-iphone');

  $iphone.scrollspy({

    min: $section.offset().top,
    max: $section.offset().top + $section.height(),

    onEnter: function() {
      console.log('inside feedback section');
    }

  });

};