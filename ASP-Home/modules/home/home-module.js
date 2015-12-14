$(function() {
	$('.page-home').fadeIn(1000);
	$('.icon').on('click', function(e) {
		    if($('.user-menu').hasClass('opened')) {
		      $('.user-menu').stop();
		      $('.user-menu').removeClass('opened');
		      $('.user-menu').fadeOut({queue: false, duration: 1000});
		      $('.user-menu').animate({width:'0px', height: '0px', display:'none'}, 1000);
		      
		    }
		    else {
		      var curHeight = $('.user-menu').height();
		      $('.user-menu').css('height', 'auto');
		      var autoHeight = $('.user-menu').height();
		      $('.user-menu').stop();
		      $('.user-menu').addClass('opened');
		      $('.user-menu').fadeIn({queue: false, duration: 1000});
		      $('.user-menu').height(curHeight).animate({width:'200px', height: autoHeight, display:'block'}, 1000);
		    }
	});
});
	function goSitePage() {
		window.location.assign("../../modules/landing-page/landing-page.html")
	}
