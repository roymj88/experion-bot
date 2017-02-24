'use strict'

var Q = require('q');

var Leave  = require('./../../models/Leave')
var Travel  = require('./../../models/Travel')

var failure = require('../../helper/response').failure;
var success = require('../../helper/response').success;

var Http = require('../../helper/http');

var leaveService = require('./leaveService');
var travelService = require('./travelService');

var locals = {};
var reqBody = {};
var reqParam = {};

var hasOwnProperty = Object.prototype.hasOwnProperty;

function collectUserChatInfo(req, res, cb) {
    locals = req;

    Q.fcall(validate)
        .then(checkIntentName)
        .then(function(output) {
            return cb({
                speech: "Your request has been submitted successfully",
                "messages": [{
                    "type": 0,
                    "speech": "Your request has been submitted successfully"
                }]
            }, success('Successfully posted your request'), Http.EVERYTHING_IS_OK);
		})
        .fail(function(reasone){
            return cb(failure(reasone), Http.FORBIDDEN)
        })
        .done()
}

function validate() {
    reqBody = locals.body;

    if(isEmpty(reqBody.result.metadata)) 
        throw new Error('No data found')

    if(!reqBody.result.metadata.intentName)
        throw new Error('No intent found')
}

function checkIntentName() {
    reqBody = locals.body;
	var userIntent = reqBody.result.metadata.intentName;
    var userEntity = reqBody.result.parameters;
    var conversationCompleteStatus = reqBody.result.actionIncomplete;

    var deferred = Q.defer();
    if(conversationCompleteStatus != true 
        && isEmpty(userIntent) != true 
            && isEmpty(userEntity) != true) {
       
        if(userIntent == "Leave Request") {
            leaveService.validateLeaveRequest(reqBody, function(result){
                if(result) {
                    leaveService.saveLeaveRequestData(reqBody, function(result){
                        deferred.resolve(result);
                    });
                }
            });
        }

        if(userIntent == "Travel Request") {
            travelService.validateTravelRequest(reqBody, function(result){
                if(result) {
                    travelService.saveTravelData(reqBody, function(result){
                        deferred.resolve(result);
                    });
                }
            });
        }
    }
    return deferred.promise;
}

function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;

    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

module.exports = {
    collectUserChatInfo: collectUserChatInfo
}