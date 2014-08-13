'use strict';

// =====================================================
// CONFIGURATION
// =====================================================

var browser  = require('open'),
    question = process.argv[2];


// =====================================================
// SEARCH
// =====================================================

exports.search = function() {
    var url = 'http://stackoverflow.com/search?q=' + question;
    browser(url);
};


