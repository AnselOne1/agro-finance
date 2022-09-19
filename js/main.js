$(function () {
    $('.price__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        fade: true,
        speed: 500,
        touchMove: false,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.products__list',
        draggable: false,
    });
    $('.products__list').slick({
        slidesToShow: 1,
        touchMove: false,
        asNavFor: '.price__slider',
        dots: false,
        arrows: false,
        draggable: false
    });

    $(".products__list div").on("click", function() {
        const index = $(this).attr("data-slick-index");
        $(".price__slider").slick("slickGoTo", index);
    });

    $(".header__menu-list a, .products a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html, body').animate({
            scrollTop: destination
        }, 600);
    });

    $('.products__list a').click(function () {
        $('.products__list .products__item').removeClass('slick-active');
        $(this).parent().addClass('slick-active');
    });

    // Модальное окно
    $('.submit-btn').click(function(){
        if($('#name').val() != '' && $('#phone').val() != '') {
            $('.popup-fade').fadeIn();
            return false;
        }
    });


    $('.popup-btn').click(function() {
		$(this).parents('.popup-fade').fadeOut();
        $('.submit-btn').attr("disabled", true);
        setTimeout(function(){
            $('.submit-btn').removeAttr('disabled');
        }, 10000);
	});		
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();				
		}
	});

    //burger
    $('.header__burger').click(function(){
        $(this).toggleClass('active');
        $('.header__menu-list').toggleClass('active');
    });
});