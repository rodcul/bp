/*
*
*	Integrations
*/
$(document).ready(function(){
	$(".nav__anchor--integrations").on("click", function(){
		if ($(this).hasClass("nav__anchor--integrations-active")) return;
		var select;
		if ($(this).attr("data-target") != "all") {
			select = "." + $(this).attr("data-target");
		}else{
			select = ".integration";
		};
		$(".integration").hide().stop();
		$(select).fadeIn(600);
	});
	$(".nav__list--integrations--mobile").on("change", function(){
		if ($(this).val() != "all") {
			select = "." + $(this).val();
		}else{
			select = ".integration";
		};
		$(".integration").hide().stop();
		$(select).fadeIn(600);
	});
});
