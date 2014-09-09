'use strict';

var $ = require('jquery');

$(document).ready(function() {

  // load team members from data file
  // and create elements
  require('./team.js')();

  // per-section scroll logic
  // only load if not on phone or tablet
  if (window.matchMedia('(min-width: 992px)').matches) {
    require('./hero_unit.js')();
    require('./feedback_section.js')();
    require('./understand_section.js')();
    require('./team_section.js')();
  }

});