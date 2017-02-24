
var userService = require('./userService');

function GetUserRequest(req, res, next) {
    userService.getUserRequest(req, res, function(err, response) {
        if (err) return res.json(err);
        return res.json(response);
    });
}

module.exports = {
    GetUserRequest: GetUserRequest,
}
