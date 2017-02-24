

var config = require('../../config.json');

var failure = require('./../response').failure;
var success = require('./../response').success;

var fs = require('fs');
var nodemailer = require("nodemailer");
var sgTransport = require('nodemailer-sendgrid-transport');

function SendMail(options, template, cb) {
    //Set mail content
    for(var key in options){
        template = template.replace( new RegExp("{{%"+key+"%}}", "g"), options[key] );
    }

    //Sandgrid mail transporter 
    var transporter = nodemailer.createTransport(sgTransport({
        auth: {
            api_key: config.mail.sandgrid.apiKey
        }
    }));

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: config.email.label + '<' + config.email.mailId + '>', // sender address
        to: options.email, // list of receivers
        bcc : config.email.admin,
        subject: options.subject, // Subject line
        html: template // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Mail Sent: ' + info.response);
            cb(null, 'success');
        }
    });
};

function GetTemplate(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}

exports.LeaveRequestConfirmation = function(options, cb) {
    GetTemplate('./templates/leave-request-confirmation.html', function(err, file) {
        SendMail(options, file, function(err, response){
            cb(null, response);
        });  
    });
}

exports.TravelRequestConfirmation = function(options, cb) {
    GetTemplate('./templates/travel-request-confirmation.html', function(err, file) {
        SendMail(options, file, function(err, response){
            cb(null, response);
        });  
    });
}