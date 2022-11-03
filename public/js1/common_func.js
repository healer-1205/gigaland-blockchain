(function ($) {

	"use strict";

	// Preloader
	$(window).on('load', function () {
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('.slide-animated').addClass('is-transitioned');
		$(window).scroll();
	});

	// Lazy load
	var lazyLoadInstance = new LazyLoad({
	    elements_selector: ".lazy"
	});

	// Sticky nav
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 1) {
			$('.element_to_stick').addClass("sticky");
		} else {
			$('.element_to_stick').removeClass("sticky");
		}
	});
	$(window).scroll();

	// Header background
	$('.background-image').each(function(){
		$(this).css('background-image', $(this).attr('data-background'));
	});

	// Opacity mask
	$('.opacity-mask').each(function(){
		$(this).css('background-color', $(this).attr('data-opacity-mask'));
	});

	// Menu
	$('a.open_close').on("click", function () {
		$('.main-menu').toggleClass('show');
		$('.layer').toggleClass('layer-is-visible');
	});
	$('a.show-submenu').on("click", function () {
		$(this).next().toggleClass("show_normal");
	});

	// Scroll animation
	scrollCue.init({
		duration : 300,
    	interval : -100,
	    percentage : 0.85
	});

	// Jarallax Video
	$('.jarallax').jarallax({
        videoLazyLoading: false,
        videoPlayOnlyVisible: false
    });

	// Carousel categories home page
	$('.featured_carousel').owlCarousel({
	    center: false,
	    loop: false,
	    margin: 25,
	    dots: false,
	    items: 1,
	    nav: false,
	    lazyLoad: true,
	    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
	    responsive: {
	        0: {
	            nav: false,
	            dots: true,
	            items: 1
	        },
	        560: {
	            nav: false,
	            dots: true,
	            items: 2
	        },
	        768: {
	            nav: false,
	            dots: true,
	            items: 2
	        },
	        1025: {
	            nav: true,
	            dots: false,
	            items: 3
	        }
	    }
	});

	// Dark and light mode switcher
	$(function() {
		//check for localStorage, add as browser preference if missing
		if (!localStorage.getItem("mode")) {
		    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		        localStorage.setItem("mode", "light-theme");
		    } else {
		        localStorage.setItem("mode", "dark-theme");
		    }
		}

		//set interface to match localStorage
		if (localStorage.getItem("mode") == "dark-theme") {
		    $("body").addClass("light-theme");
		    $("body").removeClass("dark-theme");
		    document.getElementById("theme_toggle").checked = true;
		} else {
		    $("body").removeClass("light-theme");
		    $("body").addClass("dark-theme");
		    document.getElementById("theme_toggle").checked = false;
		}
		//add toggle
		$("#theme_toggle").on("click", function() {
		    if ($("body").hasClass("dark-theme")) {
		        $("body").removeClass("dark-theme");
		        $("body").addClass("light-theme");
		        localStorage.setItem("mode", "dark-theme");
		    } else {
		        $("body").addClass("dark-theme");
		        $("body").removeClass("light-theme");
		        localStorage.setItem("mode", "light-theme");
		    }
		});
	});

	// Rotate icons
	$(".main_categories a").hover(
		function(){$(this).find("i").toggleClass("rotate-x");}
	);

	// Nice select
	$('.custom_select select').niceSelect();
	
	// Scroll to position
    $('a[href^="#"].btn_scroll').on('click', function (e) {
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 800, 'swing', function () {
				window.location.hash = target;
			});
		});
 
	// Like Icon
    $('.wish_bt').on('click', function(e){
    	e.preventDefault();
		$(this).toggleClass('liked');
	});

    // Tooltip
	 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});
    
    // Countdown offers
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('%DD %H:%M:%S'));
	  });
	});

	// Modal generic
	$('.modal_popup').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
		mainClass: 'my-mfp-zoom-in'
	});

	// Read more 
	$(".content_more").hide();
	    $(".show_hide").on("click", function () {
	        var txt = $(".content_more").is(':visible') ? 'Read More' : 'Read Less';
	        $(this).text(txt);
	        $(this).prev('.content_more').slideToggle(200);
	});

	// Show hide password
	$('#password, #password_sign, #password1, #password2').hidePassword('focus', {
		toggle: {
			className: 'my-toggle'
		}
	});

	// Popup up
    setTimeout(function () {
        $('.popup_wrapper').css({
            "opacity": "1",
            "visibility": "visible"
        });
        $('.popup_close').on("click", function () {
            $(".popup_wrapper").fadeOut(300);
        })
    }, 1500);

    // Scroll to top
	var pxShow = 800; // height on which the button will show
	var scrollSpeed = 500; // how slow / fast you want the button to scroll to top.
	$(window).scroll(function(){
	 if($(window).scrollTop() >= pxShow){
		$("#toTop").addClass('visible');
	 } else {
		$("#toTop").removeClass('visible');
	 }
	});
	$('#toTop').on('click', function(){
	 $('html, body').animate({scrollTop:0}, scrollSpeed);
	 return false;
	});

})(window.jQuery); 