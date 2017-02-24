'use strict'

var Q = require('q');

var failure = require('../../../helper/response').failure;
var success = require('../../../helper/response').success;

var Http = require('../../../helper/http');

var locals = {};
var reqBody = {};
var reqParam = {};

function getUserRequest(req, res, cb) {
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
        series: [{
            name: 'Total',
            data: [65, 59]
        }, {
            name: 'Attended',
            data: [28, 48] 
        }],
        categories: [
            "Leave", 
            "Travel"
        ],
        title: "User Requests Analysis"
    };
    return Q(data);
}

module.exports = {
    getUserRequest: getUserRequest
}