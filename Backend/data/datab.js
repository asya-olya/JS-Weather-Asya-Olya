var mongoose	=	require('mongoose');
//mongoose.connect('mongodb://kma-test:root@mongodb-818-0.cloudclusters.net/kma-test?authSource=admin');
mongoose.connect('mongodb://localhost/weather');
var db =	mongoose.connection;
db.on('error',	function	(err)	{
    console.log('connection	error:',	err.message);
});
db.once('open',	function	callback	()	{
    console.log("Connected	to	DB!");
});

var Clothes =	new	mongoose.Schema({
    type: String,
    minTemperature: Number,
    maxTemperature: Number,
    cloudiness: Number,
    wind: Number,
    humidity: Number,
    src: String,
    presentativeSrc: String,
});

//При створенні моделі задається назва колекції (таблиці)
var Garment =	mongoose.model('weather',Clothes);

exports.checkType = function(callback, type, mintemperature, maxtemperature, cloudiness, wind) {
    Garment.find(
        {
            $and: [
                {
                    type: {
                        $eq: type,
                    }
                },
                {
                    minTemperature: {
                        $gte: mintemperature
                    }
                },
                {
                    maxTemperature: {
                        $lte: maxtemperature
                    }
                },
                {
                    cloudiness: {
                        $lte: cloudiness,
                    }
                },
                {
                    wind: {
                        $lte: wind,
                    }
                }
            ]
        },
    function(error,data){
        callback(error,data);
    }
    );
}

exports.getAll = function(callback){
    Garment.find({}, function(error,data){
        callback(error,data);
    })
}

