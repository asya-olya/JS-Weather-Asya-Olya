var db = require('./db');

exports.getAllClothes = function(req, res){
    db.getAll(function (error, data) {
        res.send(data);
    })
}