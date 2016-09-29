/*
*
*	Scroll Animation add by Loi Truong
*	
*	example: <div class="animation-trigger" data-animation-target="animation-class"></div>
*
*/
$(document).ready(function(){
	//window scroll 
	active_animation($(window).scrollTop(), $(window).scrollTop()+$(window).height())
	$(window).scroll(function(){
		active_animation($(this).scrollTop(), $(this).scrollTop()+$(this).height());
	});
});

//====================================================
//functions
//====================================================
function active_animation($windowTop, $windowBottom){
	$(".animation-trigger").each(function(){
		var paddingHeight = 100; //menu offset
		var position = $(this).offset().top;
		var divHeight = $(this).height();
		var animation = $(this).attr("data-animation-target");
		if (position >= ($windowTop - divHeight) && position <= ($windowBottom - paddingHeight)) {
			$(this).addClass(animation);
			$(this).removeClass("animation-trigger");
		};
	});
}
