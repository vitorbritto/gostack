'use strict';

// =====================================================
// CONFIGURATION
// =====================================================

var browser  = require('open'),
    question = process.argv.slice(2).join('+');


// =====================================================
// SEARCH
// =====================================================

exports.search = function() {
    var url = 'http://stackoverflow.com/search?q=' + question;
    browser(url);
};


