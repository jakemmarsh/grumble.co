'use strict';

var $ = require('jquery');
var team = require('../data/team.js');

$(document).ready(function() {

  var $container = $('.team-members');
  var $nameContainer = $('.member-name');
  var $bioContainer = $('.member-bio');
  var $memberElement;
  var $currentFocus;

  var focusMember = function(teamMember, $element) {
    $nameContainer.text(teamMember.name);
    $bioContainer.text(teamMember.bio);
    $currentFocus = $element;
  };

  team.forEach(function(teamMember, index) {
    var classes  = 'member grid-4';
    if ( index === 0 ) {
      classes += ' active';
      focusMember(teamMember);
    }

    $memberElement = $('<div/>', {
      class: classes
    });

    if ( index === 0 ) {
      $currentFocus = $memberElement;
    }

    $memberElement.click(function() {
      $currentFocus.toggleClass('active');
      $(this).toggleClass('active');
      focusMember(teamMember, $(this));
    });

    $memberElement.appendTo($container);
  });

});