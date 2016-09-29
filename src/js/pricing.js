// Pricing Script
$(document).ready(function(){
	
	$('.first')
	.mouseenter(function(e) {
		e.stopPropagation();
		$(this).find('.tooltips').css('visibility','visible').fadeIn('slow');
	})
	.mouseleave(function(e) {
		e.stopPropagation();
		$(this).find('.tooltips').css('visibility','hidden').fadeOut('slow');
	});


});