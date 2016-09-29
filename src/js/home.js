// home module

var homeModule = (function(window, $) {
	function init() {
		if (window.innerWidth > 640) {
			//sameHeightElements(".home-article .home-article__description", false);
			sameHeightElements(".solution--home .title--solution", false);
		};
		$('.nav__anchor--integrations-js').on('click', function(event) {
			event.preventDefault();

			$('.nav__anchor--integrations-js').removeClass('nav__anchor--integrations-active');

			$(this).addClass('nav__anchor--integrations-active');
		});

		$(".video-modal .modal-background").on("click", function(){
			$(".video-modal").fadeOut(600,function(){
				var src = $(".video-modal iframe").attr("src");
				$(".video-modal iframe").attr("src", "");
			});
		});
		$(".carousell__video .carousel__anchor").on("click", function(){
			$(".video-modal").show().css("display","table");
			$(".video-modal iframe").attr("src", $(".video-modal iframe").attr("data-src")+"&autoplay=1");
			$(".video-modal .video").css({
				top : 100,
				opacity : 0
			}).animate({
				top : 0,
				opacity : 1
			}, 600)
		})
	}

	return {
		init: init
	};
})(window, $);

document.addEventListener('DOMContentLoaded', function() {
	homeModule.init();
});


//==================================================================
//			Learn More Adjust Height
//==================================================================
function sameHeightElements(element, debug){
	var maxHeight = 0;
	$(element).each(function(e){
		var outerHeight = parseInt($(this).outerHeight());
		if (debug) console.log(outerHeight);
		if(maxHeight < outerHeight){
			maxHeight = outerHeight;
		}
		if(e == $(element).length -1){
			$(element).css("min-height", maxHeight);
			maxHeight = 0;
		}
	})
}