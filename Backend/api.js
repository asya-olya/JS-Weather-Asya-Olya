var db = require('./data/datab');

exports.getAllClothes = function(req, res){
    db.getAll(function (error, data) {
        res.send(data);
    })
}

exports.checkType = function(req, res){
    db.checkType(function (error, data) {
        res.send(data.src);
    }, 'shirt', 20, 70, 4)
}

exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Registration", order_info);
    console.log(order_info.name);
    console.log(order_info.email);
    console.log(order_info.password);
    res.send({
        success: true,
        data: order_info
    });
};