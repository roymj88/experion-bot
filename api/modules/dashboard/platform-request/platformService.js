'use strict'

var Q = require('q');

var failure = require('../../../helper/response').failure;
var success = require('../../../helper/response').success;

var Http = require('../../../helper/http');

var locals = {};
var reqBody = {};
var reqParam = {};

function getPlatformRequest(req, res, cb) {
    locals = req;

    Q.fcall(getDummyData)
        .then(function(output) {
            return cb(success('Successfully loaded your data', Http.EVERYTHING_IS_OK, output));
		})
        .fail(function(reasone){
            return cb(failure(reasone), Http.FORBIDDEN)
        })
        .done()
}

function getDummyData() {
    var data = {
        title: "Platform Specific Request Analysis",
        data: [{
            name: 'FB Messenger',
            y: 56.33
        }, {
            name: 'Slack',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Twitter',
            y: 10.38
        }, {
            name: 'Telegram',
            y: 4.77
        }, {
            name: 'Skype',
            y: 0.91
        }]
    };
    return Q(data);
}

module.exports = {
    getPlatformRequest: getPlatformRequest
}