
var apiaiService = require('./apiaiService');

function CollectUserChatInfo(req, res, next) {
    apiaiService.collectUserChatInfo(req, res, function(err, response) {
        if (err) return res.json(err);
        return res.json(response);
    });
}

module.exports = {
    CollectUserChatInfo: CollectUserChatInfo,
}
