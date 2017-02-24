
var alexaService = require('./alexaService');

function GetAlexRequest(req, res, next) {
    alexaService.getAlexRequest(req, res, function(err, response) {
        if (err) return res.json(err);
        return res.json(response);
    });
}

module.exports = {
    GetAlexRequest: GetAlexRequest,
}
