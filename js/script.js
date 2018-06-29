$(document).ready(function(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if(windowWidth <= 991) {
		$('.header-nav').appendTo('main');
	}
	$(window).resize(function(){
		var windowWidth2 = $(window).width();
		if(windowWidth2 <= 991) {
			$('.header-nav').appendTo('main');
		} else {
			$('.header-nav').appendTo('header .col-md-8');
		}
	});
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.header-nav').toggleClass('open');
		$('.main-body').toggleClass('open');
		$('.header-nav li:nth-child(1)').removeClass('open');
	});
	$('.header-nav li:nth-child(1)').click(function(){
		$(this).toggleClass('open');
	});
	$('.left_column  h2').click(function(e){
		$(this).toggleClass('active');
		$('#categories_block_left').toggleClass('open');
	});

	$('select').change(function(e){
		$(this).prev().html($(this).find(":selected").html());
	});
//	jQuery.scrollSpeed(120, 1000);
//	
//	
//	var navScrolled = false;
//	$(window).scroll(function (event) {
//		var scroll = $(window).scrollTop();
////		console.log(scroll)
//		//NAVIGATION
//		if (37 < scroll && !navScrolled) {
//			
//			$("header .header-wrap").css({
//				position : 'fixed',
//				width : '100%',
//				top: '0',
//				padding : '6px 0 7px'
//			});
//			$("header .header-nav li > a").animate({
//				padding : '11px 33px'
//			},200,function(){
//				$("header .header-nav li .sub-nav a").css({
//					padding : '0px'
//				});
//			});
//			$("header .search-bar input[type='text']").animate({
//				marginTop : '1px'
//			},200);
//			
//			
//			if($(window).width() >= 1200){
//				$(".header-logo img").animate({
//					width :'329px',
//					marginLeft : '40px'
//				},200);
//			}
//			
//			navScrolled = true;
//		}
//
//		if (36 > scroll && navScrolled) {
//			
//			$("header .header-wrap").css({
//				position : 'relative',
//				width : '100%',
//				top: '0',
//				padding : '11px 0 10px'
//			});
//			$("header .header-nav li a").animate({
//				padding : '27px 33px'
//			},200,function(){
//				$("header .header-nav li .sub-nav a").css({
//					padding : '0px'
//				});
//			});
//			$("header .search-bar input[type='text']").animate({
//				marginTop : '18px'
//			},200);
//			
//			$(".header-logo img").animate({
//				width :'100%',
//				marginLeft : '0px'
//			},200);
//			
//
//			
//			navScrolled = false;
//		}
//	});
});