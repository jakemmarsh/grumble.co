'use strict';

var $ = require('jquery');
require('jquery-scrollspy');

module.exports = function() {

  var $section = $('section.understand');
  var $imac = $('.understand-imac');
  var translation;

  $imac.scrollspy({

    min: $section.offset().top - 500,
    max: $section.offset().top + $section.height(),

    onTick: function(element, position) {
      translation = -(500 - (position.top - this.min));
      if ( translation > 0 ) {
        translation = 0;
      }

      $imac.css({
        '-webkit-transform': 'translateX(' + translation + 'px)',
        '-moz-transform':    'translateX(' + translation + 'px)',
        '-ms-transform':     'translateX(' + translation + 'px)',
        '-o-transform':      'translateX(' + translation + 'px)',
        'transform':         'translateX(' + translation + 'px)'
      });
    }

  });

};