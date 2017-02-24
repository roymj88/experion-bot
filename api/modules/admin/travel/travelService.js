'use strict';

var Q = require('q');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var Travel = require('../../../models/Travel');

var failure = require('../../../helper/response').failure;
var success = require('../../../helper/response').success;

var Http = require('../../../helper/http');

var locals = {};
var reqBody = {};
var reqParam = {};

function getTravelRequest(req, res, cb) {

	locals = req;
	reqParam = locals.params;

	Q.fcall(get)
		.then(response)
		.then(function(output) {
			return cb(null, success('Successfully loaded travel request list', Http.EVERYTHING_IS_OK, output));
		})
		.fail(function(reason) {
			return cb(failure(reason, Http.FORBIDDEN));
		})
		.done();
}

function get() {
	return Q(Travel.find({}).select().exec());
}

function response(result) {
	var response = [];

	result.forEach(function(travel){
		response.push({
			source: travel.source,
			destination: travel.destination,
			destination_reach_date: travel.destinationReachDate,
			travel_options: travel.travelOptions,
			request_date: travel.requestDate,
			request_source: travel.requestSource,
			email : travel.email,
			name : travel.name,
			status:	travel.status
		});
	});

	return Q(response);
}

module.exports = {
	getTravelRequest: getTravelRequest
};