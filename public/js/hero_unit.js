'use strict';

var $ = require('jquery');
require('jquery-scrollspy');

module.exports = function() {

  var $section = $('section.hero');
  var $phones = $('.hero-iphones');
  var opacity = 1;
  var scale = 1;

  $phones.scrollspy({

    min: 0,
    max: $section.offset().top + $section.height(),

    onTick: function(element, position) {
      opacity = 1 - (position.top - this.min)/800;
      scale = 1 - (position.top - this.min)/1500;

      console.log(opacity, scale);

      $phones.css({
        'opacity': opacity,
        '-webkit-transform': 'scale(' + scale + ')',
        '-moz-transform': 'scale(' + scale + ')',
        '-o-transform': 'scale(' + scale + ')',
        '-ms-transform': 'scale(' + scale + ')',
        'transform': 'scale(' + scale + ')'
      });
    },

  });

};