'use strict';

var $ = require('jquery');

var sectionScripts = [
  require('./hero_unit.js'),
  require('./feedback_section.js'),
  require('./understand_section.js'),
  require('./team_section.js')
];

var loadScripts = function(scripts) {
  scripts.forEach(function(script) {
    script();
  });
};

$(document).ready(function() {

  // load team members from data file and create elements
  require('./team.js')();

  // conditionally load section-specific scripts
  if ( window.matchMedia('(min-width: 992px)').matches ) {
    loadScripts(sectionScripts);
  }

});

$(window).resize(function() {

  // conditionally load section-specific scripts
  if ( window.matchMedia('(min-width: 992px)').matches ) {
    loadScripts(sectionScripts);
  }

});