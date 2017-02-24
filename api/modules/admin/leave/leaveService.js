'use strict';

var Q = require('q');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var Leave = require('../../../models/Leave');

var failure = require('../../../helper/response').failure;
var success = require('../../../helper/response').success;

var Http = require('../../../helper/http');

var locals = {};
var reqBody = {};
var reqParam = {};

function getLeaveRequests(req, res, cb) {

	locals = req;
	reqParam = locals.params;

	Q.fcall(get)
		.then(response)
		.then(function(output) {
			return cb(null, success('Successfully loaded leave list', Http.EVERYTHING_IS_OK, output));
		})
		.fail(function(reason) {
			return cb(failure(reason, Http.FORBIDDEN));
		})
		.done();
}

function get() {
	return Q(Leave.find({}).select().exec());
}

function response(result) {
	var response = [];

	result.forEach(function(leave){
		response.push({
			start_date : leave.startDate,
			end_date : leave.endDate,
			leave_type : leave.leaveType,
			request_source : leave.requestSource,
			email : leave.email,
			name : leave.name,
			requestDate : leave.request_date,
			status :leave.status,
		});
	});

	return Q(response);
}

module.exports = {
	getLeaveRequests: getLeaveRequests
};