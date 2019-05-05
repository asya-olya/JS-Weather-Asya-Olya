var API = require("../API");
$(".register").click(function() {
    API.createOrder({
        name: $('#input_name').val(),
        email: $('#inputPhone').val(),
        password:$('#input_password').val(),
    }, function(err, result){
        if(err) {
            alert("Registration didn't go well");
        } else {
            $.ajax({
                method:"POST",
                url: "/api/newOrder",
                data: result.data,
                success: function(res) {
                    window.location = "/"
                }
            })
        }
    });
});