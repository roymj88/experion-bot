'use strict';

var config = require('./config.json');

 //Authenticartion Controller
var loginController = require('./modules/login/loginController');
var signupController = require('./modules/signup/signupController');

//Dashboard Bot Controller
var leaveController = require('./modules/admin/leave/leaveController');
var travelController = require('./modules/admin/travel/travelController');

//Dashboard Analytics Controller
var alexaController = require('./modules/dashboard/alexa-request/alexaController');
var platformController = require('./modules/dashboard/platform-request/platformController');
var userController = require('./modules/dashboard/user-request/userController');

var apiaiController = require('./modules/apiai/apiaiController');
var security = require('./helper/security');

module.exports = function(app) {
    // API Status
    app.get("/api", function(req, res) {
        res.json({
            api: config.project.name,
            version: config.project.version,
            status: config.project.status
        });
    });

    //API hook for API.AI
    app.post("/api/admin/apiai", security.apiaiAuth, apiaiController.CollectUserChatInfo);

    //Dashboard Bot 
    app.get("/api/bot/leaverequest", security.auth, leaveController.GetLeaveRequests);
    app.get("/api/bot/travelrequest", security.auth, travelController.GetTravelRequest);

    //Dashboard Analytics
    app.get("/api/dashboard/userrequest", security.auth, userController.GetUserRequest);
    app.get("/api/dashboard/platformrequest", security.auth, platformController.GetPlatformRequest);
    app.get("/api/dashboard/alexarequest", security.auth, alexaController.GetAlexRequest);

    //Authenticartion
    app.post("/api/login", loginController.DoLogin);
    app.post("/api/signup", signupController.DoSignUp);
}