$(window).on('load', function() {
   $('.preloader').fadeOut('slow');
});

$(document).ready(function(){

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 50);
		return false;
	});

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
		    $(".navbar").css('border-bottom', '1px solid lightgray');
		    $(".navbar").css('transition', '0.5s');
		}else {
			$(".navbar").css('border-bottom', '1px solid white');
			$(".navbar").css('transition', '0.5s');
		}
	}

		
});