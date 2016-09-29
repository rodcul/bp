/*
*	Product
*/
$(document).ready(function(){
	$(".sub--products--sections__navigation .sub--products--sections__tab").on("click", function(){
		var target = "." + $(this).attr("data-tab");
		if ($(this).hasClass("active")) return;
		$(".sub--products--sections__navigation .sub--products--sections__tab").removeClass("active");
		$(this).addClass("active");
		$(".sub--products--sections__section").hide();
		$(target).fadeIn(500);
	});
	$(".sub--products--sections__navigation--mobile").on("change", function(){
		var target = "." + $(this).val();
		$(".sub--products--sections__section").hide();
		$(target).fadeIn(500);
	});
});