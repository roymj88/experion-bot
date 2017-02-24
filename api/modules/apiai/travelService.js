'use strict';

var Travel  = require('./../../models/Travel')
var Mail = require('./../../helper/mail');

function validateTravelRequest(locals, cb) {
    var entites = locals.result.parameters;

    if(!entites.date) 
        throw new Error('Destination date is required')
    
    if(!entites['geo-city'])
        throw new Error('Destination type is required')

    if(!entites.travelOptions)
        throw new Error('Travel options type is required')

    if(!entites.travelOptions.length === 0)
        throw new Error('Travel options is required')

    // if(!locals.originalRequest.source)
    //     throw new Error('Source is required')

    if(!locals.sessionId)
        throw new Error('sessionId is required')

    if(!locals.timestamp)
        throw new Error('Timestamp is required')
    
    if(!entites.name)
        throw new Error('Name type is required')
    
    if(!entites.email)
        throw new Error('Email type is required')

    cb(true);
}

function saveTravelData(locals, cb) {
    var entites = locals.result.parameters;

    var travel = new Travel();
    travel.source = "Trivandrum";
    travel.destination = entites['geo-city'];
    travel.destinationReachDate = entites.date;
    travel.travelOptions = entites.travelOptions;
    if(locals.hasOwnProperty("originalRequest")) {
        travel.requestSource = locals.originalRequest.source;
    } else {
        travel.requestSource = "Admin"
    }
    travel.requestDate = locals.timestamp;
    travel.sessionId = locals.sessionId;
    travel.name = entites.name;
    travel.email = entites.email;
    travel.save();
    
    sendRequestMail(travel, function(data) {
        cb(true);
    });
}

function sendRequestMail(travel, cb) {
    var mailOptions = {
		subject : "Travel Request",
		email: travel.email,
		name : travel.name,
        source : travel.source,
        destination : travel.destination,
        date : travel.destinationReachDate,
        travelOptions : travel.travelOptions
	};

	Mail.TravelRequestConfirmation(mailOptions, function(){
        cb(true);
	});
}

module.exports = {
    saveTravelData: saveTravelData,
    validateTravelRequest: validateTravelRequest
}