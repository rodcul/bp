// Careers module
$(document).ready(function(){
	/*
	var testimonyHeight = 0;
	$(".custumer-success__box .custumer-success__testimony").each(function(e){
		var outerHeight = parseInt($(this).outerHeight(true));
		if(testimonyHeight < outerHeight){
			testimonyHeight = outerHeight;
		}
		if(e == $(".custumer-success__box .custumer-success__testimony").length -1){
			$(".custumer-success__box .custumer-success__testimony").css("height", testimonyHeight);
			testimonyHeight = 0;
		}
	});
	*/
	var benefitHeight = 0;
	$(".careers--benefits .benefit").each(function(e){
		var outerHeight = parseInt($(this).outerHeight());
		if(benefitHeight < outerHeight){
			benefitHeight = outerHeight;
		}
		if(e == $(".careers--benefits .benefit").length -1){
			$(".careers--benefits .benefit").css("height", benefitHeight);
			benefitHeight = 0;
		}
	});
	$(".job__filter").on("change", function(){
		var val = $(this).val();
		if (val == "all") {
			$(".comeet-g-r").show();
			$(".comeet-position").fadeIn(500);
		}else{
			$(".comeet-position").hide();
			hideJobCategory(val);
		}
	});
	$('.comeet-position .comeet-position-header').on("click", function(){
		if($(this).hasClass("open")){
			$(this).siblings(".comeet-position-description").fadeOut(300);
			$(this).removeClass("open");
		}else{
			$('.comeet-position .comeet-position-description').hide();
			$('.comeet-position .comeet-position-header').removeClass("open");
			$(this).siblings(".comeet-position-description").fadeIn(500);	
			$(this).addClass("open");
		}
		
	});

});
function hideJobCategory(val){
	var count = 0;
	$(".comeet-groups-list .comeet-g-r").each(function(){
		var check = true;
		$(this).show();
		$(this).find('.comeet-position').each(function(){
			if ($(this).hasClass(val)){
				$(this).fadeIn(500);
				check = false;
			}
		});
		if (check) $(this).hide();
		if (count == $(".comeet-groups-list .comeet-g-r").length) return false;
		count++;
	})
}