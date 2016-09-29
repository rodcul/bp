/*
*
*	Resources
*/
var numOfResources = 12;
var numOfSearch = 0;
var minHeight = 0;
var currentCat;
var currentUrl;
var xhr;
$(document).ready(function(){
	currentCat = $(".list--resources").attr("data-category");
	currentUrl = $(".list--resources").attr("data-url");
	resourceHeight();
	$(".resources--category-selection_dropdown").on("change",function(){
		var title = $.trim($(this).find("option:selected").text());
		//console.log( title );

		if ( title == "Blog" ) {
			//window.location.href = $(this).find("option:selected").attr("data-url");
			//window.open($(this).find("option:selected").attr("data-url"), '_blank');
			window.open('https://bigpanda.io/blog/', '_blank');
			return;
		};
		$(".list--resources").empty();
		$(".list--resources").append('<div class="resources-searching"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="100" height="87" viewBox="0 0 506.93 442.4" enable-background="new 0 0 506.93 442.402" xml:space="preserve"><defs><rect width="506.93" height="442.4"/></defs><clipPath><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M502.29 174.76c-0.26-0.07-17.53-5.65-53.37-7.82l-10.13-35.92 25.44-23.4c23.1-24.75 21.76-63.53-3.01-86.62l-4.84-4.53c-24.75-23.09-63.55-21.74-86.64 3.01l-21.92 23.49L253.52 22.96l-99.56 19.86 -21.78-23.35C109.08-5.27 70.29-6.62 45.54 16.47l-4.85 4.53c-24.74 23.09-26.09 61.87-3 86.62l25.45 23.41 -10.16 36.24c-32.76 2.37-48.09 7.43-48.31 7.5 -3.38 0.97-4.77 4.39-4.65 7.35l4.04 28.98 1.74 0.93c5.57 2.95 6.98 7.41 14.53 33.81l1.34 4.65c8.22 28.64 15.1 41.19 28.7 50.97l23.15 83.57 116.86 57.39h63.16 63.16l116.86-57.39 18.24-80.43c0.2-0.12 0.43-0.21 0.63-0.35 16.5-10.27 23.89-22.32 32.89-53.77l1.35-4.71c7.54-26.34 8.95-30.78 14.52-33.73l1.74-0.93 4-28.57 0.03-0.4C507.03 179.15 505.66 175.73 502.29 174.76M108.85 81.32l144.66-31.78 139.55 31.78 27.88 84.76c-1.54 0-3.09-0.01-4.65-0.01 -2.86 0-5.73 0.05-8.57 0.11 -20.5 0.35-41.13 2-61.68 4.92 -10.34 1.45-20.64 3.21-30.91 5.31 -9.35 2.02-16.89 3.91-23.55 5.57 -14.69 3.67-24.38 6.09-38.06 6.12 -13.72-0.03-23.43-2.45-38.15-6.12 -6.66-1.66-14.19-3.54-23.6-5.58 -11.57-2.37-23.19-4.31-34.85-5.85 -20.94-2.8-41.96-4.29-62.82-4.43 -1.15-0.01-2.29-0.04-3.45-0.04 -3.3 0-6.54 0.03-9.68 0.09L108.85 81.32zM63.93 288.12c-5.98-4.28-10.83-10.04-14.42-17.14 -3.5-6.88-5.85-14.93-7.21-24.6 -4.44-32.09 0.21-42.88 3.38-46.46 1.96-2.22 4.93-5.08 10.51-7.49 5.62-2.43 13.12-4.11 22.92-5.15 7.49-0.79 16.48-1.19 26.72-1.19 8.28 0 17.65 0.26 27.69 0.77 0.33 0.03 33.63 3 52.82 9.64 9.43 3.25 22.28 8.55 24.95 16.98 2.76 8.64 0.62 29.69-4.18 40.97 -4.68 11.11-17.19 26.29-27.33 33.15 -6.39 4.33-24.34 14.39-53.02 14.39l-0.68 0c-21.83-0.12-39.33-2.92-52-8.32C70.17 292.02 66.76 290.15 63.93 288.12M411.46 369.38l-100.75 52.02h-57.19 -57.2l-105.86-52.02L76.38 312.57c13.75 3.44 30.8 5.5 48.04 5.5 7.87 0 15.49-0.41 22.67-1.27 41.3-4.88 61.96-30.79 65.69-35.94 8.21-11.35 17.46-31.55 25.42-49.83 2.82-6.44 13.83-6.74 15.3-6.74l1.17 0.03c3.13 0.19 11.67 1.19 14.07 6.71 7.95 18.29 17.23 38.5 25.42 49.83 3.72 5.15 24.37 31.07 65.69 35.95 7.17 0.86 14.8 1.28 22.66 1.28 15.08 0 30.02-1.61 42.73-4.3L411.46 369.38zM464.63 246.38c-1.81 13.01-5.48 23.22-11.2 31.24 -2.96 4.15-6.45 7.68-10.39 10.5 -4.2 3-9.4 5.54-15.45 7.57 -12.06 4.08-27.77 6.2-46.71 6.31l-0.68 0c-28.72 0-46.64-10.06-53.01-14.39 -10.12-6.84-22.66-22.03-27.37-33.15 -4.77-11.28-6.91-32.34-4.16-40.97 2.68-8.42 15.52-13.72 24.95-16.98 19.17-6.64 52.48-9.61 52.67-9.63 10.1-0.51 19.42-0.77 27.7-0.77 8.09 0 15.45 0.25 21.88 0.74 9.54 0.74 17.09 2 23.07 3.83 8.68 2.68 12.63 6.19 15.35 9.26C464.43 203.5 469.07 214.28 464.63 246.38"/><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M259.11 361.08c13.73-1.2 47.33-6.42 44.37-26.87 -1.08-6.58-6.02-20.99-50.01-11.59 -43.99-9.4-48.93 5.02-50.01 11.59 -2.96 20.44 30.59 25.67 44.34 26.87v19.88h-44.04l7.76 13.76h83.91l7.76-13.76h-44.07V361.08z"/></svg><div class="searching-text">Loading<span>.</span><span>.</span><span>.</span><span>.</span></div></div></div><div class="clearfix list--resources--cover">');
		resetSearchResources(currentUrl, $(this).val());
	});
	//search Events
	$(".resources--category-selection_searchform input").keyup(function(e){
		if (e.keyCode != '13') return;
		var search = $(this).val();
		var url = $(this).attr("data-url");
		searchResources(search,url);
	});

	$(".resource-search--button").on("click",function(){
		if( $(".resources--category-selection_searchform input").val() == "" ){
			$.when( $('.resources--category-selection').fadeOut(250) ).done( function(){
				$(".resources--category-search").addClass('active').fadeIn(250);
			});
		} else {
			var search = $(".resources--category-selection_searchform input").val();
			var url = $(".resources--category-selection_searchform input").attr("data-url");
			searchResources(search,url);
		}
	});
	$("i.icon-back-arrows").on("click",function(){
		$.when( $(".resources--category-search").removeAttr('style').removeClass('active').fadeOut(250) ).done( function(){
			$('.resources--category-selection').fadeIn(250);
			$(".resources--category-selection_searchform input").val("");
		});
	});
	/*
	$(".resources--category-selection_searchform svg").on("click",function(){
		if( $(".resources--category-selection_searchform input").val() == "" ){
			$.when( $('.resources--category-selection').fadeOut(2000) ).done( function(){
				//$(".resources--category-search").addClass('active').find('input').animate({"margin-left":"0%"}, "slow");
				//$(".resources--category-search").addClass('active').find('input,i').animate({"margin-left":"0%"}, "slow");
				$(".resources--category-search").addClass('active').fadeIn(2000);
			});
		} else {
			var search = $(".resources--category-selection_searchform input").val();
			var url = $(".resources--category-selection_searchform input").attr("data-url");
			searchResources(search,url);
		}
	});
	$("i.icon-back-arrows").on("click",function(){
		$.when( $(".resources--category-search").removeAttr('style').removeClass('active') ).done( function(){
			//$(".resources--category-search").addClass('active').find('input').animate({"margin-left":"0%"}, "slow");
			$('.resources--category-selection').fadeIn(2000);
			$(".resources--category-selection_searchform input").val("");
		});
	});
	*/
	$(".list--resources").on("click",".list--resources__seemore--searchbtn", function(){
		var search = $(this).attr("data-search");
		var url = $(this).attr("data-url");
		//console.log(search,url);
		searchLoadMore(search,url);
	})

	//LOAD MORE BLOGS
	$(".list--resources").on("click",".list--resources__seemore--btn", function(){
		var category = $(".resources--category-selection_dropdown").val();
		$.ajax({
		  url: currentUrl,
		  method: 'POST',
		  data: {
		  	action : "loadmore_resources",
		  	category : category,
		  	offset : numOfResources
		  }
		}).done(function(data) {
		 	data = JSON.parse(data);
		 	$(".list--resources--cover").append(data.html);
		 	if(data.postadd < 13){
		 		$(".list--resources__seemore").remove();
		 	}else{
		 		numOfResources += data.postadd - 1;
		 	}
		 	resourceHeight();
		});
	});

	//News and Press slider
	$(".recent--news--slider").slick({
		dots: false,
		infinite: false,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		prevArrow: '<div class="slick-previous-button"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="10" height="16" viewBox="105.66 0 300.68 512" enable-background="new 105.657 -0.002 300.683 511.999" xml:space="preserve"><path fill="#A1A1A1" d="M205.9 256L398.67 63.2c10.23-10.21 10.23-26.79 0-37.02L380.16 7.66c-10.22-10.22-26.79-10.22-37.02 0l-229.82 229.83c-10.22 10.22-10.22 26.79 0 37.02l229.82 229.82c10.22 10.22 26.8 10.22 37.02 0l18.51-18.51c10.23-10.23 10.23-26.81 0-37.02L205.9 256z"/></svg></div>',
		nextArrow: '<div class="slick-next-button"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="10" height="16" viewBox="105.66 0 300.68 512" enable-background="new 105.657 -0.002 300.683 511.999" xml:space="preserve"><path fill="#A1A1A1" d="M306.1 256L113.33 448.8c-10.23 10.21-10.23 26.8 0 37.02l18.51 18.51c10.22 10.22 26.79 10.22 37.02 0l229.82-229.83c10.22-10.22 10.22-26.79 0-37.02L168.85 7.67c-10.22-10.22-26.79-10.22-37.02 0l-18.51 18.51c-10.23 10.23-10.23 26.81 0 37.02L306.1 256z"/></svg></div>',
		responsive: [
		  {
		    breakpoint: 769,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		    }
		  }
		],
	});
	//resourceRecentNewsHeight();
	//Press coverages excerpts
	pressCoveragesPressExcerpt();
	//load more press coverages
	$(".list--press__seemore--btn").on("click", function(){
		$(".press-hidden").fadeIn(500);
		$(".list--press__seemore").hide();
	});

});
//==================================================================
//			SEARCH AJAX
//==================================================================
function searchResources(search,url){
	//reset search when the string is empty
	if (search.length  == 0) {
		$(".list--resources").empty();
		$(".list--resources").append('<div class="resources-searching"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="100" height="87" viewBox="0 0 506.93 442.4" enable-background="new 0 0 506.93 442.402" xml:space="preserve"><defs><rect width="506.93" height="442.4"/></defs><clipPath><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M502.29 174.76c-0.26-0.07-17.53-5.65-53.37-7.82l-10.13-35.92 25.44-23.4c23.1-24.75 21.76-63.53-3.01-86.62l-4.84-4.53c-24.75-23.09-63.55-21.74-86.64 3.01l-21.92 23.49L253.52 22.96l-99.56 19.86 -21.78-23.35C109.08-5.27 70.29-6.62 45.54 16.47l-4.85 4.53c-24.74 23.09-26.09 61.87-3 86.62l25.45 23.41 -10.16 36.24c-32.76 2.37-48.09 7.43-48.31 7.5 -3.38 0.97-4.77 4.39-4.65 7.35l4.04 28.98 1.74 0.93c5.57 2.95 6.98 7.41 14.53 33.81l1.34 4.65c8.22 28.64 15.1 41.19 28.7 50.97l23.15 83.57 116.86 57.39h63.16 63.16l116.86-57.39 18.24-80.43c0.2-0.12 0.43-0.21 0.63-0.35 16.5-10.27 23.89-22.32 32.89-53.77l1.35-4.71c7.54-26.34 8.95-30.78 14.52-33.73l1.74-0.93 4-28.57 0.03-0.4C507.03 179.15 505.66 175.73 502.29 174.76M108.85 81.32l144.66-31.78 139.55 31.78 27.88 84.76c-1.54 0-3.09-0.01-4.65-0.01 -2.86 0-5.73 0.05-8.57 0.11 -20.5 0.35-41.13 2-61.68 4.92 -10.34 1.45-20.64 3.21-30.91 5.31 -9.35 2.02-16.89 3.91-23.55 5.57 -14.69 3.67-24.38 6.09-38.06 6.12 -13.72-0.03-23.43-2.45-38.15-6.12 -6.66-1.66-14.19-3.54-23.6-5.58 -11.57-2.37-23.19-4.31-34.85-5.85 -20.94-2.8-41.96-4.29-62.82-4.43 -1.15-0.01-2.29-0.04-3.45-0.04 -3.3 0-6.54 0.03-9.68 0.09L108.85 81.32zM63.93 288.12c-5.98-4.28-10.83-10.04-14.42-17.14 -3.5-6.88-5.85-14.93-7.21-24.6 -4.44-32.09 0.21-42.88 3.38-46.46 1.96-2.22 4.93-5.08 10.51-7.49 5.62-2.43 13.12-4.11 22.92-5.15 7.49-0.79 16.48-1.19 26.72-1.19 8.28 0 17.65 0.26 27.69 0.77 0.33 0.03 33.63 3 52.82 9.64 9.43 3.25 22.28 8.55 24.95 16.98 2.76 8.64 0.62 29.69-4.18 40.97 -4.68 11.11-17.19 26.29-27.33 33.15 -6.39 4.33-24.34 14.39-53.02 14.39l-0.68 0c-21.83-0.12-39.33-2.92-52-8.32C70.17 292.02 66.76 290.15 63.93 288.12M411.46 369.38l-100.75 52.02h-57.19 -57.2l-105.86-52.02L76.38 312.57c13.75 3.44 30.8 5.5 48.04 5.5 7.87 0 15.49-0.41 22.67-1.27 41.3-4.88 61.96-30.79 65.69-35.94 8.21-11.35 17.46-31.55 25.42-49.83 2.82-6.44 13.83-6.74 15.3-6.74l1.17 0.03c3.13 0.19 11.67 1.19 14.07 6.71 7.95 18.29 17.23 38.5 25.42 49.83 3.72 5.15 24.37 31.07 65.69 35.95 7.17 0.86 14.8 1.28 22.66 1.28 15.08 0 30.02-1.61 42.73-4.3L411.46 369.38zM464.63 246.38c-1.81 13.01-5.48 23.22-11.2 31.24 -2.96 4.15-6.45 7.68-10.39 10.5 -4.2 3-9.4 5.54-15.45 7.57 -12.06 4.08-27.77 6.2-46.71 6.31l-0.68 0c-28.72 0-46.64-10.06-53.01-14.39 -10.12-6.84-22.66-22.03-27.37-33.15 -4.77-11.28-6.91-32.34-4.16-40.97 2.68-8.42 15.52-13.72 24.95-16.98 19.17-6.64 52.48-9.61 52.67-9.63 10.1-0.51 19.42-0.77 27.7-0.77 8.09 0 15.45 0.25 21.88 0.74 9.54 0.74 17.09 2 23.07 3.83 8.68 2.68 12.63 6.19 15.35 9.26C464.43 203.5 469.07 214.28 464.63 246.38"/><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M259.11 361.08c13.73-1.2 47.33-6.42 44.37-26.87 -1.08-6.58-6.02-20.99-50.01-11.59 -43.99-9.4-48.93 5.02-50.01 11.59 -2.96 20.44 30.59 25.67 44.34 26.87v19.88h-44.04l7.76 13.76h83.91l7.76-13.76h-44.07V361.08z"/></svg><div class="searching-text">Resetting<span>.</span><span>.</span><span>.</span><span>.</span></div></div></div><div class="clearfix list--resources--cover">');
		resetSearchResources(currentUrl,currentCat);
	};
	if (search.length < 3) return;
	numOfSearch = 0;
	$(".list--resources").empty();
	$(".list--resources").append('<div class="resources-searching"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="100" height="87" viewBox="0 0 506.93 442.4" enable-background="new 0 0 506.93 442.402" xml:space="preserve"><defs><rect width="506.93" height="442.4"/></defs><clipPath><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M502.29 174.76c-0.26-0.07-17.53-5.65-53.37-7.82l-10.13-35.92 25.44-23.4c23.1-24.75 21.76-63.53-3.01-86.62l-4.84-4.53c-24.75-23.09-63.55-21.74-86.64 3.01l-21.92 23.49L253.52 22.96l-99.56 19.86 -21.78-23.35C109.08-5.27 70.29-6.62 45.54 16.47l-4.85 4.53c-24.74 23.09-26.09 61.87-3 86.62l25.45 23.41 -10.16 36.24c-32.76 2.37-48.09 7.43-48.31 7.5 -3.38 0.97-4.77 4.39-4.65 7.35l4.04 28.98 1.74 0.93c5.57 2.95 6.98 7.41 14.53 33.81l1.34 4.65c8.22 28.64 15.1 41.19 28.7 50.97l23.15 83.57 116.86 57.39h63.16 63.16l116.86-57.39 18.24-80.43c0.2-0.12 0.43-0.21 0.63-0.35 16.5-10.27 23.89-22.32 32.89-53.77l1.35-4.71c7.54-26.34 8.95-30.78 14.52-33.73l1.74-0.93 4-28.57 0.03-0.4C507.03 179.15 505.66 175.73 502.29 174.76M108.85 81.32l144.66-31.78 139.55 31.78 27.88 84.76c-1.54 0-3.09-0.01-4.65-0.01 -2.86 0-5.73 0.05-8.57 0.11 -20.5 0.35-41.13 2-61.68 4.92 -10.34 1.45-20.64 3.21-30.91 5.31 -9.35 2.02-16.89 3.91-23.55 5.57 -14.69 3.67-24.38 6.09-38.06 6.12 -13.72-0.03-23.43-2.45-38.15-6.12 -6.66-1.66-14.19-3.54-23.6-5.58 -11.57-2.37-23.19-4.31-34.85-5.85 -20.94-2.8-41.96-4.29-62.82-4.43 -1.15-0.01-2.29-0.04-3.45-0.04 -3.3 0-6.54 0.03-9.68 0.09L108.85 81.32zM63.93 288.12c-5.98-4.28-10.83-10.04-14.42-17.14 -3.5-6.88-5.85-14.93-7.21-24.6 -4.44-32.09 0.21-42.88 3.38-46.46 1.96-2.22 4.93-5.08 10.51-7.49 5.62-2.43 13.12-4.11 22.92-5.15 7.49-0.79 16.48-1.19 26.72-1.19 8.28 0 17.65 0.26 27.69 0.77 0.33 0.03 33.63 3 52.82 9.64 9.43 3.25 22.28 8.55 24.95 16.98 2.76 8.64 0.62 29.69-4.18 40.97 -4.68 11.11-17.19 26.29-27.33 33.15 -6.39 4.33-24.34 14.39-53.02 14.39l-0.68 0c-21.83-0.12-39.33-2.92-52-8.32C70.17 292.02 66.76 290.15 63.93 288.12M411.46 369.38l-100.75 52.02h-57.19 -57.2l-105.86-52.02L76.38 312.57c13.75 3.44 30.8 5.5 48.04 5.5 7.87 0 15.49-0.41 22.67-1.27 41.3-4.88 61.96-30.79 65.69-35.94 8.21-11.35 17.46-31.55 25.42-49.83 2.82-6.44 13.83-6.74 15.3-6.74l1.17 0.03c3.13 0.19 11.67 1.19 14.07 6.71 7.95 18.29 17.23 38.5 25.42 49.83 3.72 5.15 24.37 31.07 65.69 35.95 7.17 0.86 14.8 1.28 22.66 1.28 15.08 0 30.02-1.61 42.73-4.3L411.46 369.38zM464.63 246.38c-1.81 13.01-5.48 23.22-11.2 31.24 -2.96 4.15-6.45 7.68-10.39 10.5 -4.2 3-9.4 5.54-15.45 7.57 -12.06 4.08-27.77 6.2-46.71 6.31l-0.68 0c-28.72 0-46.64-10.06-53.01-14.39 -10.12-6.84-22.66-22.03-27.37-33.15 -4.77-11.28-6.91-32.34-4.16-40.97 2.68-8.42 15.52-13.72 24.95-16.98 19.17-6.64 52.48-9.61 52.67-9.63 10.1-0.51 19.42-0.77 27.7-0.77 8.09 0 15.45 0.25 21.88 0.74 9.54 0.74 17.09 2 23.07 3.83 8.68 2.68 12.63 6.19 15.35 9.26C464.43 203.5 469.07 214.28 464.63 246.38"/><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M259.11 361.08c13.73-1.2 47.33-6.42 44.37-26.87 -1.08-6.58-6.02-20.99-50.01-11.59 -43.99-9.4-48.93 5.02-50.01 11.59 -2.96 20.44 30.59 25.67 44.34 26.87v19.88h-44.04l7.76 13.76h83.91l7.76-13.76h-44.07V361.08z"/></svg><div class="searching-text">Searching<span>.</span><span>.</span><span>.</span><span>.</span></div></div></div><div class="clearfix list--resources--cover">');
	$(".resources--category-selection_dropdown .results").remove();
	$(".resources--category-selection_dropdown").append("<option class='results' selected>Search Results</option>");
	try{
		xhr.abort();
	}catch(e){
		//do nothing
	}
	xhr = $.ajax({
	  url: url,
	  method: 'POST',
	  data: {
	  	action : "search_resources",
	  	//category : category,
	  	offset : numOfSearch,
	  	search : search,
	  }
	}).done(function(data){
		data = JSON.parse(data);
		$(".list--resources").empty();
		if(data.postadd == 0){
			$(".list--resources").append('<div class="clearfix list--resources--cover"><div class="no-resources-found"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="100" height="87" viewBox="0 0 506.93 442.4" enable-background="new 0 0 506.93 442.402" xml:space="preserve"><defs><rect width="506.93" height="442.4"/></defs><clipPath><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M502.29 174.76c-0.26-0.07-17.53-5.65-53.37-7.82l-10.13-35.92 25.44-23.4c23.1-24.75 21.76-63.53-3.01-86.62l-4.84-4.53c-24.75-23.09-63.55-21.74-86.64 3.01l-21.92 23.49L253.52 22.96l-99.56 19.86 -21.78-23.35C109.08-5.27 70.29-6.62 45.54 16.47l-4.85 4.53c-24.74 23.09-26.09 61.87-3 86.62l25.45 23.41 -10.16 36.24c-32.76 2.37-48.09 7.43-48.31 7.5 -3.38 0.97-4.77 4.39-4.65 7.35l4.04 28.98 1.74 0.93c5.57 2.95 6.98 7.41 14.53 33.81l1.34 4.65c8.22 28.64 15.1 41.19 28.7 50.97l23.15 83.57 116.86 57.39h63.16 63.16l116.86-57.39 18.24-80.43c0.2-0.12 0.43-0.21 0.63-0.35 16.5-10.27 23.89-22.32 32.89-53.77l1.35-4.71c7.54-26.34 8.95-30.78 14.52-33.73l1.74-0.93 4-28.57 0.03-0.4C507.03 179.15 505.66 175.73 502.29 174.76M108.85 81.32l144.66-31.78 139.55 31.78 27.88 84.76c-1.54 0-3.09-0.01-4.65-0.01 -2.86 0-5.73 0.05-8.57 0.11 -20.5 0.35-41.13 2-61.68 4.92 -10.34 1.45-20.64 3.21-30.91 5.31 -9.35 2.02-16.89 3.91-23.55 5.57 -14.69 3.67-24.38 6.09-38.06 6.12 -13.72-0.03-23.43-2.45-38.15-6.12 -6.66-1.66-14.19-3.54-23.6-5.58 -11.57-2.37-23.19-4.31-34.85-5.85 -20.94-2.8-41.96-4.29-62.82-4.43 -1.15-0.01-2.29-0.04-3.45-0.04 -3.3 0-6.54 0.03-9.68 0.09L108.85 81.32zM63.93 288.12c-5.98-4.28-10.83-10.04-14.42-17.14 -3.5-6.88-5.85-14.93-7.21-24.6 -4.44-32.09 0.21-42.88 3.38-46.46 1.96-2.22 4.93-5.08 10.51-7.49 5.62-2.43 13.12-4.11 22.92-5.15 7.49-0.79 16.48-1.19 26.72-1.19 8.28 0 17.65 0.26 27.69 0.77 0.33 0.03 33.63 3 52.82 9.64 9.43 3.25 22.28 8.55 24.95 16.98 2.76 8.64 0.62 29.69-4.18 40.97 -4.68 11.11-17.19 26.29-27.33 33.15 -6.39 4.33-24.34 14.39-53.02 14.39l-0.68 0c-21.83-0.12-39.33-2.92-52-8.32C70.17 292.02 66.76 290.15 63.93 288.12M411.46 369.38l-100.75 52.02h-57.19 -57.2l-105.86-52.02L76.38 312.57c13.75 3.44 30.8 5.5 48.04 5.5 7.87 0 15.49-0.41 22.67-1.27 41.3-4.88 61.96-30.79 65.69-35.94 8.21-11.35 17.46-31.55 25.42-49.83 2.82-6.44 13.83-6.74 15.3-6.74l1.17 0.03c3.13 0.19 11.67 1.19 14.07 6.71 7.95 18.29 17.23 38.5 25.42 49.83 3.72 5.15 24.37 31.07 65.69 35.95 7.17 0.86 14.8 1.28 22.66 1.28 15.08 0 30.02-1.61 42.73-4.3L411.46 369.38zM464.63 246.38c-1.81 13.01-5.48 23.22-11.2 31.24 -2.96 4.15-6.45 7.68-10.39 10.5 -4.2 3-9.4 5.54-15.45 7.57 -12.06 4.08-27.77 6.2-46.71 6.31l-0.68 0c-28.72 0-46.64-10.06-53.01-14.39 -10.12-6.84-22.66-22.03-27.37-33.15 -4.77-11.28-6.91-32.34-4.16-40.97 2.68-8.42 15.52-13.72 24.95-16.98 19.17-6.64 52.48-9.61 52.67-9.63 10.1-0.51 19.42-0.77 27.7-0.77 8.09 0 15.45 0.25 21.88 0.74 9.54 0.74 17.09 2 23.07 3.83 8.68 2.68 12.63 6.19 15.35 9.26C464.43 203.5 469.07 214.28 464.63 246.38"/><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M259.11 361.08c13.73-1.2 47.33-6.42 44.37-26.87 -1.08-6.58-6.02-20.99-50.01-11.59 -43.99-9.4-48.93 5.02-50.01 11.59 -2.96 20.44 30.59 25.67 44.34 26.87v19.88h-44.04l7.76 13.76h83.91l7.76-13.76h-44.07V361.08z"/></svg><div class="no-resources-found-text"><b>NOTHING TO SHOW</b>please check your search string and try again</div></div></div>');
			return;
		}
		$(".list--resources").append('<div class="clearfix list--resources--cover">'+data.html+'</div>');
		if(data.postadd > 12){
			$(".list--resources").append('<div class="list--resources__seemore"><div class="list--resources__seemore--searchbtn" data-search="'+ search +'" data-url="'+ url +'">See more</div></div>');
			numOfSearch += 12;
		}
		resourceHeight();
	});
}
//==================================================================
//			LOAD MORE SEARCH
//==================================================================
function searchLoadMore(search,url){
	if (search.length < 3) return;
	try{
		xhr.abort();
	}catch(e){
		//do nothing
	}
	xhr = $.ajax({
	  url: url,
	  method: 'POST',
	  data: {
	  	action : "search_resources",
	  	//category : category,
	  	offset : numOfSearch,
	  	search : search,
	  }
	}).done(function(data){
		data = JSON.parse(data);
		$(".list--resources--cover").append(data.html);
		$(".list--resources__seemore").remove();
		if(data.postadd > 12){
			$(".list--resources").append('<div class="list--resources__seemore"><div class="list--resources__seemore--searchbtn" data-search="'+ search +'" data-url="'+ url +'">See more</div></div>');
			numOfSearch += 12;
		}
		resourceHeight();
	});
}

//==================================================================
//	Make press coverages excerpt to be same height
//==================================================================
function pressCoveragesPressExcerpt(){
	//if($(".resources--press--coverages").width()+15 > 768){
		$(".list--press--coverages .press").each(function(e){
			var outerHeight = parseInt($(this).find(".press__excerpt").outerHeight());
			if(minHeight < outerHeight){
				minHeight = outerHeight;
			}
			if(e == $(".list--press--coverages .press").length -1){
				$(".list--press--coverages .press .press__excerpt").css("min-height", minHeight);
				minHeight = 0;
			}
		});
	//}
}
//==================================================================
//			RESET SEARCH AJAX
//==================================================================
function resetSearchResources(ajaxUrl,mainCat){
	try{
		xhr.abort();
	}catch(e){
		//do nothing
	}
	xhr = $.ajax({
	  url: ajaxUrl,
	  method: 'POST',
	  data: {
	  	action : "loadmore_resources",
	  	category : mainCat,
	  	offset : 0
	  }
	}).done(function(data) {
	 	data = JSON.parse(data);
	 	numOfResources = 0;
	 	$(".list--resources").empty();
	 	if(data.postadd == 0){
	 		$(".list--resources").append('<div class="clearfix list--resources--cover"><div class="no-resources-found"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="100" height="87" viewBox="0 0 506.93 442.4" enable-background="new 0 0 506.93 442.402" xml:space="preserve"><defs><rect width="506.93" height="442.4"/></defs><clipPath><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M502.29 174.76c-0.26-0.07-17.53-5.65-53.37-7.82l-10.13-35.92 25.44-23.4c23.1-24.75 21.76-63.53-3.01-86.62l-4.84-4.53c-24.75-23.09-63.55-21.74-86.64 3.01l-21.92 23.49L253.52 22.96l-99.56 19.86 -21.78-23.35C109.08-5.27 70.29-6.62 45.54 16.47l-4.85 4.53c-24.74 23.09-26.09 61.87-3 86.62l25.45 23.41 -10.16 36.24c-32.76 2.37-48.09 7.43-48.31 7.5 -3.38 0.97-4.77 4.39-4.65 7.35l4.04 28.98 1.74 0.93c5.57 2.95 6.98 7.41 14.53 33.81l1.34 4.65c8.22 28.64 15.1 41.19 28.7 50.97l23.15 83.57 116.86 57.39h63.16 63.16l116.86-57.39 18.24-80.43c0.2-0.12 0.43-0.21 0.63-0.35 16.5-10.27 23.89-22.32 32.89-53.77l1.35-4.71c7.54-26.34 8.95-30.78 14.52-33.73l1.74-0.93 4-28.57 0.03-0.4C507.03 179.15 505.66 175.73 502.29 174.76M108.85 81.32l144.66-31.78 139.55 31.78 27.88 84.76c-1.54 0-3.09-0.01-4.65-0.01 -2.86 0-5.73 0.05-8.57 0.11 -20.5 0.35-41.13 2-61.68 4.92 -10.34 1.45-20.64 3.21-30.91 5.31 -9.35 2.02-16.89 3.91-23.55 5.57 -14.69 3.67-24.38 6.09-38.06 6.12 -13.72-0.03-23.43-2.45-38.15-6.12 -6.66-1.66-14.19-3.54-23.6-5.58 -11.57-2.37-23.19-4.31-34.85-5.85 -20.94-2.8-41.96-4.29-62.82-4.43 -1.15-0.01-2.29-0.04-3.45-0.04 -3.3 0-6.54 0.03-9.68 0.09L108.85 81.32zM63.93 288.12c-5.98-4.28-10.83-10.04-14.42-17.14 -3.5-6.88-5.85-14.93-7.21-24.6 -4.44-32.09 0.21-42.88 3.38-46.46 1.96-2.22 4.93-5.08 10.51-7.49 5.62-2.43 13.12-4.11 22.92-5.15 7.49-0.79 16.48-1.19 26.72-1.19 8.28 0 17.65 0.26 27.69 0.77 0.33 0.03 33.63 3 52.82 9.64 9.43 3.25 22.28 8.55 24.95 16.98 2.76 8.64 0.62 29.69-4.18 40.97 -4.68 11.11-17.19 26.29-27.33 33.15 -6.39 4.33-24.34 14.39-53.02 14.39l-0.68 0c-21.83-0.12-39.33-2.92-52-8.32C70.17 292.02 66.76 290.15 63.93 288.12M411.46 369.38l-100.75 52.02h-57.19 -57.2l-105.86-52.02L76.38 312.57c13.75 3.44 30.8 5.5 48.04 5.5 7.87 0 15.49-0.41 22.67-1.27 41.3-4.88 61.96-30.79 65.69-35.94 8.21-11.35 17.46-31.55 25.42-49.83 2.82-6.44 13.83-6.74 15.3-6.74l1.17 0.03c3.13 0.19 11.67 1.19 14.07 6.71 7.95 18.29 17.23 38.5 25.42 49.83 3.72 5.15 24.37 31.07 65.69 35.95 7.17 0.86 14.8 1.28 22.66 1.28 15.08 0 30.02-1.61 42.73-4.3L411.46 369.38zM464.63 246.38c-1.81 13.01-5.48 23.22-11.2 31.24 -2.96 4.15-6.45 7.68-10.39 10.5 -4.2 3-9.4 5.54-15.45 7.57 -12.06 4.08-27.77 6.2-46.71 6.31l-0.68 0c-28.72 0-46.64-10.06-53.01-14.39 -10.12-6.84-22.66-22.03-27.37-33.15 -4.77-11.28-6.91-32.34-4.16-40.97 2.68-8.42 15.52-13.72 24.95-16.98 19.17-6.64 52.48-9.61 52.67-9.63 10.1-0.51 19.42-0.77 27.7-0.77 8.09 0 15.45 0.25 21.88 0.74 9.54 0.74 17.09 2 23.07 3.83 8.68 2.68 12.63 6.19 15.35 9.26C464.43 203.5 469.07 214.28 464.63 246.38"/><path clip-path="url(#SVGID_2_)" fill="#231F20" d="M259.11 361.08c13.73-1.2 47.33-6.42 44.37-26.87 -1.08-6.58-6.02-20.99-50.01-11.59 -43.99-9.4-48.93 5.02-50.01 11.59 -2.96 20.44 30.59 25.67 44.34 26.87v19.88h-44.04l7.76 13.76h83.91l7.76-13.76h-44.07V361.08z"/></svg><div class="no-resources-found-text"><b>NOTHING TO SHOW</b>please check your search string and try again</div></div></div>');
	 		return;
	 	}
	 	$(".resources--category-selection_dropdown").val(mainCat);
	 	$(".resources--category-selection_cover .results").remove();
	 	$(".list--resources").append('<div class="clearfix list--resources--cover">'+data.html+'</div>');
	 	if(data.postadd < 13){
	 		$(".list--resources__seemore").remove();
	 	}else{
	 		$(".list--resources").append('<div class="list--resources__seemore"><div class="list--resources__seemore--btn" data-category="'+ currentCat +'" data-url="'+ currentUrl +'">See more</div></div>');
	 		numOfResources += data.postadd - 1;
	 	}
	 	resourceHeight();
	});
}


//==================================================================
//			SEARCH AJAX
//==================================================================
function resourceHeight(){
	var maxHeight = 0;
	$(".resource .resource__excerpt").each(function(e){
		var outerHeight = parseInt($(this).outerHeight());
		if(maxHeight < outerHeight){
			maxHeight = outerHeight;
		}
		if(e == $(".resource .resource__excerpt").length -1){
			console.log("height", maxHeight);
			$(".resource .resource__excerpt").css("height", maxHeight);
			maxHeight = 0;
		}
	})
}

function resourceRecentNewsHeight(){
	var maxHeight = 0;
	if ($(window).width()+15 > 768) {
		$(".recent--news--resource .resource__excerpt").each(function(e){
			var outerHeight = parseInt($(this).outerHeight());
			if(maxHeight < outerHeight){
				maxHeight = outerHeight;
			}
			if(e == $(".recent--news--resource .resource__excerpt").length -1){
				$(".recent--news--resource .resource__excerpt").css("height", maxHeight);
				maxHeight = 0;
			}
		})
	}else{
		$(".recent--news--resource .resource__body").each(function(e){
			var height = parseInt($(this).outerHeight()) + 3;
			$(this).siblings(".resource__header").find(".resource__image").css("height", height);
		})
	};
}




























