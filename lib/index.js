'use strict';

// =====================================================
// CONFIGURATION
// =====================================================

var browser  = require('open'),
    question = process.argv[2];


// =====================================================
// SEARCH
// =====================================================

exports.search = function(options) {
    var
        tab = options.votes ? 'votes' : 'relevance',
        url = 'http://stackoverflow.com/search?q=' + question + '&tab=' + tab;

    browser(url);
};


