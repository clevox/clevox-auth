module.exports = function(app) {

    app.get('/ping', function(req, res, next) {
        res.send("pong");
    });

};

