'use strict';

var Leave  = require('./../../models/Leave');
var Mail = require('./../../helper/mail');

function validateLeaveRequest(locals, cb) {
    var entites = locals.result.parameters;

    if(!entites.date)
        throw new Error('Leave date is required')

    if(entites.date.length === 0) 
        throw new Error('Leave date is required')
    
    if(!entites.leaveType)
        throw new Error('Leave type is required')
    
    if(!locals.timestamp)
        throw new Error('Timestamp is required')

    // if(!locals.originalRequest.source)
    //     throw new Error('Source is required')

    if(!locals.sessionId)
        throw new Error('sessionId is required')
    
    if(!entites.name)
        throw new Error('Name type is required')
    
    if(!entites.email)
        throw new Error('Email type is required')

    cb(true);
}

function saveLeaveRequestData(locals, cb) {
    var entites = locals.result.parameters;
    var startDate, endDate;

    if(entites.date.length == 2){
        startDate = entites.date[0];
        endDate = entites.date[1];
    } else {
        startDate = entites.date[0];
        endDate = entites.date[0]; 
    }

    var leave = new Leave();
    leave.startDate = startDate;
    leave.endDate = endDate;
    leave.leaveType = entites.leaveType;
    if(locals.hasOwnProperty("originalRequest")) {
        leave.requestSource = locals.originalRequest.source;
    } else {
        leave.requestSource = "Admin"
    }
    leave.requestDate = locals.timestamp;
    leave.sessionId = locals.sessionId;
    leave.email = entites.email;
    leave.name = entites.name;
    leave.save()

    sendRequestMail(leave, function(data) {
        cb(true);
    });
}

function sendRequestMail(leave, cb) {
    var mailOptions = {
		subject : "Leave Application",
		email: leave.email,
		name : leave.name,
        date : leave.startDate + " - " + leave.endDate,
        leaveType : leave.leaveType
	};

	Mail.LeaveRequestConfirmation(mailOptions, function(){
        cb(true);
	});
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
    validateLeaveRequest: validateLeaveRequest,
    saveLeaveRequestData: saveLeaveRequestData
}