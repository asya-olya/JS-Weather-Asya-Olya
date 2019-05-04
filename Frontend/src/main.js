var express = require('express');
var morgan = require('morgan');

function configureEndpoints(app) {
    var api = require('./api');

    app.get('/clothes', api.getAllClothes());
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });

}

exports.startServer = startServer;