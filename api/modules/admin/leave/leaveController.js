

var leaveService = require('./leaveService');

function GetLeaveRequests(req, res, next) {
    leaveService.getLeaveRequests(req, res, function(err, response) {
        if (err) return res.json(err);
        return res.json(response);
    });
}

module.exports = {
    GetLeaveRequests: GetLeaveRequests
}