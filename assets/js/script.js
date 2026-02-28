// Hide Header on on scroll down
if ($('.main-header').length) {
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.main-header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.main-header').removeClass('header-down').addClass('header-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.main-header').removeClass('header-up').addClass('header-down');
      }
    }

    lastScrollTop = st;
  }
}


(function ($) {

  "use strict";
  // WOW JS
  new WOW().init();

  $(window).on('load', function () {
    $('.preloader').fadeOut(500);
  });



  // Scroll Area
  var $scroll = $('.scroll-area');
  if ($scroll.length > 0) {
    $(document).ready(function () {
      $('.scroll-area').click(function () {
        $('html').animate({
          'scrollTop': 0,
        }, 700);
        return false;
      });
      $(window).on('scroll', function () {
        var a = $(window).scrollTop();
        if (a > 400) {
          $('.scroll-area').slideDown(300);
        } else {
          $('.scroll-area').slideUp(200);
        }
      });
    });
  }


  //video
  var $video = $('.technology-video a');
  if ($video.length > 0) {
    $('.technology-video a').magnificPopup({
      type: 'iframe',
    });
  }

  // Gallery Lightbox
  if ($('.gallery-lightbox').length) {
    $('.gallery-lightbox').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }


  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($('.main-header').length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $('.main-header');
      var scrollLink = $('.scroll-to-top');
      if (windowpos >= 1) {
        siteHeader.addClass('fixed-header');
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass('fixed-header');
        scrollLink.fadeOut(300);
      }
    }
  }
  headerStyle();


  //Search Toggle
  if ($('.search-box').length) {
    $('.search-toggle').on('click', function () {
      $('body').toggleClass('visible-search');
    });
    $('.s-close-btn,.search-backdrop').on('click', function () {
      $('body').removeClass('visible-search');
    });
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $('body').removeClass('visible-search');
      }
    });
  }

  //Info Sidebar Toggle
  if ($('.main-header .info-toggler .info-btn').length) {
    //Show Form
    $('.main-header .info-toggler .info-btn').on('click', function (e) {
      e.preventDefault();
      $('body').addClass('side-content-visible');
    });
    //Hide Form
    $('.info-bar .inner-box .cross-icon,.info-back-drop,.close-menu').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('side-content-visible');
    });
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $('body').removeClass('side-content-visible');
      }
    });
  }

  //Hidden Bar Menu Config
  function hiddenBarMenuConfig() {
    var menuWrap = $('.hidden-bar .side-menu');
    // appending expander button
    menuWrap.find('li.dropdown > a').append(function () {
      return '<button type="button" class="btn-expander"><i class="far fa-angle-right"></i></button>';
    });
    // hidding submenu
    menuWrap.find('.dropdown').children('ul').hide();

    $(".hidden-bar .side-menu ul li.dropdown .btn-expander").on('click', function (e) {
      e.preventDefault();
      $(this).parent('a').parent('li').children('ul').slideToggle();
      // toggling arrow of expander
      $(this).find('i').toggleClass('fa-angle-right fa-angle-down');
      return false;
    });

    $(".hidden-bar .side-menu ul li a").on('click', function () {
      $('.hidden-bar,body').removeClass('visible-sidebar');
    });
  }

  hiddenBarMenuConfig();


  //Custom Scroll for Hidden Sidebar
  if ($('.hidden-bar').length) {

    $('.hidden-bar-closer,.menu-backdrop').on('click', function () {
      $('.hidden-bar,body').removeClass('visible-sidebar');
      $('.side-menu ul li.dropdown ul').slideUp();
      $('.side-menu ul li.dropdown > a i').removeClass('fa-angle-right').addClass('fa-angle-down');
    });
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $('.hidden-bar,body').removeClass('visible-sidebar');
        $('.side-menu ul li.dropdown ul').slideUp();
        $('.side-menu ul li.dropdown > a i').removeClass('fa-angle-right').addClass('fa-angle-down');
      }
    });
    $('.hidden-bar-opener').on('click', function () {
      $('.hidden-bar,body').addClass('visible-sidebar');
    });
  }

  //Banner Carousel
  if ($('.banner-slider').length) {
    var swiper = new Swiper('.banner-slider', {
      autoplay: true,
      autoplaySpeed: 7000,
      effect: "fade",
      speed: 1000,
      margin: 0,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 7000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }


  ///testimonial
  var $test = $('.testimonila-slider');
  if ($test.length > 0) {
    $(document).ready(function () {
      $(".testimonila-slider").owlCarousel({
        loop: true,
        center: true,
        margin: 40,
        items: 1,
        autoplay: true,
        nav: true,
        navText: ["<span class='fas fa-long-arrow-alt-left'></span>", "<span class='fas fa-long-arrow-alt-right'></span>"],
      });
    });
  }

  /* Our menu slider */
  var $full = $('.our-menu-slider');
  if ($full.length > 0) {
    $(document).ready(function () {
      $(".our-menu-slider").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        lazyLoad: true,
        paginationSpeed: 400,
        singleItem: true,
        items: 1
      });

    });
  }


  /*---------------------------------------------------
          counter
  ----------------------------------------------------*/
  var $count = $('.counter-single .timer');
  if ($count.length > 0) {
    $('.counter-single .timer').counterUp({
      delay: 10, // the delay time in ms
      time: 1000 // the speed time in ms
    });

  }
  var $tab = $('#tabs');
  if ($tab.length > 0) {
    $(function () {
      $("#tabs").tabs();
    });
  }





  // Elements Animation
  if ($('.wow').length) {
    var wow = new WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: false,       // trigger animations on mobile devices (default is true)
        live: true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
  }


  /* ==========================================================================
     When document is Scrollig, do
     ========================================================================== */

  $(window).on('scroll', function () {
    headerStyle();
  });




  $("div.tab-menu>div.list-group>a").click(function (e) {
    e.preventDefault();
    $(this).siblings('a.active').removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $("div.our-menu-tabs>div.tab-content").removeClass("active");
    $("div.our-menu-tabs>div.tab-content").eq(index).addClass("active");
  });



})(window.jQuery);

