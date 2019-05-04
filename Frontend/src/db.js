var mongoose	=	require('mongoose');
mongoose.connect('mongodb://kma-test:root@mongodb-818-0.cloudclusters.net/kma-test?authSource=admin');
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

    var golf1	= new	Garment({
        type: 'shirt',
        minTemperature: -30,
        maxTemperature: 10,
        cloudiness: 70,
        wind: 5,
        humidity: 90,
        src: 'assets/images/гольф1.png',
    });
    golf1.save(function(err,	clothes_datab){
        if(!err)	{
            console.log(clothes_datab._id);
        }
    });


var jeans1	= new	Garment({
    type: 'pants',
    minTemperature: 0,
    maxTemperature: 20,
    cloudiness: 10,
    wind: 5,
    humidity: 50,
    src: 'assets/images/джинси.png',
});
jeans1.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var jeans2	= new	Garment({
    type: 'pants',
    minTemperature: -5,
    maxTemperature: 20,
    cloudiness: 10,
    wind: 5,
    humidity: 80,
    src: 'assets/images/джинси2.png',
});
jeans2.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var jeansJacket = new	Garment({
    type: 'outwear',
    minTemperature: 15,
    maxTemperature: 25,
    cloudiness: 70,
    wind: 3,
    humidity: 90,
    src: 'assets/images/джинсовий піджак1.png',
});
jeansJacket.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var kardigan = new	Garment({
    type: 'outwear',
    minTemperature: 15,
    maxTemperature: 28,
    cloudiness: 30,
    wind: 3,
    humidity: 80,
    src: 'assets/images/кардиган1.png',
});
kardigan.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var sneakers = new	Garment({
    type: 'shoes',
    minTemperature: 0,
    maxTemperature: 25,
    cloudiness: 80,
    wind: 5,
    humidity: 99,
    src: 'assets/images/кеди.png',
    presentativeSrc: 'assets/images/кеди.png',
});
sneakers.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var Tshirt1 = new	Garment({
    type: 'shirt',
    minTemperature: 15,
    maxTemperature: 35,
    cloudiness: 60,
    wind: 3,
    humidity: 50,
    src: 'assets/images/майка1.png',
});
Tshirt1.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var Tshirt2 = new	Garment({
    type: 'shirt',
    minTemperature: 12,
    maxTemperature: 35,
    cloudiness: 80,
    wind: 4,
    humidity: 50,
    src: 'assets/images/майка2.png',
});
Tshirt2.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var glasses1 = new	Garment({
    type: 'accessories',
    minTemperature: 15,
    maxTemperature: 35,
    cloudiness: 20,
    wind: 5,
    humidity: 80,
    src: 'assets/images/очки.png',
    presentativeSrc: 'assests/images/очки1.png',
});
glasses1.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var glasses2 = new	Garment({
    type: 'accessories',
    minTemperature: 15,
    maxTemperature: 35,
    cloudiness: 30,
    wind: 5,
    humidity: 80,
    src: 'assets/images/очки2.png',
    presentativeSrc: 'assets/images/очки2.1.png',
});
glasses2.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var glasses3 = new	Garment({
    type: 'accessories',
    minTemperature: 15,
    maxTemperature: 35,
    cloudiness: 30,
    wind: 5,
    humidity: 80,
    src: 'assets/images/очки3.png',
    presentativeSrc: 'assets/images/очки3.1.png',
});
glasses3.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var dress1 = new	Garment({
    type: 'skirt',
    minTemperature: 5,
    maxTemperature: 30,
    cloudiness: 80,
    wind: 4,
    humidity: 80,
    src: 'assets/images/плаття1.png',
});
dress1.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var dress2 = new	Garment({
    type: 'skirt',
    minTemperature: 20,
    maxTemperature: 35,
    cloudiness: 50,
    wind: 3,
    humidity: 60,
    src: 'assets/images/плаття2.png',
});
dress2.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var dress3 = new	Garment({
    type: 'skirt',
    minTemperature: 15,
    maxTemperature: 30,
    cloudiness: 70,
    wind: 4,
    humidity: 60,
    src: 'assets/images/плаття3.png',
});
dress3.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var skirt1 = new	Garment({
    type: 'skirt',
    minTemperature: 25,
    maxTemperature: 35,
    cloudiness: 40,
    wind: 3,
    humidity: 50,
    src: 'assets/images/спідниця1.png',
});
skirt1.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var skirt2 = new	Garment({
    type: 'skirt',
    minTemperature: 20,
    maxTemperature: 35,
    cloudiness: 20,
    wind: 2,
    humidity: 60,
    src: 'assets/images/спідниця2.png',
});
skirt2.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var shorts = new	Garment({
    type: 'pants',
    minTemperature: 20,
    maxTemperature: 35,
    cloudiness: 60,
    wind: 4,
    humidity: 80,
    src: 'assets/images/шорти1.png',
});
shorts.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var scarf = new	Garment({
    type: 'accessories',
    minTemperature: 5,
    maxTemperature: 20,
    cloudiness: 90,
    wind: 6,
    humidity: 90,
    src: 'assets/images/шарф1.png',

});
scarf.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var shoes1 = new	Garment({
    type: 'shoes',
    minTemperature: 15,
    maxTemperature: 35,
    cloudiness: 90,
    wind: 3,
    humidity: 70,
    src: 'assets/images/туфлі1.png',
    presentativeSrc: 'assets/images/туфлі1.2.png',
});
shoes1.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

var shoes2 = new	Garment({
    type: 'shoes',
    minTemperature: 5,
    maxTemperature: 30,
    cloudiness: 90,
    wind: 5,
    humidity: 80,
    src: 'assets/images/туфлі2.png',
    presentativeSrc: 'assets/images/туфлі2.2.png',
});
shoes2.save(function(err,	clothes_datab){
    if(!err)	{
        console.log(clothes_datab._id);
    }
});

exports.getAll = function(callback){
    Garment.find({}, function(error,data){
        callback(error,data);
    })
}