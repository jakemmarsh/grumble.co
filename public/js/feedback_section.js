'use strict';

var $ = require('jquery');
require('jquery-scrollspy');

module.exports = function() {

  var $section = $('section.feedback');
  var $iphone = $('.feedback-iphone');
  var translation;

  $iphone.scrollspy({

    min: $section.offset().top - 400,
    max: $section.offset().top + $section.height(),

    onTick: function(element, position) {
      translation = 300 - (position.top - this.min);
      if ( translation < 0 ) {
        translation = 0;
      }

      $iphone.css({
        '-webkit-transform': 'translateX(' + translation + 'px)',
        '-moz-transform':    'translateX(' + translation + 'px)',
        '-ms-transform':     'translateX(' + translation + 'px)',
        '-o-transform':      'translateX(' + translation + 'px)',
        'transform':         'translateX(' + translation + 'px)'
      });
    }

  });

};