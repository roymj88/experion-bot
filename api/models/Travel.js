
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var travelSchema = new Schema({
    source : {
    	type:String
    },
    destination : {
        type:String
    },
    destinationReachDate : {
        type:String
    },
    travelOptions : {
        type:String
    },
    requestDate : {
        type:String
    },
    requestSource: {
    	type: String
    },
    sessionId : {
        type: String
    },
    name:{
    	type: String
    },
    email:{
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
var Travel = mongoose.model('Travel', travelSchema);

// make this available to our users in our Node applications
module.exports = Travel;