$(function () {

    $("a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html, body').animate({
            scrollTop: destination
        }, 600);
    });

});