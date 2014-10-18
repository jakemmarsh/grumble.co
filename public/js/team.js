'use strict';

var $ = require('jquery');
var team = require('../data/team.js');

module.exports = function() {

  var $container = $('.team-members');
  var $nameContainer = $('.member-name');
  var $titleContainer = $('.member-title');
  var $bioContainer = $('.member-bio');
  var $memberElement;
  var $currentFocus;

  var focusMember = function(teamMember, $element) {
    if ( $currentFocus ) {
      $currentFocus.toggleClass('focused');
    }

    $element.toggleClass('focused');

    $nameContainer.text(teamMember.name);
    $titleContainer.text(teamMember.title);
    $bioContainer.text(teamMember.bio);

    $currentFocus = $element;
  };

  team.forEach(function(teamMember, index) {
    $memberElement = $('<div/>', {
      class: 'member grid-4'
    }).css('background-image', 'url(images/team/' + teamMember.name.toLowerCase() + '.png)');

    $memberElement.append($('<div/>').addClass('filter'));

    $memberElement.click(function() {
      focusMember(teamMember, $(this));
    });

    if ( index === 0 ) {
      focusMember(teamMember, $memberElement);
    }

    $memberElement.appendTo($container);
  });

};