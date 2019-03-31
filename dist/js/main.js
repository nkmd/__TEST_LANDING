// main.js

$(window).load(function(){
	// Twentytwenty plugin   https://zurb.com/playground/twentytwenty 
	$(".before-after").twentytwenty({
		before_label: 'Без скинали',
		after_label: 'Со скинали'
	});

	// Slick Slider plugin   http://kenwheeler.github.io/slick/
	$(".before-slider").slick({
		draggable: false,
		dots: true,
		dotsClass: 'before-slider__dots',
		prevArrow: $(".arrow-left"),
		nextArrow: $(".arrow-right"),

	});

	// Menu
	$(".menu-button").on("click", function(){
		$(".menu").toggleClass("menu_activ");
	});

	// Select 
	$(".select_checked").on("click", function(){
		$(".select__dropdown").toggleClass("select__dropdown_open");
	});
	$(".select__option").on("click", function(){
		var value = $(this).attr("data-value");
		//console.log(value); // debug
		$("#select-type").val(value);
		$(".select_checked").text(value);
		$(".select__dropdown").toggleClass("select__dropdown_open");
	});

	// Lasy Scroll
	$("a[href^='#']").on("click", function(){
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top -100 + "px" });
		return false;
	});

	// MaskedInput   https://github.com/digitalBush/jquery.maskedinput
	$("input[type='tel']").mask("+7 (999) 999-999-999");

	// Показать(загрузить) карту, только если до неё докрутили.
	var reviews = $('.reviews');
	var reviewsTop = reviews.offset().top;
	// вешаем bind на scroll, предотвращаем многоразовую загрузку карты
	$(window).bind('scroll',function(){
		var windowTop = $(this).scrollTop();
		if(windowTop > reviewsTop){
			console.log('_докрутили_') // отладка
			// вставить yandex крту:
			$('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A14b6e83551c5a476b80caeb25f1f406fc1a56b37b564328403a9001becd0d4ab&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>');
			//перестаём отслеживать
			$(window).unbind('scroll'); 
		}
	});


})