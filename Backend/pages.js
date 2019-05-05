exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Weather'
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Registration'
    })
};
