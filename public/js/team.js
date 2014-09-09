'use strict';

var $ = require('jquery');
var team = require('../data/team.js');

module.exports = function() {

  var $container = $('.team-members');
  var $nameContainer = $('.member-name');
  var $bioContainer = $('.member-bio');
  var $memberElement;
  var $currentFocus;

  var focusMember = function(teamMember, $element) {
    if ( $currentFocus ) {
      $currentFocus.toggleClass('focused');
    }
    $element.toggleClass('focused');

    $nameContainer.text(teamMember.name);
    $bioContainer.text(teamMember.bio);

    $currentFocus = $element;
  };

  team.forEach(function(teamMember, index) {
    $memberElement = $('<div/>', {
      class: 'member grid-4'
    });

    $memberElement.click(function() {
      focusMember(teamMember, $(this));
    });

    if ( index === 0 ) {
      focusMember(teamMember, $memberElement);
    }

    $memberElement.appendTo($container);
  });

};