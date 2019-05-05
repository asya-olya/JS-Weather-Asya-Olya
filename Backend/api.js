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