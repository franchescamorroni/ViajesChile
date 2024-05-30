console.log("lalalala");

$(document).ready(function() {

    $(".contactoBoton").tooltip({
        title: "Dale click aquí",
        placement: "right"
    });

});

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
    window.location.hash = hash;
    });
    }
    });
});
