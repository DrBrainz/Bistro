/**===
*Author: Edwin Asare
*Author URL: 
*Author Email: brainztech@gmail.com
*Copyright(c) 2018 
*This is a Premium resturant theme for your resturant,you may edit it per your needs.
*Contact the author if you want more premium themes for your project.


**I used this to add some css on the navbar when you scroll down the page.

*You can add your own style per your needs.

 ===*/

$(document).ready( function() {
	$(window).scroll( function() {
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$('.welcome').css('color', '#fff');
		} else {
			$('.welcome').css('color', 'initial');
		}

		if (scroll > 50) {
			$('.learn-more').css('color', '#fff');
		} else {
			$('.learn-more').css('color', 'initial');
		}
	});
     
});