$(document).ready(function() {
    //$(".dial").knob();
    $('.dial').knob({
        'min': 0,
        'max': 100,
        'width': 105,
        'height': 105,
        'displayInput': true,
        'fgColor': "#00B4CC",
        'release': function(v) {
            $("p").text(v);
        },
        'readOnly': true
    });
});


// $(document).ready(function() {
//     var altura = $('.nav').offset().top;

//     $(window).on('scroll', function() {
//         if ($(window).scrollTop() > altura) {
//             $('.nav').addClass('nav2');
//         } else {
//             $('.nav').removeClass('nav2');
//         }
//     });

// });