$(document).ready(function(){
	// ibg 
	$.each($('.ibg'), function(){
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+ $(this).find('img').attr('src')+'")')
		} 
	})
	// header
	var header = $('.header')
	var headerIcon = $('.header__menu-icon')
	var nav = $('nav')
	var search = $('.nav__search')
	var body = $('body')

	var scroll = $(window).scrollTop()
	checkscroll(scroll)
	if($(window).width()<967){
		search.find('img').attr('src', 'img/header/search-white.png')
	}
	$(window).on('scroll', function(){
		var scroll = $(this).scrollTop()
		checkscroll(scroll)
		
	})
	function checkscroll(scroll){
		if(scroll>0){
			header.addClass('fixed')
			if($(this).width()>967){
				search.find('img').attr('src', 'img/header/search-white.png')
			}

		} else{
			header.removeClass('fixed')
			if($(this).width()>967){
				search.find('img').attr('src', 'img/header/search.png')
			}
		}
	}
	
	$(headerIcon).on('click', function(){
		$(this).toggleClass('active')
		$(body).toggleClass('lock')
		$(nav).toggleClass('active')
	})


	//search 

	$('.nav__search').click(function(event){
		event.preventDefault()
		alert('Не работает')
	})



	var arrow = $('.intro__arrow')

	$(arrow).on('click', function(){
		event.preventDefault()
		var arrowAttr = $(this).attr('href')
		const arrowAttrValue = $(arrowAttr).offset().top - $('.header__body').height()
		$('html, body').stop().animate({
			scrollTop: arrowAttrValue
		}, 500)
	})


	//nav
	var navLink = $('[data-scroll]')
	$(navLink).on('click', function (event) {
		$(navLink).removeClass('active')
		$(this).addClass('active')

		const gotoBlock = $(this).data('scroll')
		const gotoBlockValue = $(gotoBlock).offset().top - $('.header__body').height()

		if ($(headerIcon).hasClass('active')) {
			$(headerIcon).removeClass('active')
			$(nav).removeClass('active')
			$(search).removeClass('active')
			$('body').removeClass('lock')
		}

		$('html, body').stop().animate({
			scrollTop: gotoBlockValue
		}, 500)
		event.preventDefault()

	})





	//slick
	if($(window).width()<767){
		$('.about__body').slick({
			arrows: false,
			dots: true,
			waitForAnimate: true,
		})
	}
	$('.team-member__body').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 525,
			settings: {
				slidesToShow: 1,
			}
		},

		],
	})


	//services
	var servicesCol = $('.services__column')
	$(servicesCol).on('mouseover', function(){
		$.each($(this), function(){
			$(this).find('img').attr('src', 'img/services/telephone-white.png')
		})
	})
	$(servicesCol).on('mouseout', function(){
		$.each($(this), function(){
			$(this).find('img').attr('src', 'img/services/telephone.png')
		})
	})
	




	//tabs
	const tab = $('.tabs')
	const tabCart = $('.work__column')
	$(tab).on('click', function(event){
		event.preventDefault()
		var tabDataValue = $(this).attr('href')
		var tabData = $(tabDataValue)
		if (!($(this).hasClass('active'))) {
			$(tab).removeClass('active')
			$.each($(tabCart), function () {
				$(this).removeClass('active')
			})
			
			$(tabData).addClass('active')
			$(this).addClass('active')
		}
	})
	$('.tabs:first').click()


	//form 
	var form = $('.form')
	var input = $('.form__style')
	$(form).submit(function(event){
		const $form = $(this)
		$.each($(input), function(){
			if($(this).val()===''){
				$(this).addClass('error')
				event.preventDefault()
			} else{
				$(this).removeClass('error')
			}
		})
		
		
	})
	$(input).focus(function(){
		$(input).removeClass('error')
	})
})