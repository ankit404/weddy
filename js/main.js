/*
Author: Dot Themes
*/
(function($) {
    "use strict";

    $('.nav li a.smoothScroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // NAVBAR FIXED
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });
	
	// NAV ON HOVER
	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
	

 
    // PRETTY PHOTO
   	$("a[data-gal^='prettyPhoto']").prettyPhoto(); 

    
    // SLIDER SECTION CAROUSEL
    $('#myCarousel').carousel();
    var winWidth = $(window).innerWidth();
    $(window).resize(function () {

        if ($(window).innerWidth() < winWidth) {
            $('.carousel-inner>.item>img').css({
                'min-width': winWidth, 'width': winWidth
            });
        }
        else {
            winWidth = $(window).innerWidth();
            $('.carousel-inner>.item>img').css({
                'min-width': '', 'width': ''
            });
        }
    });
     
    // STORE CAROUSEL 
      $(".weddy-store-carousel").owlCarousel({
          autoPlay: true, //Set AutoPlay to 3 seconds
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          itemsTablet : [768, 3],
          itemsMobile : [767,1],
          navigation: false,
          pagination: true,
          navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
      });     
        
    // CLIENT REVIEWS
      $(".testimonial-bottom").owlCarousel({
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          autoPlay: true,    
      });   
    
    // FOR FILTER MENU ACTIVE CLASS
    $('.filter_menu li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    // filter items on button click
    $('.filter_menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    
    // ISOTOP PLUGIN
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
        }
    });

})(jQuery);