

var travelService = require('./travelService');

function GetTravelRequest(req, res, next) {
    travelService.getTravelRequest(req, res, function(err, response) {
        if (err) return res.json(err);
        return res.json(response);
    });
}

module.exports = {
    GetTravelRequest: GetTravelRequest
}