// var Templates = require('./Templates');
// var Storage=require('./Storage');
// //Змінна в якій зберігаються перелік піц в кошику
// var Cities = [];
//
// //HTML едемент куди будуть додаватися піци
// var $cities = $(".cities");
//
// function addToNavbar(city) {
//     if(city==""){
//         alert("Add city!");
//     }
//     var addNew=true;
//     for (var a = 0; a < Cities.length; a++) {
//         if ((city.geometry.location.lat() === Cities[a].city.geometry.location.lat())&&(city.geometry.location.lng() === Cities[a].city.geometry.location.lng())) {
//             addNew = false;
//         }
//     }
//     if(addNew){
//         Cities.push({
//             city: city,
//         });
//     }
//     //Оновити вміст кошика на сторінці
//     updateNavbar();
// }
// function removeFromNavbar(item) {
//     //Видалити піцу з кошика
//     var html = Templates.City_OneItem(item);
//
//     var $node = $(html);
//     $node.find(".remove").click(function(){
//         $node.remove();
//     });
//     Cart.splice(Cart.indexOf(item), 1);
//     //Після видалення оновити відображення
//     updateNavbar();
// }
// function initialiseNavbar() {
//     var saved=Storage.get('navbar');
//     if(saved){
//         Cities=saved;
//     }
//     //Фукнція віпрацьвуватиме при завантаженні сторінки
//     //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
//
//     updateNavbar();
// }
// function getCitiesInNavbar() {
//     //Повертає піци які зберігаються в кошику
//     return Cities;
// }
// function updateNavbar() {
//     //Функція викликається при зміні вмісту кошика
//     //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage
//     //Очищаємо старі піци в кошику
//     $cities.html("");
//
//     //Онволення однієї піци
//     function showOneCityInNavbar(item) {
//         var html = Templates.City_OneItem(item);
//
//         var $node = $(html);
//
//         $cities.append($node);
//
//         $node.find(".remove").click(function () {
//             removeFromNavbar(item);
//             updateNavbar();
//         });
//     }
//     Cities.forEach(showOneCityInNavbar);
//     Storage.set("navbar",Cities);
// }
//
// exports.removeFromNavbar = removeFromNavbar;
// exports.addToNavbar = addToNavbar;
//
// exports.getCitiesInNavbar = getCitiesInNavbar;
// exports.initialiseNavbar = initialiseNavbar;

