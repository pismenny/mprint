$(document).ready(function() {

	function formBlocks() {
		// $('.form__moreinfo').hide();

		$('.js-params input').on('click', function() {
			if ($(this).parent().parent().hasClass('is-active')) {
				$(this).parent().parent().removeClass('is-active');
				// $(this).parent().parent().addClass('is-active');
				// $(this).parent().parent().find('.form__moreinfo').hide();
			}
			// $(this).parent().parent().addClass('is-active');
			else {
				// $(this).parent().parent().removeClass('is-active');
				$(this).parent().parent().parent().find('.js-params').removeClass('is-active');
				$(this).parent().parent().addClass('is-active');
				// $(this).parent().parent().find('.form__moreinfo').show();
				// $(this).parent().parent().find('.form__moreinfo').show();
			}
		});
	} formBlocks();

	function request() {
		$('.js-request-trigger').on('click', function() {
			$(this).parent()
				.find('.b-request__content')
					// .slideDown('fast');
					.addClass('is-open');
			$(this).remove();
			return false;
		});
	} request();

	function parallax() {
		var scrolled = $(window).scrollTop();
		$('#parallax-bg').css('top',-(scrolled*0.08)+'px');
	}

	function fixNavbar() {
		var el = $('.js-navbar'),
				el_top = ($('.page').offset().top),
				el_bottom = ($('.page').offset().top);

		if($(window).scrollTop() > el_top){
				el.addClass('is-fixed');
		}
		if($(window).scrollTop() < el_bottom){
			el.removeClass('is-fixed');
		}
	}

	function workLoad() {
		$('.has-loadbtn').on('click', function() {
			$(this).siblings().removeClass('is-preload');
			$(this).siblings().removeClass('is-hidden');
			$(this).remove();
			return false;
		});
	} workLoad();

	function posSidebar() {

		var el = $('.js-sidebar'),
				el_top = ($('.page').offset().top),
				el_bottom = ($('.page').offset().top),
				// top = $('.js-navbar').outerHeight(),
				rt = ($(window).width() - ($('.page').offset().left + $('.page').outerWidth()));
				el_height = $('.js-sidebar').outerHeight();

		$('.has-fixedsidebar .l-main').css("min-height", el_height);

		if($(window).scrollTop() > el_top){
				el.addClass('is-fixed');
				el.css({"right": rt});
		}
		if($(window).scrollTop() < el_bottom){
			el.removeClass('is-fixed');
			el.css({"right": "auto"});
		}
	} posSidebar();

	function sideAccord() {
		$('.js-sidenav .sidenav__head').on('click', function() {
			// alert('gogogo');
			$('.js-sidenav').children('li').removeClass('is-active');
			$(this).parent().addClass('is-active');
		});
		// return false;
	} sideAccord();

	function searchSuggest() {
		var el = $('.js-searchsuggest'),
				el_drop = ('.search__dropdown');

		el.on('click', function() {
			$(this).find(el_drop).addClass('is-open').slideDown('fast');
		});

		//click document
		$(document).click(function(event) {
			if($(event.target).parents().index( el ) == -1) {
				el.find( el_drop ).removeClass('is-open').slideUp('fast');
			}
		});
	} searchSuggest();

	//select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			}
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
		});
	} select();

	//click document
	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});

	$(window).scroll(function() {
		if ($('.js-navbar').length) {
			fixNavbar();
		}
		parallax();
		posSidebar();

	});
	$(window).resize(function() {
		posSidebar();
	});

	// skrollr.init({
	//	forceHeight: false
	// });

});
