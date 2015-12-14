$(function() {
	$('.page-landing').fadeIn(1000);
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

	  setTimeout(function() { 
	      $('.all-devices').fadeIn({queue: false, duration: 1000});
	      $(".all-devices").delay(2000).animate({marginTop: "50px"}, {duration: 1000, queue: false});  
	  }, 500);

	  $('.devices-list li').on('click',  function() {
	    console.log('hit');
	    $('.column').addClass('shifted');
	    $('.page-landing').stop().animate({width:'30%', marginLeft:'0'}, {duration: 1000, queue: true});
	    $('.page-cyclelog').fadeIn({queue: false, duration: 1000}).animate({width:'70%'},{duration: 1000, queue: false})

	    /*var cls = $(this).closest('.devices-list').attr('class').split(' ')[0];
	    console.log("class is: " + cls);
	    var letter = cls.substr(cls.lastIndexOf("-")+1);
	    console.log("letter is: " + letter);*/

	    // $(this).closest('.column').find('h4').attr({"data-toggle": "collapse", "data-target": ".category-"+letter});

	    $('.column1').find('h4').attr({"data-toggle": "collapse", "data-target": ".category-A"});
	    $('.column2').find('h4').attr({"data-toggle": "collapse", "data-target": ".category-B"});
	    $('.column3').find('h4').attr({"data-toggle": "collapse", "data-target": ".category-C"});

	    // $('.category-A').collapse();
	    $(this).closest('.column').find('.devices-list').collapse();
	    $('.devices-list').addClass('collapse');
	    $('.devices-list ul li').css('padding', '0 10px');
	  });

});