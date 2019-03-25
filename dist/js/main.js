// main.js

$(window).load(function(){
	// Twentytwenty plugin   https://zurb.com/playground/twentytwenty 
	$(".before-after").twentytwenty({
		before_label: 'Без скинали',
		after_label: 'Со скинали'
	});

	// Slick Slider plugin   http://kenwheeler.github.io/slick/
	$(".before-slider").slick({
		dgaggable: false,
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



})