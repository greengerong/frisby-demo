/*
 * GET users listing.
 */
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
};
exports.token = function(req, res) {
    var guid = generateUUID();
    req.session.token = guid;
    console.log(req.sessionID, "session id");
    res.send(200, guid);
};
exports.user = function(req, res) {
    res.send({
        "id": 1,
        "name": "green gerong"
    });
};