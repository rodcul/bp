// auto centering hero banner on sub product pages
function HeroContentPosition() {
	var total = $('.carousel--sub_products').height();
	var height = $('.carousel--sub_products .carousel__content').height();
	var nav = 125;
	var mobilenav = 42;
	var navtwo = 98;
	var largeview = ((((total-nav)-height)/2)+nav);
	var mediumview = ((((total-nav)-height)/2)+nav);
	var normalview = ((((total-nav)-height)/2)+nav);
	var smallview = ((((total-mobilenav)-height)/2)+mobilenav);
	var mobileview = ((((total-navtwo)-height)/2)+navtwo);
	if ( $(window).width() <1025) {
		if (total == 420) {
			$('.carousel--sub_products .carousel__content').css('top',mobileview);
		}
		if (total == 230) {
			$('.carousel--sub_products .carousel__content').css('top',smallview);
		}
	} else {
		if (total == 500) {
			$('.carousel--sub_products .carousel__content').css('top',largeview);
		}
		if (total == 450) {
			$('.carousel--sub_products .carousel__content').css('top',mediumview);
		}
		if (total == 420) {
			$('.carousel--sub_products .carousel__content').css('top',normalview);
		}
		if (total == 230) {
			$('.carousel--sub_products .carousel__content').css('top',smallview);
		}
		else {
			
		}
	}
}
// auto centering case studies Hero Banner
/* use definitions from Gil
function HeroCaseStudies() {
	var total = $('.carousel--case-studies').height();
	var height = $('.carousel--case-studies .carousel__content').height();
	var navone = $('.header.original').height();
	var navtwo = $('.header.header--main').height();
	var mobilenav = 55;
	var desktop = ((((total-navone)-height)/2)+navone);
	var semimobile = ((total-height)/2);
	var mobile = ((248-height)/2);
	if ( $(window).width() <1025) {
		if (total==400) {
			$('.carousel--case-studies .carousel__content').css('top',semimobile);
		} else {
			$('.carousel--case-studies .carousel__content').css('top',mobile);
		}
	} else {
		if (total==400) {
			$('.carousel--case-studies .carousel__content').css('top',132);
		} else {
			$('.carousel--case-studies .carousel__content').css('top',mobile);
		}
	}
	
}
*/


// auto centering solution Hero Banner
function HeroSolutions() {
	var total = $('.carousel--solutions').height();
	var height = $('.carousel--solutions .carousel__content').height();
	var desktopnav = 85;
	var mobilenav = 57;
	var allview = ((((total-desktopnav)-height)/2)+desktopnav);
	var ipadview = ((((total-mobilenav)-height)/2)+mobilenav);
	var mobileview = ((total-height)/2);
	if ( $(window).width() <1025) {
		if (total==350) {
			$('.carousel--solutions .carousel__content').css('top',ipadview);
		}
		if (total==230) {
			$('.carousel--solutions .carousel__content').css('top',mobileview);
		}
	}
	if ( $(window).width() <850) {
		if (total==500) {
			$('.carousel--solutions .carousel__content').css('top',allview);
		}
		if (total==450) {
			$('.carousel--solutions .carousel__content').css('top',allview);
		}
		if (total==350) {
			$('.carousel--solutions .carousel__content').css('top',mobileview);
		}
		if (total==230) {
			$('.carousel--solutions .carousel__content').css('top',mobileview);
		}
		if (total==179) {
			$('.carousel--solutions .carousel__content').css('top',mobileview-3);
		}
	}
	else {
		if (total==500) {
			$('.carousel--solutions .carousel__content').css('top',allview);
		}
		if (total==450) {
			$('.carousel--solutions .carousel__content').css('top',allview);
		}
		if (total==350) {
			$('.carousel--solutions .carousel__content').css('top',allview);
		}
		if (total==179) {
			$('.carousel--solutions .carousel__content').css('top',mobileview-3);
		}
	}
}
function HeroSubSolutions() {
	var total = $('.carousel--sub_solutions').height();
	var height = $('.carousel--sub_solutions .carousel__content').height();
	var nav = 126;
	var mobilenav = 42;
	var bigmobilenav = 96;
	var allview = ((((total-nav)-height)/2)+nav);
	var ipadview = ((((total-bigmobilenav)-height)/2)+bigmobilenav);
	var smallview = ((((total-mobilenav)-height)/2)+mobilenav);
	if ( $(window).width() <1025) {
		if (total==405) {
			$('.carousel--sub_solutions .carousel__content').css('top',allview);
		}
	}
	if ( $(window).width() <851) {
		if (total==405) {
			$('.carousel--sub_solutions .carousel__content').css('top',ipadview);
		}
		if (total==285) {
			$('.carousel--sub_solutions .carousel__content').css('top',smallview);
		}
	}
	else {
		$('.carousel--sub_solutions .carousel__content').css('top',allview);
		if (total==285) {
			$('.carousel--sub_solutions .carousel__content').css('top',smallview);
		} else {}
	}
}

function SubMenuChecks() {
	if ($('.menu__item__212').hasClass('current_page')) {
		$('.submenu.submenu--why').addClass('on-active-state');
		$('.submenu.submenu--product').addClass('push-right-double');
		$('.submenu.submenu--resources').addClass('push-right-double');
	}
	else if ($('.menu__item__287').hasClass('current_page')) {
		$('.submenu.submenu--product').addClass('on-active-state');
		$('.submenu.submenu--resources').addClass('push-right');
	}
	else if ($('.menu__item__456').hasClass('current_page')) {
		$('.submenu.submenu--resources').addClass('on-active-state');
	}
	else if ($('.menu__item__289').hasClass('current_page')) {
		$('.submenu.submenu--resources').addClass('push-right-double');
	}
	else if ($('.menu__item__288').hasClass('current_page')) {
		$('.submenu.submenu--resources').addClass('push-right-double');
	}
	else {

	}
} 


$(document).ready(function(){
	HeroContentPosition()
	HeroSolutions()
	HeroSubSolutions()
	SubMenuChecks()
});
$(window).resize(function(){
    HeroContentPosition()
    HeroSolutions()
    HeroSubSolutions()
    SubMenuChecks()
});