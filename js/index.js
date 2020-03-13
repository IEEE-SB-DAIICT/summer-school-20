$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar-custom').css('background', 'black');
    } else {
        $('.navbar-custom').css('background', 'transparent');
    }
});