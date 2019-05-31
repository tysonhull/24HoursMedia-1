(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(1000).fadeOut();
	});


	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	
	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

})(jQuery);

/*------------------------------------*\
	Video Gallery (projects)
\*------------------------------------*/




/*------------------------------------*\
	Home Page Text Scroll
\*------------------------------------*/
$(window).on("load",function() {
	$(window).scroll(function() {
	  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
	  $(".fade").each(function() {
		/* Check the location of each desired element */
		var objectBottom = $(this).offset().top + $(this).outerHeight();
		
		/* If the element is completely within bounds of the window, fade it in */
		if (objectBottom < windowBottom) { //object comes into view (scrolling down)
		  if ($(this).css("opacity")==0) {$(this).fadeTo(50,1);}
		} else { //object goes out of view (scrolling up)
		  if ($(this).css("opacity")==1) {$(this).fadeTo(50,0);}
		}
	  });
	}).scroll(); //invoke scroll-handler on page-load
  });

  $(function() {
    $('body').removeClass('fade-out');
});

$(document).ready(function() {

	$('body').css('display', 'none');
	
	$('body').fadeIn(2000);
	
	
	
	$('.link').click(function() {
	
	event.preventDefault();
	
	newLocation = this.href;
	
	$('body').fadeOut(2000, newpage);
	
	});
	
	function newpage() {
	
	window.location = newLocation;
	
	}
	
	});
	


		  
		  

	

