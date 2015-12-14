var loginModule = angular.module('loginModule', []);

loginModule.controller('loginController', ['$scope', '$location', function($scope, $location) {

	console.log('loginModule');

	$('.btn-login').on('click', function() {
	  if($('.error-msg').is(':animated'))
	  {
	  	console.log('animation not over');
	      return false;
	  }

	  console.log("inside validate");
	  var flag = true;

	  var uname = $('#username').val();
	  var pwd = $('#pwd').val();

	  //console.log(uname + pwd);
	  //return false;
	  if(uname == null || uname == "") {
	    flag = false;
	  }
	  else if(pwd == null || pwd == "") {
	    flag = false;
	  }
	  
	  if(!flag) {   

	    $('.error-msg').stop().fadeIn({queue: false, duration: 1000});
	    $('.error-msg').animate({ top: "-95px" }, 1000);
	  }
	  else {
	    $('#myModal').modal('show');
	  }

	});

	$('.form-control').on('focus', function() {
	  $('.error-msg').stop().fadeOut(1000).queue( function() {
	  	$(this).css('top', '200px');
	  });
	});

	$scope.goHome = function() {
		//$('.modal-backdrop').remove();
		//$('body').removeClass('modal-open');
		//$location.path('/home');
	}

}]);


	function goHome() {
		window.location.assign("./modules/home/home.html");
	}
