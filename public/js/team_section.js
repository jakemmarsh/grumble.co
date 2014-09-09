'use strict';

var $ = require('jquery');
require('jquery-scrollspy');

module.exports = function() {

  var $section = $('section.team');
  var $container = $('.team-members');

  $container.scrollspy({

    min: $section.offset().top,
    max: $section.offset().top + $section.height(),

    onEnter: function() {
      console.log('inside team section');
    }

  });

};