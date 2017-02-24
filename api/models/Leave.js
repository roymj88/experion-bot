
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaveSchema = new Schema({
    startDate: {
    	type:String
    },
    endDate: {
    	type:String
    },
    leaveType: {
    	type:String
    },
    name:{
    	type: String
    },
    email:{
    	type: String
    },
    requestSource: {
    	type: String
    },
    requestDate : {
        type: String
    },
    sessionId : {
        type: String
    },
    status : {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
});

// the schema is useless so far
// we need to create a model using it
var Leave = mongoose.model('Leave', leaveSchema);

// make this available to our users in our Node applications
module.exports = Leave;