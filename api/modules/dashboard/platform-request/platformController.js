
var platformService = require('./platformService');

function GetPlatformRequest(req, res, next) {
    platformService.getPlatformRequest(req, res, function(err, response) {
        if (err) return res.json(err);
        return res.json(response);
    });
}

module.exports = {
    GetPlatformRequest: GetPlatformRequest,
}
