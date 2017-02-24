'use strict'

var Q = require('q');

var failure = require('../../../helper/response').failure;
var success = require('../../../helper/response').success;

var Http = require('../../../helper/http');

var locals = {};
var reqBody = {};
var reqParam = {};

function getAlexRequest(req, res, cb) {
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
        title:"Alexa Requests Analysis",
        categories: [
            "Leave", 
            "Travel"
        ],
        data: [{
            name: 'Total',
            data: [100, 79]

        }, {
            name: 'Attended',
            data: [88, 48] 

        }]
    }; 
    return Q(data);
}

module.exports = {
    getAlexRequest: getAlexRequest
}