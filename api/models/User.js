
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  	name: String,
    designation : String,
    empCode : String,
  	email: String,
    mobile: {
        type     : Number,
        required : false,
        //unique   : true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    address : String,
    sessionId : {
        type: String
    },
	status: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;