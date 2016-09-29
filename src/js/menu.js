// menu module
var menuModule = (function(window, $) {
	var windowWidth = window.innerWidth;

	function init() {
		// listener for mobile navigation button
		_mobileNavigationListener();

		// listener for submenu related events
		_submenuListener();

	}

	$( window ).resize(function() {
		windowWidth = window.innerWidth;
  		$('.submenu').removeClass('isOpen').removeAttr('style');
		$('.menu__item').removeAttr('style').removeClass('menu__item--active');
		if (windowWidth > 1024) $(".header--main .menu").show();
		if( windowWidth <= 767 ) {
			var subnavWidth = $('.subnav__title').outerWidth();
			var navboxWidth = $('.subnav__box').width();
			var currentItemWidth = navboxWidth - subnavWidth - 5;
			//$('.subnav__list').css('width', currentItemWidth+'px');
		}
	});
	function _submenuResourceResponsive(){
		var box1 = $(".submenu__box--resources:first-child").height();
		var box2 = $(".submenu__box--resources:nth-child(2)").height();
		if(box1 > box2){
			$(".submenu__box--resources:nth-child(2)").css("min-height", box1);
		}else{
			$(".submenu__box--resources:first-child").css("min-height", box2);
		};
	}
	function _mobileNavigationListener() {
		var activeMobileNavButtonClass = 'button--mobile-menu-active'
			, activeHeaderClass = 'header--main-mobile';

		mainModule.eventListener('button--mobile-menu-js', 'click', function(event) {
			event.preventDefault();

			$('.menu').stop().slideToggle(400, function() {
				$('.header').toggleClass(activeHeaderClass);
			});

			// trigger animation on mobile nav button
			$(this).toggleClass(activeMobileNavButtonClass);
			jQuery(".current.active a").trigger('click').removeClass('active');
		});

		var windowWidth = window.innerWidth;
		if( windowWidth <= 1024 ) {
			var subnavWidth = $('.subnav__title').outerWidth();
			var navboxWidth = $('.subnav__box').width();
			var currentItemWidth = navboxWidth - subnavWidth - 5;
			//$('.subnav__list').css('width', currentItemWidth+'px');
			jQuery(".subnav__item.current a").on( "click", function(e){
				e.preventDefault();
				e.stopPropagation();
				var height = $(window).outerHeight();
				$('.submenu--mobile').css('height', height+'px');
				jQuery(this).parent('.current').toggleClass('active');
				jQuery('.subnav--container').toggleClass('active');

				var elSelector		= '.submenu--mobile',
					$element		= $( elSelector );
				var top = $element.outerHeight();

				$element.toggle('fast');
			});
			jQuery(".subnav__box").on( "click", function(e){
				//jQuery(".subnav__item.current a").trigger('click');
				var height = $(window).outerHeight();
				$('.submenu--mobile').css('height', height+'px');
				jQuery(this).find('.current').toggleClass('active');
				jQuery(this).parent('.subnav--container').toggleClass('active');

				var elSelector		= '.submenu--mobile',
					$element		= $( elSelector );
				var top = $element.outerHeight();

				$element.toggle('fast');
			});
		}
	}

	function _submenuListener() {


		if (windowWidth > 850) {
			mainModule.eventListener('document', 'mouseup', function(event) {
				var container = $('.menu');

				if (!container.is(e.target) && container.has(e.target).length === 0) {
					$('.menu__anchor--js').removeClass('isOpen');
					$('.submenu').removeClass('isOpen').fadeOut();
				}

			});
			$( ".menu__list li:nth-child(2) a" )
			 .mouseenter(function() {
			 	if (windowWidth <= 1024) return;
			 	$(".submenu.submenu--resources").removeClass("opening").hide();
			 	$(".submenu.submenu--why").removeClass("opening").hide();
			    $('.submenu.submenu--product').clearQueue();
			    $('.submenu.submenu--product').fadeIn(300);
			 })
			  .mouseleave(function() {
			  	if($('.submenu.submenu--product').hasClass("opening")) return;
			    if($('.submenu.submenu--product').css("display") == "block") $('.submenu.submenu--product').delay(500).fadeOut(300);
			 });
			 $('.submenu.submenu--product')
			  .mouseenter(function() {
			     $('.submenu.submenu--product').clearQueue();
			     $('.submenu.submenu--product').show();
			  })
			   .mouseleave(function() {
			   	 if($('.submenu.submenu--product').hasClass("opening")) return;
			     if($('.submenu.submenu--product').css("display") == "block") $('.submenu.submenu--product').delay(300).fadeOut(300);
			  });
			$( ".menu__list li:nth-child(1) a" )
			 .mouseenter(function() {
			 	if (windowWidth <= 1024) return;
			 	$(".submenu.submenu--resources").removeClass("opening").hide();
			 	$('.submenu.submenu--product').removeClass("opening").hide();
			    $('.submenu.submenu--why').clearQueue();
			    $('.submenu.submenu--why').fadeIn(300);
			 })
			  .mouseleave(function() {
			  	if($('.submenu.submenu--why').hasClass("opening")) return;
			    if($('.submenu.submenu--why').css("display") == "block") $('.submenu.submenu--why').delay(500).fadeOut(300);
			 });
			 $('.submenu.submenu--why')
			  .mouseenter(function() {
			     $('.submenu.submenu--why').clearQueue();
			     $('.submenu.submenu--why').show();
			  })
			   .mouseleave(function() {
			   	 if($('.submenu.submenu--why').hasClass("opening")) return;
			     if($('.submenu.submenu--why').css("display") == "block") $('.submenu.submenu--why').delay(300).fadeOut(300);
			  });
			$( ".menu__list li:nth-child(5) a" )
			 .mouseenter(function() {
			 	if (windowWidth <= 1024) return;
			 	$(".submenu.submenu--why").removeClass("opening").hide();
			 	$('.submenu.submenu--product').removeClass("opening").hide();
			    $('.submenu.submenu--resources').clearQueue();
			    $('.submenu.submenu--resources').fadeIn(300);
			    _submenuResourceResponsive();
			 })
			  .mouseleave(function() {
			    if($('.submenu.submenu--resources').css("display") == "block") $('.submenu.submenu--resources').delay(500).fadeOut(300);
			 });
			 $('.submenu.submenu--resources')
			  .mouseenter(function() {
			     $('.submenu.submenu--resources').clearQueue();
			     $('.submenu.submenu--resources').show();
			  })
			   .mouseleave(function() {
			   	if($('.submenu.submenu--resources').hasClass("opening")) return;
			     if($('.submenu.submenu--resources').css("display") == "block") $('.submenu.submenu--resources').delay(300).fadeOut(300);
			  });
			$('body').click(function(e) {
				if($(e.target).hasClass("menu__anchor--js")) return;
				$(".submenu").removeClass("opening").fadeOut(300);
			});
		}
	}

	return {
		init: init
	};
})(window, $);

document.addEventListener('DOMContentLoaded', function() {
	menuModule.init();
});

;( function( $, window, document, undefined )
{
	'use strict';

	$(".submenu").on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
	});
	$(".submenu a").bind('click', function(event) {
		window.location = $(this).attr('href');
	});

	var elSelector		= '.header--main',
		$element		= $( elSelector );

	if( !$element.length ) return true;

	var elHeight		= 0,
		elTop			= 0,
		$document		= $( document ),
		dHeight			= 0,
		$window			= $( window ),
		wHeight			= 0,
		wScrollCurrent	= 0,
		wScrollBefore	= 0,
		wScrollDiff		= 0;

	$window.on( 'scroll', function()
	{
		wScrollCurrent	= $window.scrollTop();
		wScrollDiff		= wScrollBefore - wScrollCurrent;
		var windowWidth = $(window).outerWidth();
		var subNavigation = $('.subnav--container');
		$('.submenu.submenu--why, .submenu.submenu--product, .submenu.submenu--resources').each(function(){
			if($(this).css("display") == "block") { $(this).delay(500).fadeOut(300); }	
		});

		elHeight		= '100'; //$element.outerHeight();
		dHeight			= $document.height();
		wHeight			= $window.height();
		elTop			= parseInt( $element.css( 'top' ) ) + wScrollDiff;
		if( wScrollDiff > 0 ) { // scrolled up; element slides in
			if( wScrollCurrent > 600 ){
				$element.css( {
					'top': elTop > 0 ? 0 : elTop,
					'opacity':1
				});
			} else if( wScrollCurrent <= 0 ) { // scrolled to the very top; element sticks to the top
				$element.css({
					'top': '-'+elHeight,
					opacity:0
				});
			} else {
				$element.css({
					'top': '-'+elHeight
				});
			}
		} else if( wScrollDiff < 0 ) { // scrolled down
			$element.css( 'top', Math.abs( elTop ) > elHeight ? -elHeight : elTop );
		}
		if( wScrollCurrent < 200 ) {
			var opacity = 0;
			if( wScrollCurrent <= 0 ){
				opacity = 1;
				$element.css('top', -100);
			}
			if( windowWidth < 1022 && !(wScrollCurrent <= 0) ) {
				opacity = 1;
				$element.css('opacity', opacity);
			} else {
				$element.animate({top:-100}, 100, function(){
					if( !(windowWidth <= 1022) && !(wScrollCurrent <= 0) ) {
						$element.css({
							'opacity': opacity
						});
					}
				});
			}	
		}
		if( windowWidth < 1025 && !(wScrollCurrent <= 0) ) {
			$element.css('opacity', 1);
		}
		wScrollBefore = wScrollCurrent;
	});

})( jQuery, window, document );

;( function( $, window, document, undefined )
{
	'use strict';

	var windowWidth = window.outerWidth;
	var elSelector		= '.subnav--container',
			$element		= $( elSelector );
	if( windowWidth <= 1023 ){

		if( !$element.length ) return true;

		var elHeight		= 0,
			elTop			= 0,
			$document		= $( document ),
			dHeight			= 0,
			$window			= $( window ),
			wHeight			= 0,
			wScrollCurrent	= 0,
			wScrollBefore	= 0,
			wScrollDiff		= 0;

		$window.on( 'scroll', function()
		{
			if( !$element.hasClass('active') ){
				elHeight		= $element.outerHeight();
				dHeight			= $document.height();
				wHeight			= $window.height()+68;
				wScrollCurrent	= $window.scrollTop();
				wScrollDiff		= wScrollBefore - wScrollCurrent;
				elTop			= 25;//parseInt( $element.css( 'top' ) ) + wScrollDiff;

				if( wScrollCurrent <= 0 ) { // scrolled to the very top; element sticks to the top
					//$element.css( 'top', 25 );
					//$element.slideUp('400');
				} else if( wScrollDiff > 0 ) { // scrolled up; element slides in
					//$element.css( 'top', elTop > 0 ? 68 : elTop );
					$element.slideDown('400');
				} else if( wScrollDiff < 0 ) { // scrolled down
					if( wScrollCurrent + wHeight >= dHeight - elHeight ) { // scrolled to the very bottom; element slides in
						//$element.css( 'top', ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 68 );
						$element.slideDown('400');
					} else { // scrolled down; element slides out
						//$element.css( 'top', Math.abs( elTop ) > elHeight ? -elHeight : elTop );
						$element.slideUp('400');
					}
				}
				wScrollBefore = wScrollCurrent;
			}
		});
	}
})( jQuery, window, document );